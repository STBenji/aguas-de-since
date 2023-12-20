import { createBrowserRouter } from 'react-router-dom'

/*
 * Components
 */
import App from './App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])
