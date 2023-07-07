import { Fragment } from "react"
import "../styles/Nav.scss"
import { Menu, Transition } from "@headlessui/react"
import { BsChevronDown } from 'react-icons/bs';
import SearchBar from "./SearchBar";
import { PropsPagesGames } from "../types/types";

export default function Nav({pagesGames}:PropsPagesGames) {
  function classNames(...classes: [string, string]) {
    return classes.filter(Boolean).join(' ')
  }
  
  return (
    <div className="contNav">
      <h1>G🎮mes</h1>
      <h3>home</h3>
      <h3>section</h3>
        
      <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-500 px-2 text-sm font-semibold text-gray-900 ring-gray-300 items-center">
          Options
          <BsChevronDown className="" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/platform"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Platform
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/category"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Category 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/alphabetical"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Alphabetical
                </a>
              )}
            </Menu.Item>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>

      <h3>favorites games</h3>
      <SearchBar pagesGames={pagesGames} />
    </div>
  )
}
