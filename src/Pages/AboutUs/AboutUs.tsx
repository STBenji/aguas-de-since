import { Footer } from '../../components/Footer'
import { NavbarComponent } from '../../components/Navbar'
import DescriptionAboutUs from './Description.AboutUs'
import HeroAboutUs from './Hero.AboutUS'
import PurposeAboutUs from './Purpose.AboutUs'
import ServicesAboutUs from './Services.AboutUs'
import ShapesDecoratorsAboutUs from './ShapesDecorators.AboutUs'

export default function AboutUs() {
  return (
    <>
      <NavbarComponent />
      <main>
        <HeroAboutUs />
        <ShapesDecoratorsAboutUs />
        <DescriptionAboutUs />

        <ServicesAboutUs />
        <PurposeAboutUs />
      </main>
      <Footer />
    </>
  )
}
