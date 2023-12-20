import { Fragment } from 'react'
import { ContentBlock, IDataContent } from '../../components/ContentBlock'
import { Card } from '../../components/Card'

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

  return (
    <Fragment>
      <h2 className='text-3xl font-semibold text-center '>Prestadora del servicio de acueducto y alcantarillado del municipio de Sincé.</h2>
      <section className='grid gap-32'>
        <div className='flex flex-col gap-20'>
          <ContentBlock
            blockHeight='20rem'
            isListedTitle
            data={contentBlockData}
          />
        </div>
        <div className='grid grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1'>
          <Card
            backgroundColor='#99999930'
            className='flex flex-col gap-6 text-center p-14'
            isRounded>
            <h3 className='text-xl font-medium'>Tu fuente confiable de calidad y compromiso</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iusto tenetur, ea ipsam quia minima cum mollitia est cupiditate commodi non alias reprehenderit veritatis modi ab officia. Dicta, deserunt ratione?</p>
          </Card>
          <Card
            backgroundColor='#004FB6'
            textColor='white'
            className='flex flex-col gap-6 text-center p-14'
            isRounded>
            <h3 className='text-xl font-medium'>Más que un suministro, una promesa de tranquilidad</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus deleniti pariatur ea quasi molestiae quos eaque, assumenda nulla sint minima dolorem est quia hic mollitia tempore praesentium voluptatum tempora.</p>
          </Card>
        </div>
      </section>
    </Fragment>
  )
}
