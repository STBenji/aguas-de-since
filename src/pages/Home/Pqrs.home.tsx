import { PQRSInfo } from '../../components/PqrsInfo'

export const HomePQRS = () => {
  return (
    <section className='flex flex-col gap-16 p-16'>
      <h2 className='text-3xl font-semibold text-center'>
        ¿Cual es el procedimiento para presentar una <span className='text-[#004FB6]'>PQRS</span>?
      </h2>
      <PQRSInfo />
    </section>
  )
}
