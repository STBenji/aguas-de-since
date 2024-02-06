import { Image } from '@nextui-org/react'

export const Footer = () => {
  return (
    <footer className='grid grid-rows-[1fr_auto] mt-20'>
      <section className='grid grid-rows-3 px-24 pb-10 border-b md:grid-rows-1 md:grid-cols-3 border-b-gray-400'>
        <div
          aria-describedby='Información de empresa'
          className='grid justify-center auto-rows-min'>
          <span className='mx-auto md:mx-0'>
            <Image
              width={110}
              height={110}
              src='/LogoPrincipal_2.png'
              alt='Logo de la empresa'
            />
          </span>
          <p className='text-sm text-center font-extralight md:text-left'>Empresa oficial de servicios públicos de acueducto y alcantarillado del municipio de Sincé Sucre</p>
        </div>
        <div
          aria-describedby='Contacto'
          className='grid items-center justify-center grid-rows-[1fr_1fr] gap-2 text-center'>
          <h4 className='self-end font-semibold'>Contáctanos</h4>
          <div className='flex flex-col'>
            <a
              href='tel:+573147942101'
              className='text-sm font-extralight'>
              +57 323 4197160
            </a>
            <a
              className='text-sm font-extralight'
              href='mailto:'>
              aguasdesince@since-sucre.gov.co
            </a>
          </div>
        </div>
        <div
          aria-describedby='Lugar de la empresa'
          className='grid items-center justify-center grid-rows-[1fr_1fr] gap-2 text-center'>
          <h4 className='self-end font-semibold'>¿Dónde encontrarnos?</h4>
          <p className='text-sm font-extralight'>Calle 6 # 10-28 Barrio La Ceja, Sincé - Sucre</p>
        </div>
      </section>
      <section className='p-4'>
        <h5 className='text-sm font-light text-center'>Copyright ® 2023 Aguas de Sincé Reserved</h5>
      </section>
    </footer>
  )
}
