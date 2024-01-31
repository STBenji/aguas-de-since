import { IconOne, IconTwo } from '../../components/Icons'
import { motion, Variants } from 'framer-motion'

export default function ServicesAboutUs() {
  const titleServicesAboutVariant: Variants = {
    offscreen: { opacity: 0, x: -100 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const container = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }

  const servicesAboutVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.section
      className='grid px-4 md:grid-cols-2 py-36 gap-y-12'
      initial='offscreen'
      whileInView={'onscreen'}>
      <motion.aside
        className='grid place-content-center'
        variants={titleServicesAboutVariant}>
        <div className=' border-t-5 border-[#4628A4] w-[4rem] h-5 m-0 p-0' />
        <h2 className='text-2xl font-bold'>Nuestros Servicios</h2>
      </motion.aside>
      <motion.article
        initial='hidden'
        whileInView='visible'
        variants={container}
        className='flex flex-col items-center justify-center w-full gap-10 shadow-2xl rounded-xl md:flex-row min-h-[40vh]'>
        <motion.div
          className='flex items-center gap-3'
          variants={servicesAboutVariant}>
          <IconOne
            width={70}
            height={70}
            className='bg-[#ecffda] p-4'
          />
          <span className='font-semibold'>Acueducto</span>
        </motion.div>
        <motion.div
          className='flex items-center gap-3'
          variants={servicesAboutVariant}>
          <IconTwo
            width={70}
            height={70}
            className='bg-[#dae6ff] p-4'
          />
          <span className='font-semibold'>Alcantarillado</span>
        </motion.div>
      </motion.article>
    </motion.section>
  )
}
