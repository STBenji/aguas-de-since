import { FacebookIcon, Logo, WhatsAppIcon } from '../../components/Icons'
import { Button, Card, CardBody, CardFooter, Link } from '@nextui-org/react'
import { ShapesDecorators } from './ShapesDecorators.home'
import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

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
      <img
        src='./foto9.jpg'
        alt='aguas de sincé proyectos'
        className='absolute object-cover w-full h-[87lvh] to-transparent rounded-lg z-0 opacity-30 blur-sm  '
        loading='lazy'
      />

      <motion.article
        variants={container}
        initial='hidden'
        animate='visible'
        className='z-10 flex flex-col items-center gap-10 text-center'>
        <motion.h1
          className='text-6xl text-[#1090CB] font-semibold '
          variants={item}>
          Aguas de Sincé
        </motion.h1>
        <motion.p
          className='text-lg font-medium max-w-[40ch]'
          variants={item}>
          ¡Donde el agua fluye, la calidad y el compromiso llegan a tu hogar!
        </motion.p>
        <Card>
          <CardBody className='flex flex-row items-center gap-2'>
            Nuestras redes sociales:
            <FacebookIcon />
            <WhatsAppIcon />
          </CardBody>
        </Card>
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
