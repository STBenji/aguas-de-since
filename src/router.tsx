import { ScrollRestoration, createBrowserRouter } from 'react-router-dom'

/*
 * Components
 */
import App from './App'
import AboutUs from './pages/AboutUs/AboutUs'
import ServicesPage from './pages/Services/Services.page'
import { NavbarComponent } from './components/Navbar'

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
        <NavbarComponent />
        <ScrollRestoration />
      </>
    )
  },
  {
    path: '/bill',
    element: (
      <>
        <NavbarComponent />
        <ScrollRestoration />
      </>
    )
  }
])
