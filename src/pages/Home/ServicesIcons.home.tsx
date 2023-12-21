import { IconOne, IconTwo } from '../../components/Icons'

export const ServicesIcons = () => (
  <section className='h-[30lvh] flex flex-col md:flex-row justify-center items-center gap-10 border-b border-b-gray-300'>
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
  </section>
)
