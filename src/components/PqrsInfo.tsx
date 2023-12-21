import { Image } from '@nextui-org/react'

export const PQRSInfo = () => {
  return (
    <article className='grid items-center auto-rows-min gap-y-6 md:gap-y-0'>
      <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-[auto_1fr]'>
        <span className='justify-self-center md:justify-self-end'>
          <Image
            width={300}
            height={300}
            src='/LogoPrincipal_2.png'
            alt='Logo de la empresa'
          />
        </span>
        <h3 className='grid self-center text-3xl font-extrabold uppercase auto-rows-min'>
          <span className='justify-self-center text-center md:text-left md:pr-96 text-[#4ab8c7] text-shadow-[0_1.2px_1.2px_#4ab8c7]'>Peticiones,</span>
          <span className='text-transparent justify-self-center text-center md:text-left font-outline text-shadow-[0_1.2px_1.2px_#4ab8c7]'>Quejas, Reclamos</span>
          <span className='justify-self-center text-[#4ab8c7] text-center md:text-left'>Sugerencias y Denuncias</span>
        </h3>
      </div>
      <div className='max-w-screen-md mx-auto text-lg text-center min-w-min'>
        Si cuentas con alguna novedad que desees compartir, te invitamos cordialmente a acercarte a nuestras oficinas ubicadas en: <span className='font-semibold'>Calle 6 # 10-28 Barrio La Ceja, Sincé - Sucre</span>, o comunicarte al número: <span className='font-semibold'>314 7942101</span>
      </div>
    </article>
  )
}
