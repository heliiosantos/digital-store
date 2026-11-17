
import { useState } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'
import miniCart from '../../assets/mini-cart.svg'

import './Header.css'

function Header() {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  function handleSearch(event) {
    event.preventDefault()

    const searchTerm = search.trim()

    if (!searchTerm) return

    navigate(`/products?filter=${encodeURIComponent(searchTerm)}`)
  }

  function handleCategoriesClick() {
    if (location.pathname === '/') {
      setTimeout(() => {
        document.getElementById('categorias')?.scrollIntoView({
          behavior: 'smooth',
        })
      }, 0)
    }
  }

  return (
    <header className="header">
      <div className="header-container">

        <Logo className="header-logo" />

        <form className="header-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <button type="submit" aria-label="Pesquisar">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="10.8"
                cy="10.8"
                r="6.8"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 16L21 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </form>

        <div className="header-actions">
          <a
            href="#"
            onClick={(event) => event.preventDefault()}
          >
            Cadastre-se
          </a>

          <button
            type="button"
            className="login-button"
          >
            Entrar
          </button>

          <button
            type="button"
            className="cart-button"
            aria-label="Carrinho"
          >
            <img src={miniCart} alt="" />
          </button>
        </div>
      </div>

      <nav className="header-navigation">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/products">
          Produtos
        </NavLink>

        <Link
          to="/#categorias"
          onClick={handleCategoriesClick}
        >
          Categorias
        </Link>

        <NavLink to="/meus-pedidos">
          Meus Pedidos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
