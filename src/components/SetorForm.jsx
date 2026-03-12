import "../styles/form.css"

const SetorForm = () => {

  return (
    <div className="card">

      <h2>Cadastrar Setor</h2>

      <form>

        <div className="form-group">
          <label>Nome do setor</label>
          <input type="text" placeholder="Digite o nome do setor"/>
        </div>

        <button type="submit">Cadastrar</button>

      </form>

    </div>
  )
}

export default SetorForm