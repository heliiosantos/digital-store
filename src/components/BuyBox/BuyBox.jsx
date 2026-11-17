
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductOptions from '../ProductOptions/ProductOptions'
import starIcon from '../../assets/star-icon.svg'
import './BuyBox.css'

function BuyBox({
  product,
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)

  const productName = name ?? product?.name ?? ''
  const productReference = reference ?? product?.id ?? ''
  const productStars = stars ?? product?.stars
  const productRating = rating ?? product?.rating

  const originalPrice = price ?? product?.oldPrice
  const discountedPrice = priceDiscount ?? product?.price

  const productDescription = description ?? product?.description

  const hasDiscount =
    Number(discountedPrice) > 0 &&
    Number(originalPrice) > Number(discountedPrice)

  const formatPrice = (value) =>
    Number(value).toFixed(2).replace('.', ',')

  const availableSizes = [38, 39, 40, 41, 42]

  const availableColors = [
    { text: 'Preto', value: 'Preto', color: '#000000' },
    { text: 'Cinza escuro', value: 'Cinza escuro', color: '#111111' },
  ]

  return (
    <div className="product-view-info">
      <div className="product-view-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/produtos">Produtos</Link>
        <span>/</span>
        <span>{productName}</span>
      </div>

      <span className="product-view-category">
        {product?.category}
      </span>

      <h1>{productName}</h1>

      <p className="product-view-reference">
        Referência: {productReference}
      </p>

      {typeof productStars === 'number' && (
        <div className="product-view-rating">
          <span className="product-view-stars">
            {productStars.toFixed(1)}
            <img src={starIcon} alt="" />
          </span>

          {productRating !== undefined && (
            <span className="product-view-rating-count">
              {productRating} avaliações
            </span>
          )}
        </div>
      )}

      <div className="product-view-price">
        {hasDiscount ? (
          <>
            <span>R$ {formatPrice(originalPrice)}</span>
            <strong>R$ {formatPrice(discountedPrice)}</strong>
          </>
        ) : (
          <strong>
            R$ {formatPrice(discountedPrice ?? originalPrice)}
          </strong>
        )}
      </div>

      <p className="product-view-description">
        {productDescription}
      </p>

      {children ?? (
        <>
          <ProductOptions
            title="Selecione seu tamanho"
            options={availableSizes.map((size) => ({
              text: size,
              value: size,
            }))}
            radius={5}
            shape="square"
            type="text"
            selectedValue={selectedSize}
            onChange={setSelectedSize}
          />

          <ProductOptions
            title="Selecione uma cor"
            options={availableColors}
            radius={50}
            shape="circle"
            type="color"
            selectedValue={selectedColor}
            onChange={setSelectedColor}
          />
        </>
      )}

      <button type="button" className="product-view-buy">
        COMPRAR
      </button>

      <div className="product-view-delivery">
        <h3>Informações de entrega</h3>

        <p>
          Consulte as condições e os prazos de entrega disponíveis
          para sua região.
        </p>
      </div>
    </div>
  )
}

export default BuyBox
