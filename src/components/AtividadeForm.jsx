import "../styles/form.css"

const AtividadeForm = () => {

  return (

    <>

    <div className="card">

      <h2>Registrar Atividade</h2>

      <form>

        <div className="form-group">
          <label>Voluntário</label>
          <select>
            <option>Selecione um voluntário</option>
          </select>
        </div>

        <div className="form-group">
          <label>Data</label>
          <input type="date"/>
        </div>

        <div className="form-group">
          <label>Tempo</label>
          <select>
            <option>30min</option>
            <option>1h</option>
            <option>1h30</option>
            <option>2h</option>
            <option>2h30</option>
            <option>3h</option>
            <option>3h30</option>
            <option>4h</option>
            <option>5h</option>
          </select>
        </div>

        <div className="form-group">
          <label>Descrição</label>
          <textarea rows="3"/>
        </div>

        <button type="submit">Registrar</button>

      </form>

    
    
    </div>

   

   </>
) 
}

export default AtividadeForm