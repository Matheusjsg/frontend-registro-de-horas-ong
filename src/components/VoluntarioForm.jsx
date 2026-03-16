import { useEffect, useState } from "react"
import "../styles/form.css"
import { fetchSetores } from "../service/api"

const VoluntarioForm = ({onSubmit, novoVoluntario}) => {


  const [voluntario, setVoluntario] = useState({
    nome: "",
    email: "",
    setorId: "",
    tipoUsuario: "VOLUNTARIO"

  })

  const [setor, setSetor] = useState([])


  useEffect(() =>{

    const carregarSetores = async () => {

      const data = await fetchSetores()
      
      setSetor(data)
    }

    carregarSetores()

  },[])

    useEffect(() => {
      if (novoVoluntario){
        setVoluntario(novoVoluntario)
      }
    },[])

  const handleChange = (e) => {
    setVoluntario({
      ...voluntario,
      [e.target.name] : e.target.value
    })

  }  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (
    !voluntario.nome ||
    !voluntario.email ||
    !voluntario.setorId
    
  ) 
  
    {
        alert("Preencha todos os campos obrigatórios")
        return
      }
  
    onSubmit(voluntario)


    alert("Voluntário registrado com sucesso! 🎉")

     setVoluntario({
    nome: "",
    email: "",
    setorId: ""
  })

  }

  return (
    <div className="card">

      <h2>Cadastrar Voluntário</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Nome</label>
          <input type="text" 
                  placeholder="Digite o nome do voluntário"
                  name="nome"
                  value={voluntario.nome}
                  onChange={handleChange}
                  />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" 
                 placeholder="Digite o email"
                 name="email"
                 value={voluntario.email}
                 onChange={handleChange}
                 />
        </div>

        <div className="form-group">
          <label>Setor</label>
         
          <select name="setorId" 
                  value={voluntario.setorId} 
                  onChange={handleChange}>
                     <option>Selecione um setor</option>
                        {setor.map(e=> (
                          <option key={e.id} value={e.id}>
                            {e.nome}    
                          </option>
            ))}
          
          
          </select>
        </div>

        <button type="submit">Cadastrar</button>

      </form>

    </div>
  )

}

export default VoluntarioForm