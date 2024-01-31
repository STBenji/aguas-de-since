import { Image } from '@nextui-org/react'
import { motion } from 'framer-motion'

export default function HeroAboutUs() {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const aboutVariant = {
    hidden: { y: -70, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  }

  const imgHouseVariant = {
    hidden: { x: -70, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7
      }
    }
  }

  const imgBrandingVariant = {
    hidden: { x: 70, opacity: 0 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7
      }
    }
  }

  const nameVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.section
      className='grid gap-8 px-20 mt-5 md:grid-cols-2 '
      initial={'hidden'}
      whileInView={'visible'}
      variants={container}>
      <motion.aside className='flex-wrap justify-end hidden gap-10 md:flex'>
        <motion.section
          className='flex items-end '
          variants={aboutVariant}>
          <Image
            className='w-[200px] h-[210px]  rounded-2xl object-cover'
            src='./foto1.jpg'
            alt=''
            loading='lazy'
          />
        </motion.section>
        <motion.img
          className='w-[240px] h-[300px] rounded-2xl object-cover'
          src='./foto2.jpg'
          variants={aboutVariant}
          loading='lazy'
        />
        <motion.div variants={imgHouseVariant}>
          <Image
            width={390}
            height={341}
            src='/casaAguasDeSincé.jpg'
          />
        </motion.div>
      </motion.aside>
      <motion.section className='flex flex-wrap items-end justify-center md:justify-start gap-y-3'>
        <motion.article
          className='flex flex-wrap gap-2 pl-12'
          variants={nameVariant}>
          <span className='text-[#1090CB] font-semibold text-2xl'>Acerca de nosotros</span>
          <h2 className='text-4xl font-bold text-[#252525]'>Aguas de Sincé S.A ESP</h2>
          <p className='text-[#777]  font-regular '>
            Prestadora de servicios de acueducto y alcantarillado del <br /> municipio de Sincé.
          </p>
        </motion.article>
        <motion.div variants={imgBrandingVariant}>
          <Image
            width={380}
            height={341}
            src='/branding.jpg'
          />
        </motion.div>
      </motion.section>
    </motion.section>
  )
}
