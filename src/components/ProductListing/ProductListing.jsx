
import ProductCard from '../ProductCard/ProductCard'
import './ProductListing.css'

function ProductListing({
  products = [],
  searchTerm = '',
  sortOrder = 'relevantes',
  onSortChange,
  onProductClick,
  showHeader = true,
}) {
  return (
    <section className="products-section">

      {showHeader && (
        <div className="products-header">
          <p>
            Resultados para <strong>"{searchTerm || 'Tênis'}"</strong>
            {' '} - {products.length} produtos
          </p>

          <select
            value={sortOrder}
            onChange={(event) => onSortChange?.(event.target.value)}
            aria-label="Ordenar produtos"
          >
            <option value="relevantes">
              Ordenar por: mais relevantes
            </option>

            <option value="menor">
              Menor preço
            </option>

            <option value="maior">
              Maior preço
            </option>
          </select>
        </div>
      )}

      {products.length > 0 ? (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.oldPrice}
              priceDiscount={product.price}
              discount={product.discount}
              onClick={() => onProductClick?.(product.id)}
            />
          ))}
        </div>
      ) : (
        <p className="no-products">
          Nenhum produto encontrado.
        </p>
      )}

    </section>
  )
}

export default ProductListing
