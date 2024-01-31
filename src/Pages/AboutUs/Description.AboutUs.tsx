import { motion, Variants } from 'framer-motion'

export default function DescriptionAboutUs() {
  const description = 'La empresa de servicios públicos "Aguas de Sincé S.A.S ESP", es una entidad oficial, municipal, descentralizada por servicios, creada mediante documento privado, con autonomía administrativa, presupuestal y financiera, que tiene por objeto la prestación eficiente y eficaz de los servicios de Acueduto y Alcantarillado en el municipio de Sincé, Sucre.'

  const descriptionVariant: Variants = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: {
        duration: .6
      }
    }
  }

  return (
    <motion.section
      className='flex flex-col items-center'
      initial='offscreen'
      whileInView={'onscreen'}>
      <motion.h2
        variants={descriptionVariant}
        className='text-[#1090CB] text-4xl font-bold text-center py-40'>
        ¿Quiénes somos?
      </motion.h2>
      <motion.p
        variants={descriptionVariant}
        className='text-xl text-[#585858] max-w-[70%] '>
        {description}
      </motion.p>
    </motion.section>
  )
}
