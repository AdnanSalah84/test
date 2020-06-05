import React from 'react'
import PropTypes from 'prop-types'
import { Picker } from 'react-native'

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) => {
  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{label}</label> */}
      <div className="field">
        {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
        {/* <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            )
          })}
        </select> */}
        <Picker
          style={{ width: '-webkit-fill-available' }}
          name={name}
          value={value}
          onChange={onChange}
        >
          <Picker.Item label={defaultOption} value="" />
          {options.map((option) => {
            return (
              <Picker.Item
                key={option.value}
                label={option.text}
                value={option.value}
              />
            )
          })}
        </Picker>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
}

export default SelectInput
