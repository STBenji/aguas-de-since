import { Fragment } from 'react'
import { Logo } from '../../components/Icons'
import { Button } from '@nextui-org/react'

export const HomeHero = () => (
  <Fragment>
    <article className='flex flex-col items-center gap-10 text-center'>
      <h1 className='text-6xl text-[#1090CB] font-semibold'>Aguas de Sincé</h1>
      <p className='text-lg font-medium max-w-[40ch]'>¡Donde el agua fluye, la calidad y el compromiso llegan a tu hogar!</p>
      <Button color='primary'>Contáctanos</Button>
    </article>
    <aside className='items-center justify-center hidden sm:flex'>
      <Logo
        src='/LogoPrincipal_2.png'
        width={500}
        height={500}
      />
    </aside>
  </Fragment>
)
