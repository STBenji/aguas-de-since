import { motion } from 'framer-motion'
import { ContentBlock, IDataContent } from '../../components/ContentBlock'

export const ServicesDetails = () => {
  const contentBlockData: IDataContent[] = [
    {
      title: 'Higiene y Bienestar en Cada Desagüe',
      description:
        'En Aguas de Since, no solo nos enfocamos en el suministro de agua potable, sino también en la gestión responsable de los desechos a través de nuestro servicio de alcantarillado. Nos comprometemos a mantener la higiene y la salubridad en cada comunidad, asegurando un sistema de alcantarillado eficiente que preserve el entorno y promueva la salud pública. Nuestro enfoque integral abarca desde el diseño hasta el mantenimiento, asegurando que los residuos sean tratados de manera adecuada y respetuosa con el medio ambiente. Confía en nosotros para mantener tus hogares y comunidades limpias, seguras y libre de contaminación.',
      imgSrc: './foto8.jpg'
    },
    {
      title: 'Fluyendo con Calidad: Tu Agua, Nuestra Prioridad',
      description:
        'El servicio de acueducto de Aguas de Since representa nuestra dedicación a proporcionar agua de calidad excepcional a cada hogar. Nos esforzamos por asegurar un suministro continuo y confiable de agua potable, utilizando tecnología de vanguardia y prácticas sostenibles en cada paso del proceso. Desde la captación responsable de fuentes hasta la distribución eficiente, nuestro objetivo es entregar agua que cumpla con los más altos estándares de calidad, promoviendo la salud y el bienestar de la comunidad. Confía en nosotros para proporcionar un flujo constante de pureza a tu vida diaria.',
      imgSrc: './foto9.jpg',
      isReversed: true
    }
  ]

  return (
    <section className='min-h-screen p-16 pt-72 md:pt-52'>
      <motion.div
        className='flex flex-col gap-20'
        initial='offscreen'
        whileInView='onscreen'>
        <ContentBlock data={contentBlockData} />
      </motion.div>
    </section>
  )
}
