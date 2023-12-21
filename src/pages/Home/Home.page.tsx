import { ShapesDecorators } from './ShapesDecorators.home'
import { ServicesIcons } from './ServicesIcons.home'
import { HomeHero } from './Hero.home'
import { CompanyDetails } from './CompanyDetails.home'
import { NavbarComponent } from '../../components/Navbar'
import { HomePQRS } from './Pqrs.home'
import { Footer } from '../../components/Footer'

export default function HomePage() {
  return (
    <>
      <NavbarComponent />
      <main>
        <section className='h-[87lvh] bg-[#1090CB]/10 sm:px-32 grid sm:grid-cols-2 items-center gap-10 relative'>
          <HomeHero />
          <ShapesDecorators />
        </section>
        <section className='h-[30lvh] flex flex-col md:flex-row justify-center items-center gap-10 border-b border-b-gray-300'>
          <ServicesIcons />
        </section>
        <section className='flex flex-col gap-16 p-16'>
          <CompanyDetails />
        </section>
        <section className='flex flex-col gap-16 p-16'>
          <HomePQRS />
        </section>
      </main>
      <Footer />
    </>
  )
}
