
import { Link } from 'react-router-dom'
import './MyOrdersPage.css'

function MyOrdersPage() {
  return (
    <main className="my-orders-page">
      <div className="my-orders-container">

        <div className="my-orders-header">
          <h1>Meus Pedidos</h1>
          <p>Acompanhe seus pedidos realizados na Digital Store.</p>
        </div>

        <div className="my-orders-content">
          <div className="my-orders-icon">
            📦
          </div>

          <h2>Você ainda não possui pedidos</h2>

          <p>
            Quando você realizar uma compra, seus pedidos
            aparecerão aqui.
          </p>

          <Link to="/produtos" className="my-orders-button">
            CONTINUAR COMPRANDO
          </Link>
        </div>

      </div>
    </main>
  )
}

export default MyOrdersPage
