import { createBrowserRouter } from 'react-router-dom'
/*
 * Components
 */
import App from './app'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])
