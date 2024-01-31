import { Footer } from '../../components/Footer'
import { NavbarComponent } from '../../components/Navbar'
import CCUPdfLector from './CCU.pdfLector'

export default function CcuPage() {
  return (
    <>
      <NavbarComponent />
      <main>
        <CCUPdfLector />
      </main>
      <Footer />
    </>
  )
}
