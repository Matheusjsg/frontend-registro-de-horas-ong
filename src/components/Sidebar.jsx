import "../styles/sidebar.css"
import { useState } from "react"
import { LayoutDashboard, ClipboardList, Users, Building } from "lucide-react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Sidebar = () => {

  const [open, setOpen] = useState(false)



  return (


    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
           
   <div className={open ? "sidebar active" : "sidebar"}>
        
      

            {/* SIDEBAR */}
        
      <img src={logo} alt="Logo da ONG" className="logo"/>

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
</>
  )

}

export default Sidebar