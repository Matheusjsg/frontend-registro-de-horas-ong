import {useState, useEffect} from "react"
import "../styles/form.css"

const SetorForm = ({onSubmit, novoSetor}) => {

  const [setor, setSetor] = useState([])

useEffect(() => {
  if (novoSetor){
      setSetor(novoSetor)
    
  }
},[novoSetor])


const handleChange = (e) => {
  setSetor({
    ...setor,
    [e.target.name]: e.target.value
  })
}


const handleSubmit = (e) => {
  
  console.log(setor, "enviado")
  
  e.preventDefault()

      if (
    !setor.nome
  ) 
  
  {
    alert("Preencha todos os campos obrigatórios")
    return
  }

    onSubmit(setor)

    alert("Atividade registrada com sucesso! 🎉")

     setAtividade({
    nome: ""
  })
  
  }


  return (
    <div className="card">

      <h2>Cadastrar Setor</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Nome do setor</label>

          <input type="text"
          value={setor.nome}
          name="nome" 
          onChange={handleChange}
          placeholder="Digite o nome do setor"/>

        </div>

        <button type="submit">Cadastrar</button>

      </form>

    </div>
  )
}

export default SetorForm