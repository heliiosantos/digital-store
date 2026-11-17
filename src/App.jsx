
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './pages/Layout/Layout'

import HomePage from './pages/HomePage/HomePage'
import ProductListingPage from './pages/ProductListingPage/ProductListingPage'
import ProductViewPage from './pages/ProductViewPage/ProductViewPage'
import MyOrdersPage from './pages/MyOrdersPage/MyOrdersPage'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Listagem de produtos */}
          <Route
            path="/produtos"
            element={<ProductListingPage />}
          />

          {/* Rota exigida pelo README */}
          <Route
            path="/products"
            element={<ProductListingPage />}
          />

          {/* Detalhes do produto */}
          <Route
            path="/produtos/:id"
            element={<ProductViewPage />}
          />

          {/* Rota exigida pelo README */}
          <Route
            path="/product/:id"
            element={<ProductViewPage />}
          />

          <Route
            path="/meus-pedidos"
            element={<MyOrdersPage />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: '40px', textAlign: 'center' }}>
                <h2>Página não encontrada</h2>
                <p>O endereço acessado não existe.</p>
                <a href="/">Voltar para o início</a>
              </main>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
