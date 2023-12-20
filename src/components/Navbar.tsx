import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Link, Button } from '@nextui-org/react'
import { Logo } from './Icons'
import { useState } from 'react'

const menuItems = ['Inicio', 'Acerca de nosotros', 'Contáctanos', 'Angenda tú cita', 'Paga tú factura']

export const NavbarComponent = () => {
  const [openMenu, setOpenMenu] = useState(false)

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
        <NavbarItem isActive>
          <Link href='#'>Inicio</Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href='#'
            color='foreground'>
            Acerca de nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='#'>
            Contáctanos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='#'>
            Paga tú factura
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={Link}
            color='primary'
            href='#'>
            Agenda tú cita
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? 'primary' : index === menuItems.length - 1 ? 'danger' : 'foreground'}
              className='w-full'
              href='#'
              size='lg'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
