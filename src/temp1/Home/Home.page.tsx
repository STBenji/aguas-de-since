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
        <HomeHero />
        <ServicesIcons />
        <CompanyDetails />
        <HomePQRS />
      </main>
      <Footer />
    </>
  )
}
