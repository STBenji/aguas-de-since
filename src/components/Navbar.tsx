import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Button } from '@nextui-org/react'
import { Logo } from './Icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Signal, signal } from '@preact/signals-react'

type TActualLink = '/' | '/about' | '/contact' | '/bill'

export const NavbarComponent = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const actualLink: Signal<TActualLink> = signal('/')

  const menuItems = ['Inicio', 'Acerca de nosotros', 'Contáctanos', 'Angenda tu cita', 'Paga tu factura']

  return (
    <Navbar
      onMenuOpenChange={setOpenMenu}
      height={'12lvh'}
      className='border-b border-b-gray-300'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={openMenu ? 'Menu cerrado' : 'Menu abierto'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Logo
            width={100}
            height={100}
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className='hidden gap-8 sm:flex'
        justify='center'>
        <NavbarItem>
          <Link
            to='/'
            className={actualLink.value === '/' ? 'font-semibold' : ''}>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/about'>Acerca de nosotros</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/contact'>Contáctanos</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to='/bill'>Paga tu factura</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button color='primary'>Agenda tu cita</Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
              className='w-full'
              to='/'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
