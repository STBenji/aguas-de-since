import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { router } from './router.tsx'
import { RouterProvider } from 'react-router-dom'

import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
)
