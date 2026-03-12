import "../styles/sidebar.css"
import { LayoutDashboard, ClipboardList, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  return (

   
   
   <div className="sidebar">

      <img src= '/src/assets/logo-abcaa-D1fWvvPI.png' alt="Logo da ONG" className="logo"/>

      <h2>Voluntariado</h2>

      <nav>

        <ul>

         <div className="menu">

          
          <li> <Link to= "/registrar-atividade"> <ClipboardList size={18}/> Registrar Atividades</Link> </li>

          <li> <Link to= "/voluntarios"> <Users size={18}/>Voluntários </Link> </li>

          <li> <Link to= "/setores"> <Building size={18}/>Setores</Link> </li>
        
          </div>
          

        </ul>

      </nav>

    </div>

  )

}

export default Sidebar