import { ContentBlock, IDataContent } from '../../components/ContentBlock'
import { Card } from '../../components/Card'
import { Variants, motion } from 'framer-motion'

export const CompanyDetails = () => {
  const contentBlockData: IDataContent[] = [
    {
      title: 'Descubre el flujo de calidad',
      description: 'Dedicados a llevar agua de calidad a cada hogar. Nuestro compromiso con la pureza, accesibilidad y sostenibilidad es constante.',
      imgSrc: './foto5.jpg'
    },
    {
      title: 'Aguas de Sincé: Donde el compromiso fluye',
      description: 'Aseguramos que el agua fluya sin interrupciones, manteniendo los estándares más altos en cada gota que entregamos',
      imgSrc: './foto6.jpg',
      isReversed: true
    },
    {
      title: 'Tu bienestar, nuestro compromiso',
      description: 'Nuestra misión es simple: proporcionar un servicio confiable y eficiente, garantizando la seguridad y el bienestar de tu hogar',
      imgSrc: './foto7.jpg'
    }
  ]

  const companyVariant: Variants = {
    offscreen: {
      opacity: 0,
      transition: {
        delayChildren: 0.9,
        staggerChildren: 0.2
      }
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.9
      }
    }
  }

  const textVariant: Variants = {
    screenoff: {
      opacity: 0,
      transition: {
        delayChildren: 0.9,
        staggerChildren: 0.2
      }
    },
    screenon: {
      opacity: 1,
      transition: {
        duration: 0.9
      }
    }
  }

  return (
    <motion.section
      className='flex flex-col gap-16 p-16'
      initial='offscreen'
      whileInView='onscreen'>
      <motion.h2
        variants={companyVariant}
        className='text-3xl font-semibold text-center '>
        Prestadora del servicio de acueducto y alcantarillado del municipio de Sincé.
      </motion.h2>
      <section className='grid gap-32'>
        <motion.div
          className='flex flex-col gap-20'
          initial='offscreen'
          whileInView='onscreen'>
          <ContentBlock
            isListedTitle
            data={contentBlockData}
          />
        </motion.div>
        <div className='text-3xl font-semibold text-center'>
          <h1>Objetivos estratégicos</h1>
        </div>
        <motion.div
          className='grid grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1'
          initial='screenoff'
          whileInView='screenon'>
          <motion.div variants={textVariant}>
            <Card
              backgroundColor='#99999930'
              className='flex flex-col gap-6 text-center md:p-14'
              isRounded>
              <p>Garantizar la continuidad, calidad y cobertura de laprestación del servicio acueducto y alcantarillado en el Municipio de Sincé, Sucre.</p>
            </Card>
          </motion.div>
          <motion.div variants={textVariant}>
            <Card
              backgroundColor='#004FB6'
              textColor='white'
              className='flex flex-col gap-6 text-center md:p-14'
              isRounded>
              <p>Fortalecer los procesos de participación ciudadana con elfin de mejorar la prestación de los servicios públicos domiciliarios de acueducto y alcantarillado, así como afianzar los canales de comunicación con los grupos de interes.</p>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </motion.section>
  )
}
