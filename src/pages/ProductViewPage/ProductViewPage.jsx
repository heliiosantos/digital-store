
import { useParams, Link, useNavigate } from 'react-router-dom'

import products from '../../data/products'
import Gallery from '../../components/Gallery/Gallery'
import BuyBox from '../../components/BuyBox/BuyBox'
import Section from '../../components/Section/Section'
import ProductListing from '../../components/ProductListing/ProductListing'

import './ProductViewPage.css'

function ProductViewPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (!product) {
    return (
      <main className="product-view-page">
        <div className="product-view-container">
          <div>
            <h1>Produto não encontrado.</h1>
            <Link to="/products">Voltar aos produtos</Link>
          </div>
        </div>
      </main>
    )
  }

  const productImages = product.images?.length
    ? product.images
    : [product.image]

  const recommendedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 3)

  return (
    <main className="product-view-page">

      <div className="product-view-container">

        <Gallery
          key={product.id}
          images={productImages.map((image) => ({ src: image }))}
          productName={product.name}
          discount={product.discount}
          showThumbs
          width="700px"
          height="570px"
          radius="4px"
        />

        <BuyBox
          key={product.id}
          product={product}
        />

      </div>

      <div className="recommended-section">
        <div className="recommended-container">

          <Section
            title="Produtos recomendados"
            titleAlign="left"
            link={{
              text: 'Ver todos',
              href: '/products',
            }}
          >
            <ProductListing
              products={recommendedProducts}
              showHeader={false}
              onProductClick={(productId) =>
                navigate(`/product/${productId}`)
              }
            />
          </Section>

        </div>
      </div>

    </main>
  )
}

export default ProductViewPage
