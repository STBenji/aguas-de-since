import { Image } from '@nextui-org/react'

export default function HeroAboutUs() {
  return (
    <section className='grid gap-8 px-20 mt-5 md:grid-cols-2 '>
      <aside className='flex-wrap justify-end hidden gap-10 md:flex'>
        {/* <Image /> */}
        {/* <Image /> */}
        <section className='flex items-end '>
          <div className='w-[200px] h-[210px] bg-[#c4c4c4] rounded-2xl' />
        </section>
        <div className='w-[240px] h-[300px] bg-[#c4c4c4] rounded-2xl' />
        <Image
          width={390}
          height={341}
          src='/casaAguasDeSincé.jpg'
        />
      </aside>
      <section className='flex flex-wrap items-end justify-center md:justify-start gap-y-3'>
        <article className='flex flex-wrap gap-2 pl-12'>
          <span className='text-[#1090CB] font-semibold text-2xl'>Acerca de nosotros</span>
          <h1 className='text-4xl font-bold text-[#252525]'>Aguas de Sincé S.A ESP</h1>
          <p className='text-[#777]  font-regular '>
            Prestadora de servicios de acueducto y alcantarillado del <br /> municipio de Sincé.
          </p>
        </article>
        <Image
          width={380}
          height={341}
          src='/branding.jpg'
        />
      </section>
    </section>
  )
}
