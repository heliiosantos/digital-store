
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import products from '../../data/products'
import FilterGroup from '../../components/FilterGroup/FilterGroup'
import ProductListing from '../../components/ProductListing/ProductListing'
import Section from '../../components/Section/Section'

import './ProductListingPage.css'

function ProductListingPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const searchTerm =
    searchParams.get('filter') ||
    searchParams.get('busca') ||
    ''

  const [sortOrder, setSortOrder] = useState('menor')
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedGenders, setSelectedGenders] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])

  function handleFilterChange(value, setSelected) {
    setSelected((previous) =>
      previous.includes(value)
        ? previous.filter((item) => item !== value)
        : [...previous, value]
    )
  }

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.includes(product.type)

    const matchesGender =
      selectedGenders.length === 0 ||
      selectedGenders.includes(product.gender)

    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.brand)

    return (
      matchesSearch &&
      matchesType &&
      matchesGender &&
      matchesBrand
    )
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'menor') return a.price - b.price
    if (sortOrder === 'maior') return b.price - a.price

    return 0
  })

  return (
    <main className="product-listing-page">
      <div className="listing-container">

        <div className="listing-sidebar">

          <div className="sorting-box">
            <label htmlFor="sort-products">
              Ordenar por
            </label>

            <select
              id="sort-products"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
            >
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </div>

          <aside className="product-filters">
            <h3>Filtrar por</h3>

            <FilterGroup
              title="Marca"
              options={[
                { text: 'Nike', value: 'Nike' },
              ]}
              selectedValues={selectedBrands}
              onChange={(value) =>
                handleFilterChange(value, setSelectedBrands)
              }
            />

            <FilterGroup
              title="Categoria"
              options={[
                { text: 'Esporte e lazer', value: 'Esporte e lazer' },
                { text: 'Casual', value: 'Casual' },
                { text: 'Corrida', value: 'Corrida' },
              ]}
              selectedValues={selectedTypes}
              onChange={(value) =>
                handleFilterChange(value, setSelectedTypes)
              }
            />

            <FilterGroup
              title="Gênero"
              options={[
                { text: 'Masculino', value: 'Masculino' },
                { text: 'Feminino', value: 'Feminino' },
                { text: 'Unissex', value: 'Unissex' },
              ]}
              selectedValues={selectedGenders}
              onChange={(value) =>
                handleFilterChange(value, setSelectedGenders)
              }
            />
          </aside>
        </div>

        <div className="listing-results">
          <Section
            title={`${sortedProducts.length} produtos encontrados`}
            titleAlign="left"
          >
            <ProductListing
              products={sortedProducts}
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

export default ProductListingPage
