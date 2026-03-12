import "../styles/footer.css"

const Footer = () => {

  return (
    <footer className="footer">

      <div className="footer-container">

        
        <p>
          © {new Date().getFullYear()} - Associação Beneficente e Cultural Amor em Ação. Todos os direitos reservados.
        </p>

        
        <p className="footer-copy">
          Feito por <strong>MatheusJSG</strong>
        </p>

      </div>

    </footer>
  )

}

export default Footer