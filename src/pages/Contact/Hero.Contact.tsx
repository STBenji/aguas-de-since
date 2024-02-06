import { Image } from '@nextui-org/react'
import { ListedTitle } from '../../components/ListedTitle'

export function HeroContact() {
  return (
    <section className='justify-center px-5 py-5 md:flex'>
      <ListedTitle
        content='¿Dónde encontrarnos?'
        className='text-xl md:text-3xl'
      />
      <article className='relative'>
        <div className='hidden md:grid rounded-full w-[2.4rem] h-[2.4rem] bg-[#ff00002a]  place-content-center absolute bottom-32 left-40 z-10'>
          <div className='md:rounded-full w-[.5rem] h-[.5rem] bg-red-600' />
        </div>
        <Image
          src='/map.png'
          className='z-0'
        />
      </article>
    </section>
  )
}
