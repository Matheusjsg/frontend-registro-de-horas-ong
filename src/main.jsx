import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import CadastroAtividade from './pages/CadastroAtividade.jsx'
import Voluntario from "./pages/Voluntarios.jsx"
import Setores from "./pages/Setores.jsx"
import './index.css'


const router = createBrowserRouter([
  { path: "/", element: <CadastroAtividade/>},
  { path: "/registrar-atividade", element: <CadastroAtividade/>},
  { path: "/voluntarios", element: <Voluntario/>},
  { path: "/setores", element: <Setores/>},
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)