import { Logo } from '../../components/Icons'
import { Button } from '@nextui-org/react'
import { ShapesDecorators } from './ShapesDecorators.home'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const HomeHero = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className='h-[87lvh] bg-[#1090CB]/10 sm:px-32 grid sm:grid-cols-2 items-center gap-10 relative'>
      <motion.article
        variants={container}
        initial='hidden'
        animate='visible'
        className='flex flex-col items-center gap-10 text-center'>
        <motion.h1
          className='text-6xl text-[#1090CB] font-semibold'
          variants={item}>
          Aguas de Sincé
        </motion.h1>
        <motion.p
          className='text-lg font-medium max-w-[40ch]'
          variants={item}>
          ¡Donde el agua fluye, la calidad y el compromiso llegan a tu hogar!
        </motion.p>
        <Button color='primary'>
          <Link to={'/contact'}>Contáctanos </Link>
        </Button>
      </motion.article>
      <motion.aside
        className='items-center justify-center hidden sm:flex'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}>
        <Logo
          src='/LogoPrincipal_2.png'
          width={500}
          height={500}
        />
      </motion.aside>
      <ShapesDecorators />
    </section>
  )
}
