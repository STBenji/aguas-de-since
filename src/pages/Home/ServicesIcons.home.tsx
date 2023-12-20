import { Fragment } from 'react'
import { IconOne, IconTwo } from '../../components/Icons'

export const ServicesIcons = () => (
  <Fragment>
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
  </Fragment>
)
