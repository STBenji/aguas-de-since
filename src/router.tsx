import { createBrowserRouter } from 'react-router-dom'
/*
 * Components
 */
import App from './App'
import AboutUs from './Pages/AboutUs/AboutUs'

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
