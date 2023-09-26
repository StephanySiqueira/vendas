import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Home from './Routes/Home/index.jsx';
import Aparelhos from './Routes/Aparelhos/index.jsx';
import VisualizarAparelhos from './Routes/VisualizarAparelho/index.jsx';
import Error from './Routes/Error/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/aparelhos',
        element: <Aparelhos/>
      },
      {
        path: '/visualizar/aparelho/:id',
        element: <VisualizarAparelhos/>
      },
      {
        path: '/antiga',
        element: <Navigate to='/' />
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
