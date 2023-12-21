import { Footer } from '../../components/Footer'
import { NavbarComponent } from '../../components/Navbar'
import { PQRSInfo } from '../../components/PqrsInfo'
import DateContanct from './Dates.Contact'
import { HeroContact } from './Hero.Contact'

export default function ContactPages() {
  return (
    <>
      <NavbarComponent />
      <main>
        <HeroContact />
        <DateContanct />
      </main>
      <PQRSInfo />
      <Footer />
    </>
  )
}
