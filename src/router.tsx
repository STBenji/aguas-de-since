import { createBrowserRouter } from 'react-router-dom'

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
    element: <App />
  },
  {
    path: '/services',
    element: <ServicesPage />
  },
  {
    path: '/about',
    element: <AboutUs />
  },
  {
    path: '/contact',
    element: <NavbarComponent />
  },
  {
    path: '/bill',
    element: <NavbarComponent />
  }
])
