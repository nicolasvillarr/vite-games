import "../styles/Nav.scss"
import { Menu, Transition } from "@headlessui/react"
export default function Nav() {

  return (
    <div className="contNav">
      <h1>G🎮mes</h1>
      <h3>home</h3>
      <h3>section</h3>
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button>
              🍕
            </Menu.Button>
            <div className='px-3 pb-3 backdrop-blur-xl'>
              <div>
                <Transition
                  show={open}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 transform scale-95'
                  enterTo='opacity-100 transform scale-100'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 transform scale-100'
                  leaveTo='opacity-0 transform scale-95'
                >

                  <Menu.Items className='mt-2 text-white '>
                    <Menu.Item>
                      {({ active }) => ( 
                        <a className={`${active && 'bg-red-600 '}`} href=''>Inicio</a>
                      )}
                    </Menu.Item>
                  </Menu.Items>

                </Transition>
                <Transition
                  show={open}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 transform scale-95'
                  enterTo='opacity-100 transform scale-100'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 transform scale-100'
                  leaveTo='opacity-0 transform scale-95'
                >
                  <Menu.Items className='mt-2 text-white'>
                    <Menu.Item>
                      {({ active }) => (
                        <a className={`${active && 'bg-purple-600'}`} href=''>Sobre Volcano</a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
                <Transition
                  show={open}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 transform scale-95'
                  enterTo='opacity-100 transform scale-100'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 transform scale-100'
                  leaveTo='opacity-0 transform scale-95'
                >
                  <Menu.Items className='mt-2 text-white'>
                    <Menu.Item>
                      {({ active }) => (
                        <a className={`${active && 'bg-purple-600'}`} href=''>Oradores</a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
                <Transition
                  show={open}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 transform scale-95'
                  enterTo='opacity-100 transform scale-100'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 transform scale-100'
                  leaveTo='opacity-0 transform scale-95'
                >
                  <Menu.Items className='mt-2 text-white'>
                    <Menu.Item>
                      {({ active }) => (
                        <a className={`${active && 'bg-purple-600'}`} href=''>Páginas</a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
                <Transition
                  show={open}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 transform scale-95'
                  enterTo='opacity-100 transform scale-100'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 transform scale-100'
                  leaveTo='opacity-0 transform scale-95'
                >
                  <Menu.Items className='mt-2 text-white'>
                    <Menu.Item>
                      {({ active }) => (
                        <a className={`${active && 'bg-purple-600'}`} href=''>Blog</a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
                <Transition
                  show={open}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 transform scale-95'
                  enterTo='opacity-100 transform scale-100'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 transform scale-100'
                  leaveTo='opacity-0 transform scale-95'
                >
                  <Menu.Items className='mt-2 text-white'>
                    <Menu.Item>
                      {({ active }) => (
                        <a className={`${active && 'bg-purple-600'}`} href=''>Contacto</a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
                <Transition
                  show={open}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 transform scale-95'
                  enterTo='opacity-100 transform scale-100'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 transform scale-100'
                  leaveTo='opacity-0 transform scale-95'
                >
                  <Menu.Items className='mt-2 text-white'>
                    <Menu.Item>
                      {({ active }) => (
                        <a className={`${active && 'bg-purple-600'}`} href='/faqs'>FAQs</a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </div>
            </div>
          </>
        )}
      </Menu>
      <h3>favorites games</h3>
      <form className="nav">
        <input placeholder='🔎 search game'/>
      </form>
    </div>
  )
}
