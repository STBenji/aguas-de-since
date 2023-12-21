import { Fragment } from 'react'
import { PQRSInfo } from '../../components/PqrsInfo'

export const HomePQRS = () => {
  return (
    <Fragment>
      <h2 className='text-3xl font-semibold text-center'>
        ¿Cual es el procedimiento para presentar una <span className='text-[#004FB6]'>PQRS</span>?
      </h2>
      <PQRSInfo />
    </Fragment>
  )
}
