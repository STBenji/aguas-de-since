import CountUp from 'react-countup'
import { motion, Variants } from 'framer-motion'

import { Card } from '../../components/Card'
import { Footer } from '../../components/Footer'
import { NavbarComponent } from '../../components/Navbar'
import { HeroServices } from './Hero.services'
import { ServicesDetails } from './ServicesDetails.services'

export default function ServicesPage() {
  const countVariant: Variants = {
    offscreen: {
      width: 0,
      x: -200,
      opacity: 0
    },
    onscreen: {
      width: '100%',
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7
      }
    }
  }

  return (
    <>
      <NavbarComponent />
      <main>
        <HeroServices />
        <ServicesDetails />
        <motion.section
          initial='offscreen'
          whileInView={'onscreen'}>
          <motion.div variants={countVariant}>
            <Card
              className='flex flex-col items-center justify-center gap-10 p-16 md:flex-row bg-primary-blue'
              textColor='white'>
              <div className='text-center'>
                <h3 className='text-5xl font-bold '>
                  <CountUp
                    enableScrollSpy
                    scrollSpyDelay={700}
                    prefix='+'
                    end={20}
                    duration={3}
                  />
                </h3>
                <p className='font-extralight text-small'>Familias felices</p>
              </div>
              <div className='text-center'>
                <h3 className='text-5xl font-bold '>
                  <CountUp
                    enableScrollSpy
                    scrollSpyDelay={700}
                    prefix='+'
                    end={20}
                    duration={3}
                  />
                </h3>
                <p className='font-extralight text-small'>Instalaciones exitosas</p>
              </div>
            </Card>
          </motion.div>
        </motion.section>
      </main>
      <Footer />
    </>
  )
}
