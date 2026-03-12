import {useEffect, useState} from "react"
import Footer from "../components/Footer"
import AtividadeForm from "../components/AtividadeForm"
import Sidebar from "../components/Sidebar"
import { registarAtividade } from "../service/api"

const CadastroAtividade = () => {


const handleCreateAtividade = async (atividade) => {

  await registarAtividade(atividade)
  carregar()

 }

  return (
    <> 
    <div className="container"> 
    
    <AtividadeForm onSubmit={handleCreateAtividade}/>
    
    <Sidebar/>
    
    <Footer/>
    
    </div>

    

</>
  )
}

export default CadastroAtividade
