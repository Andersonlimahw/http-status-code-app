import {FC } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Header } from '../Header/index';
import { useHttpList } from '../../pages/Home/hooks/use-http-list';
import { tabs } from '../../pages/Home/constants';

const user = {
  name: 'Anderson Lima',
  email: 'andersonlimahw@gmail.com',
  avatarImageUrl:
    'https://avatars.githubusercontent.com/u/15092575?v=4',
}
const navigation = tabs;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
interface WrapperBarProps {
  children: any;
}
export const Wrapper: FC<WrapperBarProps> = ({ children }: WrapperBarProps) => {
  const httpListZustand = useHttpList((state: any) => state);

  function search(family: string) {
    if (family === 'all') {
      return httpListZustand.resetFilter();
    }
    return httpListZustand.filterList(family);
  }

  return (
    <>
      <div className="min-h-full ">
        <Disclosure as="nav" className="bg-zinc-900 fixed min-w-100vw z-30">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-green-600">
                      {/* <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      /> */}
                      {/* // TODO: criar logo via canva Ia */}
                      🍋 <span className="text-green-500">Lemon.dev</span>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-2">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            onClick={() => search(item.family)}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-green-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="md:block">
                    <div className="ml-4 flex items-center md:ml-6">

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3 sm:hidden md:block">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-zinc-800 hover:bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.avatarImageUrl} alt="lemon.dev" />
                          </Menu.Button>
                        </div>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"

                      className={classNames(
                        item.current ? 'bg-white-500 text-green-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.avatarImageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>


        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Header />
            <Transition
              appear={true}
              show={true}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0 scale-100"
              enterTo="opacity-100"
              leave="transition-opacity duration-100"
              leaveFrom="opacity-100 scale-00"
              leaveTo="opacity-0"
            >
              {children}
            </Transition>
            
          </div>
        </main>
      </div>
    </>
  )
}

export default Wrapper;