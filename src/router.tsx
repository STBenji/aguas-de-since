import { createBrowserRouter } from 'react-router-dom'

/*
 * Components
 */
import App from './App'
import AboutUs from './pages/AboutUs/AboutUs'
import { NavbarComponent } from './components/Navbar'
import ContactPages from './pages/Contact/Contact.pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <AboutUs />
  },
  {
    path: '/contact',
    element: <ContactPages />
  },
  {
    path: '/bill',
    element: <NavbarComponent />
  }
])
