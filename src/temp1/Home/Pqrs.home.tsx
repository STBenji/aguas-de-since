import { PQRSInfo } from '../../components/PqrsInfo'
import { motion, Variants } from 'framer-motion'

export const HomePQRS = () => {
  const psqrVariant: Variants = {
    offscreen: {
      y: -110,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .2
      }
    }
  }

  return (
    <motion.section
      className='flex flex-col gap-16 p-16'
      initial='offscreen'
      whileInView='onscreen'>
      <motion.h2
        className='text-3xl font-semibold text-center'
        variants={psqrVariant}>
        ¿Cual es el procedimiento para presentar una <span className='text-[#004FB6]'>PQRS</span>?
      </motion.h2>
      <PQRSInfo />
    </motion.section>
  )
}
