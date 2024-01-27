import { IconOne, IconTwo } from '../../components/Icons'
import { motion, Variants } from 'framer-motion'

export const ServicesIcons = () => {
  const servicesVariant: Variants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  }

  return (
    <motion.section
      className='h-[30lvh] flex flex-col md:flex-row justify-center items-center gap-10 border-b border-b-gray-300'
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: false, amount: 0.8 }}>
      <motion.div
        className='flex items-center gap-3'
        variants={servicesVariant}>
        <IconOne
          width={70}
          height={70}
          className='bg-[#ecffda] p-4'
        />
        <span className='font-semibold'>Acueducto</span>
      </motion.div>
      <motion.div
        className='flex items-center gap-3'
        variants={servicesVariant}>
        <IconTwo
          width={70}
          height={70}
          className='bg-[#dae6ff] p-4'
        />
        <span className='font-semibold'>Alcantarillado</span>
      </motion.div>
    </motion.section>
  )
}
