
import './FilterGroup.css'

function FilterGroup({
  title,
  inputType = 'checkbox',
  options = [],
  selectedValues = [],
  onChange,
}) {
  const isRadio = inputType === 'radio'

  return (
    <div className="filter-group">
      <h4>{title}</h4>

      {options.map((option) => {
        const text = typeof option === 'string' ? option : option.text
        const value = typeof option === 'string' ? option : option.value ?? option.text

        const isSelected = isRadio
          ? selectedValues === value ||
            (Array.isArray(selectedValues) && selectedValues.includes(value))
          : Array.isArray(selectedValues) && selectedValues.includes(value)

        return (
          <label key={value}>
            <input
              type={inputType}
              name={isRadio ? title : undefined}
              value={value}
              checked={isSelected}
              onChange={() => onChange(value)}
            />
            {text}
          </label>
        )
      })}
    </div>
  )
}

export default FilterGroup
