import "../styles/sidebar.css"

const Sidebar = () => {

  return (

    <div className="sidebar">

      <h2 className="logo">Voluntariado</h2>

      <nav>

        <ul>

          <li>
            <a href="#">Dashboard</a>
          </li>

          <li>
            <a href="#">Atividades</a>
          </li>

          <li>
            <a href="#">Voluntários</a>
          </li>

          <li>
            <a href="#">Setores</a>
          </li>

          <li>
            <a href="#">Relatórios</a>
          </li>

        </ul>

      </nav>

    </div>

  )

}

export default Sidebar