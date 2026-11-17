
import { useState } from 'react'
import './Gallery.css'

function Gallery({
  images = [],
  productName = 'Produto',
  discount,
  variant = 'product',
  width = '100%',
  height,
  radius,
  showThumbs = true,
  className = '',
}) {
  const [selectedImage, setSelectedImage] = useState(0)

  const isHero = variant === 'hero'

  const normalizedImages = images
    .map((image) => typeof image === 'string' ? image : image?.src)
    .filter(Boolean)

  if (!normalizedImages.length) return null

  const galleryHeight = height ?? (isHero ? '100%' : 450)
  const galleryRadius = radius ?? (isHero ? 0 : 8)

  function previousImage() {
    setSelectedImage((current) => Math.max(current - 1, 0))
  }

  function nextImage() {
    setSelectedImage((current) =>
      Math.min(current + 1, normalizedImages.length - 1)
    )
  }

  return (
    <div
      className={`product-view-gallery ${isHero ? 'gallery-hero' : ''} ${className}`}
      style={{ width }}
    >
      <div
        className="product-view-main-image"
        style={{
          height: typeof galleryHeight === 'number'
            ? `${galleryHeight}px`
            : galleryHeight,
          borderRadius: typeof galleryRadius === 'number'
            ? `${galleryRadius}px`
            : galleryRadius,
        }}
      >
        {discount && !isHero && (
          <span className="product-view-discount">
            {discount}
          </span>
        )}

        {normalizedImages.length > 1 && (
          <button
            type="button"
            className="gallery-arrow gallery-arrow-left"
            onClick={previousImage}
            disabled={selectedImage === 0}
            aria-label="Imagem anterior"
          >
            <img src="/src/assets/arrow-left.svg" alt="" />
          </button>
        )}

        <div
          className="gallery-image-track"
          style={{ '--gallery-index': selectedImage }}
        >
          {normalizedImages.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={
                isHero
                  ? `Banner promocional ${index + 1}`
                  : `${productName} - imagem ${index + 1}`
              }
              aria-hidden={selectedImage !== index}
            />
          ))}
        </div>

        {normalizedImages.length > 1 && (
          <button
            type="button"
            className="gallery-arrow gallery-arrow-right"
            onClick={nextImage}
            disabled={selectedImage === normalizedImages.length - 1}
            aria-label="Próxima imagem"
          >
            <img src="/src/assets/arrow-right.svg" alt="" />
          </button>
        )}
      </div>

      {isHero ? (
        <div className="gallery-indicators">
          {normalizedImages.map((image, index) => (
            <button
              type="button"
              key={`${image}-${index}`}
              className={selectedImage === index ? 'active' : ''}
              onClick={() => setSelectedImage(index)}
              aria-label={`Ir para o banner ${index + 1}`}
              aria-pressed={selectedImage === index}
            />
          ))}
        </div>
      ) : (
        showThumbs && normalizedImages.length > 1 && (
          <div className="product-view-thumbnails">
            {normalizedImages.map((image, index) => (
              <button
                type="button"
                key={`${image}-${index}`}
                className={selectedImage === index ? 'thumbnail-selected' : ''}
                onClick={() => setSelectedImage(index)}
                aria-label={`Visualizar imagem ${index + 1} de ${productName}`}
                aria-pressed={selectedImage === index}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>
        )
      )}
    </div>
  )
}

export default Gallery
