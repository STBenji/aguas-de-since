import { Card } from '../../components/Card'
import { IconOne, IconThree, IconTwo } from '../../components/Icons'
import { Divider } from '@nextui-org/divider'
import { Variants, motion } from 'framer-motion'

export const HeroServices = () => {
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

  const textVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const servicesVariant: Variants = {
    offscreen: { y: 70, opacity: 0 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .7
      }
    }
  }

  return (
    <section className='h-[87lvh] bg-[#1090CB1A] p-16 grid gap-20'>
      <motion.article
        variants={container}
        initial='hidden'
        animate='visible'
        className='flex flex-col items-center gap-4'>
        <motion.div variants={textVariant}>
          <IconThree
            height={70}
            width={70}
            padding='p-8'
            isRounded
            roundedType='rounded-full'
            withBackground
            backgroundColor='bg-white'
          />
        </motion.div>
        <div className='grid gap-4 text-center place-items-center'>
          <motion.h2
            variants={textVariant}
            className='text-3xl font-semibold'>
            Nuestros <span className='text-primary-blue'>servicios</span>
          </motion.h2>
          <motion.p
            variants={textVariant}
            className='font-medium max-w-80 text-pretty text-medium'>
            Nos complace ofrecer los servicios de alcantarillado y acueducto de mayor calidad a la comunidad Sinceana
          </motion.p>
        </div>
      </motion.article>
      <motion.section
        initial={'offscreen'}
        whileInView={'onscreen'}>
        <Card
          backgroundColor='white'
          className='md:h-80 h-max grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr_auto_1fr] py-10'
          isRounded
          customPadding>
          <motion.div
            className='flex flex-col items-center justify-center gap-10 md:flex-row'
            variants={servicesVariant}>
            <IconOne
              height={50}
              width={50}
              padding='p-6'
              isRounded
              roundedType='rounded-3xl'
              withBackground
              backgroundColor='bg-[#ECFFDA]'
            />
            <p className='font-medium text-medium'>Acueducto</p>
          </motion.div>
          <Divider
            orientation='vertical'
            className='hidden md:block'
          />
          <motion.div
            variants={servicesVariant}
            className='flex flex-col items-center justify-center gap-10 md:flex-row'>
            <IconTwo
              height={50}
              width={50}
              padding='p-6'
              isRounded
              roundedType='rounded-3xl'
              withBackground
              backgroundColor='bg-[#DAE6FF]'
            />
            <p className='font-medium text-medium'>Alcantarillado</p>
          </motion.div>
        </Card>
      </motion.section>
    </section>
  )
}
