import VoluntarioForm from "../components/VoluntarioForm"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { criarVoluntario } from "../service/api"

const Voluntarios = () => {


const handleCreate = async (voluntario) => {

  await criarVoluntario(voluntario)
  carregar()

}

  return (
      
    <div className="container">

      <VoluntarioForm  onSubmit={handleCreate}/>

      <Footer/>
      
      <Sidebar/>


   
    </div>
    
  )
}

export default Voluntarios