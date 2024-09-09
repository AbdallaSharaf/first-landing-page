import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  // const navigate = useNavigate();
  const [navigation, setNavigation] = useState([
    { name: 'Features', to: '#features', current: true },
    { name: 'About', to: '#about', current: false },
    { name: 'Services', to: '#services', current: false },
    { name: 'Gallery', to: '#gallery', current: false },
    { name: 'Testimonials', to: '#testimonials', current: false },
    { name: 'Team', to: '#team', current: false },
    { name: 'Contact', to: '#contact', current: false },
  ]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (item) => {
    const targetElement = document.getElementById(item.to.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setNavigation(prevNavigation =>
      prevNavigation.map(navItem => ({
        ...navItem,
        current: navItem === item,
      }))
    );
    setMobileMenuOpen(false);
    // navigate(item.to, { replace: true });
  };

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.to.substring(1));
    const sectionElements = sectionIds.map((id) => document.getElementById(id));
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
  
    const observerCallback = (entries) => {
      let activeItem = null;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeItem = navigation.find(navItem => navItem.to.substring(1) === entry.target.id);
        }
      });
      
      setNavigation((prevNavigation) =>
        prevNavigation.map((navItem) => ({
          ...navItem,
          current: navItem === activeItem,
        }))
      );
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    sectionElements.forEach((element) => {
      if (element) observer.observe(element);
    });
  
    return () => {
      sectionElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [navigation]);
  
  return (
    <nav className="shadow-md fixed top-0 left-0 right-0 bg-white z-10">
      <div className="mx-auto w-full py-2 px-2 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center px-10 justify-between sm:items-stretch sm:justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link to="#" onClick={() => handleLinkClick({ to: '#root' })}>
              <h1 className="w-auto font-bold text-2xl ml-0 sm:ml-28">LANDING PAGE</h1>
            </Link>
          </div>
          <div className="relative flex h-16 justify-between items-center">
            <div className="absolute inset-y-0 left-0 flex justify-between items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                className="relative inline-flex items-center justify-between rounded-md p-2 text-gray-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className={`h-6 w-6 ${mobileMenuOpen ? 'hidden' : 'block'}`} />
                <XMarkIcon aria-hidden="true" className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`} />
              </button>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => handleLinkClick(item)}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-gray-600' : 'text-gray-600',
                      'rounded-md px-4 py-3 font-medium text-xl group'
                    )}
                  >
                    {item.name}
                    <div className={classNames(
                      item.current ? 'bg-blue-500 h-[2px] overflow-hidden transition-all duration-500 ease-in-out w-full' : 'bg-blue-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-in-out'
                    )} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={classNames(
          mobileMenuOpen ? 'max-h-screen' : 'max-h-0',
          'overflow-hidden sm:hidden transition-all duration-700 ease-in-out'
        )}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleLinkClick(item)}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-gray-600' : 'text-gray-600',
                'block rounded-md px-3 py-2 text-base font-medium group'
              )}
            >
              {item.name}
              <div className={classNames(
                item.current ? 'bg-blue-500 h-[2px] overflow-hidden transition-all duration-500 ease-in-out w-full' : 'bg-blue-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-in-out'
              )} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
