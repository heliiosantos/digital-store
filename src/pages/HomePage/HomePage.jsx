
import { Link } from 'react-router-dom'
import products, { trendingProducts } from '../../data/products'
import Section from '../../components/Section/Section'
import Gallery from '../../components/Gallery/Gallery'
import './HomePage.css'

const categories = [
  { name: 'Camisetas', icon: '♧' },
  { name: 'Calças', icon: '♧' },
  { name: 'Bonés', icon: '♧' },
  { name: 'Headphones', icon: '♬' },
  { name: 'Tênis', icon: '♧' },
]

const homeSlides = [
  '/home-slide-1.jpeg',
  '/home-slide-2.jpeg',
  '/home-slide-3.jpeg',
  '/home-slide-4.jpeg',
  '/home-slide-5.jpeg',
  '/home-slide-6.jpeg',
  '/home-slide-7.jpeg',
  '/home-slide-8.jpeg',
]

function HomePage() {
  return (
    <main className="home-page">

      {/* BANNER PRINCIPAL */}
      <section className="hero-banner">
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-subtitle">
              Melhores ofertas personalizadas
            </span>

            <h1>Queima de estoque Nike 🔥</h1>

            <p>
              Conquiste seu estilo com nossas ofertas especiais
              e encontre os melhores produtos para você.
            </p>

            <Link to="/produtos" className="hero-button">
              Ver Ofertas
            </Link>
          </div>

          <div className="hero-image">
            <Gallery
              images={homeSlides}
              variant="hero"
            />
          </div>

        </div>
      </section>

      {/* COLEÇÕES EM DESTAQUE */}
      <section className="home-section collections-section">
        <div className="home-container">

          <Section
            title="Coleções em destaque"
            titleAlign="center"
          >
            <div className="collections-grid">

              <Link to="/produtos" className="collection-card">
                <span className="collection-discount">30% OFF</span>

                <div className="collection-info">
                  <h3>Novo drop Supreme</h3>
                  <span>Comprar</span>
                </div>

                <img
                  src="/collection-1.png"
                  alt="Coleção Supreme"
                />
              </Link>

              <Link to="/produtos" className="collection-card">
                <span className="collection-discount">30% OFF</span>

                <div className="collection-info">
                  <h3>Coleção Adidas</h3>
                  <span>Comprar</span>
                </div>

                <img
                  src="/collection-2.png"
                  alt="Coleção Adidas"
                />
              </Link>

              <Link to="/produtos" className="collection-card">
                <span className="collection-discount">30% OFF</span>

                <div className="collection-info">
                  <h3>Novo Beats Bass</h3>
                  <span>Comprar</span>
                </div>

                <img
                  src="/collection-3.png"
                  alt="Coleção Beats"
                />
              </Link>

            </div>
          </Section>

        </div>
      </section>

      {/* CATEGORIAS */}
      <section
        id="categorias"
        className="home-section categories-section"
      >
        <div className="home-container">

          <h2>Categorias</h2>

          <div className="categories-list">
            {categories.map((category) => (
              <Link
                to="/produtos"
                className="category-item"
                key={category.name}
              >
                <span className="category-icon">
                  {category.icon}
                </span>

                <span>{category.name}</span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* PRODUTOS EM ALTA */}
      <section className="home-section trending-section">
        <div className="home-container">

          <Section
            title="Produtos em alta"
            titleAlign="left"
            link={{
              text: 'Ver todos →',
              href: '/produtos',
            }}
          >
            <div className="trending-grid">

              {trendingProducts.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  className="trending-card"
                  key={product.id}
                >
                  <div className="trending-image">

                    {product.discount && (
                      <span className="trending-discount">
                        {product.discount}
                      </span>
                    )}

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                  </div>

                  <span className="trending-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <div className="trending-prices">
                    <span>
                      R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                    </span>

                    <strong>
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </strong>
                  </div>

                </Link>
              ))}

            </div>
          </Section>

        </div>
      </section>

      {/* OFERTA ESPECIAL */}
      <section className="special-offer">
        <div className="special-offer-container">

          <div className="special-offer-image">
            <img
              src={products[4].image}
              alt="Tênis da oferta especial"
            />
          </div>

          <div className="special-offer-content">
            <span>Oferta especial</span>

            <h2>Tênis Street Masculino</h2>

            <p>
              Confira nossa seleção especial de produtos
              e aproveite as ofertas disponíveis na Digital Store.
            </p>

            <Link
              to="/produtos"
              className="special-offer-button"
            >
              Ver Oferta
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}

export default HomePage
