import { FacebookIcon, PhoneCallIcon, UbicationIcon } from '../../components/Icons'

export default function DateContanct() {
  return (
    <article className='grid-cols-3 gap-10 p-5 py-10 md:grid'>
      <section className='flex justify-center md:border-r-3 border-[#c2c2c2] py-10 gap-5 '>
        <p className='font-bold'>Siguenos en: </p>
        <FacebookIcon />
      </section>
      <section className='flex justify-center md:border-r-3 border-[#c2c2c2] py-10 gap-5'>
        <PhoneCallIcon />
        <a href='https://wa.me/message/JISDUY4RPKG5F1' className='underline cursor-pointer' target='_blank'>+57 323 4197160</a>
      </section>
      <section className='flex justify-center gap-5 py-10 '>
        <UbicationIcon />
        <p>
          Calle 6 # 10-28, Barrio La Ceja, <br /> Sincé - Sucre
        </p>
      </section>
    </article>
  )
}
