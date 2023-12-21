import { Footer } from '../../components/Footer'
import { NavbarComponent } from '../../components/Navbar'
import { UserForm } from './UserForm.bill'

export default function BillPage() {
  return (
    <>
      <NavbarComponent />
      <main className='px-16 pt-16'>
        <UserForm />
      </main>
      <Footer />
    </>
  )
}
