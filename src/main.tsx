import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom' //usadas no roteamento de páginas
//cria-se uma pasta routes

import Home from './routes/Home.tsx'
import Repo_Page from './routes/Repo_Page.tsx'

//executar função passando um array com um objeto

const router = createBrowserRouter([ //definir componente principal da aplicação
  {
    path: "/",
    element: <App/>, //componente principal
    children: [ 
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/repos/:id",
        element: <Repo_Page/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Aqui é definido o router que foi importado acima  */}
  </React.StrictMode>,
)
