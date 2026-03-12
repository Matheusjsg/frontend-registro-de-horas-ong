import VoluntarioForm from "../components/VoluntarioForm"
import SetorForm from "../components/SetorForm"
import AtividadeForm from "../components/AtividadeForm"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {

  return (

    <>
    <div className="container">

      <SetorForm/>

      <VoluntarioForm/>

      <AtividadeForm/>  
 
      <Footer/>
      
      <Sidebar/>
   
    </div>
    
    
    

    </>
  )

}

export default Dashboard

