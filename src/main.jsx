import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import CadastroAtividade from './pages/CadastroAtividade.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './index.css'

const router = createBrowserRouter([
  { path: "/registrar-atividade", element: <CadastroAtividade/>},
  { path: "/painel-admin", element: <Dashboard/>}
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)