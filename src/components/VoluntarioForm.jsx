import "../styles/form.css"

const VoluntarioForm = () => {

  

  return (
    <div className="card">

      <h2>Cadastrar Voluntário</h2>

      <form>

        <div className="form-group">
          <label>Nome</label>
          <input type="text" placeholder="Digite o nome do voluntário"/>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Digite o email"/>
        </div>

        <div className="form-group">
          <label>Setor</label>
          <select>
            <option>Selecione um setor</option>
          </select>
        </div>

        <button type="submit">Cadastrar</button>

      </form>

    </div>
  )

}

export default VoluntarioForm