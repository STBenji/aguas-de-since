import { NavbarComponent } from '../../components/Navbar'
import DescriptionAboutUs from './Description.AboutUs'
import HeroAboutUs from './Hero.AboutUS'
import PurposeAboutUs from './Purpose.AboutUs'
import ServicesAboutUs from './Services.AboutUs'

export default function AboutUs() {
  return (
    <main>
      <NavbarComponent />
      <HeroAboutUs />
      <DescriptionAboutUs />
      <ServicesAboutUs />
      <PurposeAboutUs />
    </main>
  )
}
