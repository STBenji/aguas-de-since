import { IconOne, IconTwo } from '../../components/Icons'

export default function ServicesAboutUs() {
  return (
    <section className='grid px-4 md:grid-cols-2 py-36 gap-y-12'>
      <aside className='grid place-content-center '>
        <div className=' border-t-5 border-[#4628A4] w-[4rem] h-5 m-0 p-0' />
        <h1 className='text-2xl font-bold'>Nuestros Servicios</h1>
      </aside>
      <article className='flex flex-col items-center justify-center w-full gap-10 shadow-2xl rounded-xl md:flex-row min-h-[40vh]'>
        <div className='flex items-center gap-3'>
          <IconOne
            width={70}
            height={70}
            className='bg-[#ecffda] p-4'
          />
          <span className='font-semibold'>Acueducto</span>
        </div>
        <div className='flex items-center gap-3'>
          <IconTwo
            width={70}
            height={70}
            className='bg-[#dae6ff] p-4'
          />
          <span className='font-semibold'>Alcantarillado</span>
        </div>
      </article>
    </section>
  )
}
