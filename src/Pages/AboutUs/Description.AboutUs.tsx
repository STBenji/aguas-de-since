import { Fragment } from 'react'

export default function DescriptionAboutUs() {
  const description = 'La empresa de servicios públicos "Aguas de Sincé S.A.S ESP", es una entidad oficial, municipal, descentralizada por servicios, creada mediante documento privado, con autonomía administrativa, presupuestal y financiera, que tiene por objeto la prestación eficiente y eficaz de los servicios de Acueduto y Alcantarillado en el municipio de Sincé, Sucre.'

  return (
    <Fragment>
      <h1 className='text-[#1090CB] text-4xl font-bold text-center py-32'>¿Quiénes somos?</h1>
      <p className='text-xl px-96 text-[#262626]'>{description}</p>
    </Fragment>
  )
}
