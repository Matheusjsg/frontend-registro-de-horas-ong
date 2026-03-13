import {useState, useEffect} from "react"
import { fetchVoluntarios } from '../service/api'
import "../styles/form.css"


const AtividadeForm = ({onSubmit, novaAtividade}) => {

const [atividade, setAtividade] = useState([{
  data: "",
  tempoMinutos: "",
  descricao: "",
  voluntarioId: ""
}])
const [voluntario, setVoluntario] = useState([])


useEffect(()=>{

const carregarVoluntarios = async () => {

      const data = await fetchVoluntarios()

      setVoluntario(data)
    }

    carregarVoluntarios()

},[])



useEffect(() => {
  if (novaAtividade){
      setAtividade(novaAtividade)
    
  }
},[novaAtividade])



const handleChange = (e) => {
  setAtividade({
    ...atividade,
    [e.target.name]: e.target.value
  })
}


const handleSubmit = (e) => {
    e.preventDefault()

      if (
    !atividade.voluntarioId ||
    !atividade.data ||
    !atividade.tempoMinutos ||
    !atividade.descricao
  ) 
  
  {
    alert("Preencha todos os campos obrigatórios")
    return
  }

    onSubmit(atividade)

    alert("Atividade registrada com sucesso! 🎉")

     setAtividade({
    data: "",
    tempoMinutos: "",
    descricao: "",
    voluntarioId: ""
  })
  
  }

 
  return (
    
    <div className="card">

      <h2>Registrar Atividade</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
         
            <label>Voluntário</label>
                        
            <select name="voluntarioId" value={atividade.voluntarioId} onChange={handleChange}>
              <option value="">Selecione um voluntário</option>
              {voluntario.map(vol => (<option key={vol.id} value={vol.id}>     {vol.nome}  </option> ))}
            </select>
         
        </div>

        <div className="form-group">
          <label>Data</label>
          <input  type="date"
                  name="data"
                  value={atividade.data || ""}
                  onChange={handleChange}
                  max={new Date().toISOString().split("T")[0]}/>
        </div>


        <div className="form-group">
              <label>Tempo</label>

              <select
                name="tempoMinutos"
                value={atividade.tempoMinutos || ""}
                onChange={handleChange}
              >

                <option value="">Selecione</option>
                <option value="30">30min</option>
                <option value="60">1h</option>
                <option value="90">1h30</option>
                <option value="120">2h</option>
                <option value="150">2h30</option>
                <option value="180">3h</option>
                <option value="210">3h30</option>
                <option value="240">4h</option>
                <option value="300">5h</option>

              </select>

        </div>

        <div className="form-group">
            
            <label>Descrição</label>
            
            <textarea
                rows="3"
                name="descricao"
                value={atividade.descricao}
                onChange={handleChange}
              />
        </div>

   
        <button type="submit"> registrar </button>


      </form>

    
    
    </div>

  
) 
}




export default AtividadeForm