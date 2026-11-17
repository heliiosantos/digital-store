
import './ProductCard.css'

function ProductCard({
  image,
  name,
  price,
  priceDiscount,
  category,
  discount,
  onClick,
}) {
  function formatPrice(value) {
    return Number(value).toFixed(2).replace('.', ',')
  }

  return (
    <article
      className="product-card"
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick?.()
        }
      }}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="product-image">

        {discount && (
          <span className="discount-tag">
            {discount}
          </span>
        )}

        <img src={image} alt={name} />

      </div>

      {category && (
        <span className="product-category">
          {category}
        </span>
      )}

      <h3>{name}</h3>

      <div className="product-prices">

        {price != null && priceDiscount != null && (
          <span className="old-price">
            R$ {formatPrice(price)}
          </span>
        )}

        <strong>
          R$ {formatPrice(priceDiscount ?? price)}
        </strong>

      </div>
    </article>
  )
}

export default ProductCard
