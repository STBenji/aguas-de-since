import { createBrowserRouter } from 'react-router-dom'

/*
 * Components
 */
import App from './App'
import AboutUs from './pages/AboutUs/AboutUs'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <AboutUs />
  }
])
