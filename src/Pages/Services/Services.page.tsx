import CountUp from 'react-countup'

import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { NavbarComponent } from '../../components/Navbar'
import { HeroServices } from './Hero.services'
import { ServicesDetails } from './ServicesDetails.services'

export default function ServicesPage() {
  return (
    <>
      <NavbarComponent />
      <main>
        <HeroServices />
        <ServicesDetails />
        <Card
          className='flex flex-col items-center justify-center gap-10 p-16 md:flex-row bg-primary-blue '
          textColor='white'>
          <div className='text-center'>
            <h3 className='text-5xl font-bold '>
              <CountUp
                enableScrollSpy
                scrollSpyDelay={300}
                prefix='+'
                end={20}
                duration={3}
              />
            </h3>
            <p className='font-extralight text-small'>Familia con felices</p>
          </div>
          <div className='text-center'>
            <h3 className='text-5xl font-bold '>
              <CountUp
                enableScrollSpy
                scrollSpyDelay={300}
                prefix='+'
                end={20}
                duration={3}
              />
            </h3>
            <p className='font-extralight text-small'>Instalaciones exitosas</p>
          </div>
        </Card>
      </main>
      <Footer />
    </>
  )
}
