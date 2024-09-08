import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [navigation,setNavigation] = useState([
    { name: 'Features', to: '#features', current: true },
    { name: 'About', to: '#about', current: false },
    { name: 'Services', to: '#services', current: false },
    { name: 'Gallery', to: '#gallery', current: false },
    { name: 'Testimonials', to: '#testimonials', current: false },
    { name: 'Team', to: '#team', current: false },
    { name: 'Contact', to: '#contact', current: false },
  ])

  {/*to be revised 
  const location = useLocation()
  useEffect(() => {
    const updateActiveItem = () => {
      const activeItem = navigation.find(item => item.to === location.hash)
      if (activeItem) {
        setNavigation(prevNavigation =>
          prevNavigation.map(navItem => ({
            ...navItem,
            current: navItem === activeItem
          }))
        )
      }
    }

    updateActiveItem()

    window.addEventListener('scroll', updateActiveItem)

    return () => window.removeEventListener('scroll', updateActiveItem)
  }, [location.hash])
  */}


  const handleLinkClick = (item) => {
    const targetElement = document.getElementById(item.to.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setNavigation((prevNavigation) => {
      return prevNavigation.map((navItem) => ({
        ...navItem,
        current: navItem === item,
      }));
    });
  };

  return (
    <Disclosure as="nav" className="shadow-md fixed top-0 left-0 right-0 bg-white page-scroll z-10">
      <div className="mx-auto w-full py-2 px-2 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center px-10 justify-between sm:items-stretch sm:justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link to='#' onClick={()=>handleLinkClick({to:'#root'})}><h1 className="w-auto font-bold text-2xl ml-0 sm:ml-28 scroll-smooth">LANDING PAGE</h1></Link>
          </div>
          <div className="relative flex h-16 justify-between items-center ">
            <div className="absolute inset-y-0 left-0 flex justify-between items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-between rounded-md p-2 text-gray-600">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={()=>handleLinkClick(item)}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? 'text-gray-600' : 'text-gray-600',
                        'rounded-md px-4 py-3 font-medium group text-xl scroll-smooth',
                      )}
                    >
                      {item.name}
                      <div className={classNames(
                        item.current ? 'bg-blue-500 h-[2px] w-full' : 'bg-blue-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-in-out'
                      )} />
                    </Link>
                ))}
              </div>
            </div>
          </div>
          </div>
      </div>

      <DisclosurePanel className="sm:hidden transition-all duration-500 ease-in-out">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              to={item.to}
              onClick={()=>handleLinkClick(item)}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-gray-600' : 'text-gray-600',
                'block rounded-md px-3 py-2 text-base font-medium group scroll-smooth',
              )}
            >
              {item.name}
              <div className={classNames(
                item.current ? 'bg-blue-500 h-[2px] w-full' : 'bg-blue-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-in-out'
              )} />
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}