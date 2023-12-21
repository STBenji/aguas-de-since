import { ScrollRestoration, createBrowserRouter } from 'react-router-dom'

/*
 * Components
 */
import App from './App'
import AboutUs from './pages/AboutUs/AboutUs'
import ServicesPage from './pages/Services/Services.page'
import ContactPages from './pages/Contact/Contact.pages'
import BillPage from './pages/Bill/Bill.page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
        <ScrollRestoration />
      </>
    )
  },
  {
    path: '/services',
    element: (
      <>
        <ServicesPage />
        <ScrollRestoration />
      </>
    )
  },
  {
    path: '/about',
    element: (
      <>
        <AboutUs />
        <ScrollRestoration />
      </>
    )
  },
  {
    path: '/contact',
    element: (
      <>
        <ContactPages />
        <ScrollRestoration />
      </>
    )
  },
  {
    path: '/bill',
    element: (
      <>
        <BillPage />
        <ScrollRestoration />
      </>
    )
  }
])
