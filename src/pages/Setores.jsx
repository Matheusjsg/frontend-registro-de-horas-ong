import SetorForm from "../components/SetorForm"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { criarSetor } from "../service/api"

const Setores = () => {


const handleCreate= async (setor) => {

  await criarSetor(setor)
  carregar()

}

  return (
      <>
    <div className="container">

      <SetorForm  onSubmit={handleCreate}/>

      <Footer/>
      
      <Sidebar/>
   
    </div>
    </>
  )
}

export default Setores