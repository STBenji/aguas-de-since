import Navbar from '../../components/Navbar'
import DescriptionAboutUs from './Description.AboutUs'
import HeroAboutUs from './Hero.AboutUS'
import ServicesAboutUs from './Services.AboutUs'

export default function AboutUs({}) {
  return (
    <main>
      <Navbar />
      <HeroAboutUs />
      <DescriptionAboutUs />
      <ServicesAboutUs />
    </main>
  )
}
