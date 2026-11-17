
import './ProductOptions.css'

function ProductOptions({
  title,
  options = [],
  radius = 5,
  shape = 'square',
  type = 'text',
  selectedValue,
  onChange,

  // Compatibilidade com a implementação anterior
  sizes = [],
  colors = [],
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}) {
  const isLegacy = sizes.length > 0 || colors.length > 0

  const groups = isLegacy
    ? [
        {
          title: 'Selecione seu tamanho',
          options: sizes.map((size) => ({
            text: size,
            value: size,
          })),
          selectedValue: selectedSize,
          onChange: onSizeChange,
          type: 'text',
          shape: 'square',
        },
        {
          title: 'Selecione uma cor',
          options: colors.map((color) => ({
            text: color.name,
            value: color.name,
            color: color.hex,
          })),
          selectedValue: selectedColor,
          onChange: onColorChange,
          type: 'color',
          shape: 'circle',
        },
      ]
    : [
        {
          title,
          options,
          selectedValue,
          onChange,
          type,
          shape,
        },
      ]

  return (
    <div className="product-options">
      {groups.map((group, groupIndex) => (
        group.options.length > 0 && (
          <div className="product-options-group" key={groupIndex}>
            {group.title && <h3>{group.title}</h3>}

            <div className="product-options-items">
              {group.options.map((option) => {
                const text =
                  typeof option === 'string'
                    ? option
                    : option.text ?? option.value

                const value =
                  typeof option === 'string'
                    ? option
                    : option.value ?? option.text

                const color =
                  group.type === 'color'
                    ? typeof option === 'string'
                      ? option
                      : option.color ?? option.hex
                    : undefined

                const isSelected = group.selectedValue === value

                return (
                  <button
                    type="button"
                    key={value}
                    className={`product-option-item ${
                      group.type === 'color'
                        ? 'option-color'
                        : 'option-text'
                    } ${
                      group.shape === 'circle'
                        ? 'option-circle'
                        : 'option-square'
                    } ${isSelected ? 'option-selected' : ''}`}
                    style={{
                      '--option-radius':
                        typeof radius === 'number'
                          ? `${radius}px`
                          : radius,
                      '--option-color': color || 'transparent',
                    }}
                    onClick={() => group.onChange?.(value)}
                    aria-label={
                      group.type === 'color'
                        ? `Selecionar cor ${text}`
                        : `Selecionar ${text}`
                    }
                    aria-pressed={isSelected}
                    title={text}
                  >
                    {group.type === 'color' ? (
                      <span className="product-option-color" />
                    ) : (
                      text
                    )}
                  </button>
                )
              })}
            </div>

            {group.type === 'color' && group.selectedValue && (
              <p className="selected-color-name">
                Cor selecionada:{' '}
                {
                  group.options.find((option) =>
                    (typeof option === 'string'
                      ? option
                      : option.value ?? option.text) === group.selectedValue
                  )?.text ??
                    group.options.find((option) =>
                      (typeof option === 'string'
                        ? option
                        : option.value ?? option.text) === group.selectedValue
                    )
                }
              </p>
            )}
          </div>
        )
      ))}
    </div>
  )
}

export default ProductOptions
