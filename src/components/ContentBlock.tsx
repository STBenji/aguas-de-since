import { ListedTitle } from './ListedTitle'

interface IContentBlockProps {
  blockHeight?: string
  data: IDataContent[]
  isListedTitle?: boolean
}

export interface IDataContent {
  title: string
  description: string
  imgSrc: string
  isReversed?: boolean
}

export const ContentBlock = ({ blockHeight, isListedTitle, data = [] }: IContentBlockProps) => {
  return data.map(({ title, imgSrc, description, isReversed }, index) => (
    <section
      key={index}
      className='grid grid-cols-1 grid-rows-2 gap-10 md:grid-rows-1 md:grid-cols-2'
      style={{ height: blockHeight }}>
      <article className={`flex flex-col justify-center gap-4 ${isReversed && 'md:order-2'}`}>
        {isListedTitle ? <ListedTitle content={title} /> : <h2 className='text-2xl font-semibold'>{title}</h2>}
        <p>{description}</p>
      </article>
      <aside>
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
