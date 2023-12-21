import { ListedTitle } from './ListedTitle'

interface IContentBlockProps {
  data: IDataContent[]
  isListedTitle?: boolean
}

export interface IDataContent {
  title: string
  description: string
  imgSrc: string
  isReversed?: boolean
}

export const ContentBlock = ({ isListedTitle, data = [] }: IContentBlockProps) => {
  return data.map(({ title, imgSrc, description, isReversed }, index) => (
    <section
      key={index}
      className='grid max-h-fit items-center grid-cols-1 grid-rows-[auto_auto] gap-10 md:grid-rows-1 md:grid-cols-2'>
      <article className={`flex flex-col justify-center gap-4 ${isReversed && 'md:order-2'}`}>
        {isListedTitle ? <ListedTitle content={title} /> : <h2 className='text-2xl font-semibold'>{title}</h2>}
        <p>{description}</p>
      </article>
      <aside className='max-h-96'>
        <img
          src={imgSrc}
          alt='Descripcion del bloque de texto'
          className='object-cover w-full h-full rounded-xl aspect-auto'
          loading='lazy'
        />
      </aside>
    </section>
  ))
}
