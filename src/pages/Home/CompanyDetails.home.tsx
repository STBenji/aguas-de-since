import { ContentBlock, IDataContent } from '../../components/ContentBlock'
import { Card } from '../../components/Card'
import { Variants, motion } from 'framer-motion'

export const CompanyDetails = () => {
  const contentBlockData: IDataContent[] = [
    {
      title: 'Descubre el flujo de calidad',
      description: 'Dedicados a llevar agua de calidad a cada hogar. Nuestro compromiso con la pureza, accesibilidad y sostenibilidad es constante.',
      imgSrc: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Aguas de Sincé: Donde el compromiso fluye',
      description: 'Aseguramos que el agua fluya sin interrupciones, manteniendo los estándares más altos en cada gota que entregamos',
      imgSrc: 'https://via.placeholder.com/300x200',
      isReversed: true
    },
    {
      title: 'Tu bienestar, nuestro compromiso',
      description: 'Nuestra misión es simple: proporcionar un servicio confiable y eficiente, garantizando la seguridad y el bienestar de tu hogar',
      imgSrc: 'https://via.placeholder.com/300x200'
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
        <motion.div
          className='grid grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1'
          initial='screenoff'
          whileInView='screenon'>
          <motion.div variants={textVariant}>
            <Card
              backgroundColor='#99999930'
              className='flex flex-col gap-6 text-center md:p-14'
              isRounded>
              <h3 className='text-xl font-medium'>Tu fuente confiable de calidad y compromiso</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iusto tenetur, ea ipsam quia minima cum mollitia est cupiditate commodi non alias reprehenderit veritatis modi ab officia. Dicta, deserunt ratione?</p>
            </Card>
          </motion.div>
          <motion.div variants={textVariant}>
            <Card
              backgroundColor='#004FB6'
              textColor='white'
              className='flex flex-col gap-6 text-center md:p-14'
              isRounded>
              <h3 className='text-xl font-medium'>Más que un suministro, una promesa de tranquilidad</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus deleniti pariatur ea quasi molestiae quos eaque, assumenda nulla sint minima dolorem est quia hic mollitia tempore praesentium voluptatum tempora.</p>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </motion.section>
  )
}
