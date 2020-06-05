import React from 'react'
import PropTypes from 'prop-types'
import { TextInput } from 'react-native'

const TextInputField = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
}) => {
  let wrapperClass = 'form-group'
  if (error && error.length > 0) {
    wrapperClass += ' ' + 'has-error'
  }

  return (
    <div className={wrapperClass}>
      {/* <label htmlFor={name}>{label}</label> */}
      <div>
        {/* <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        /> */}
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

TextInputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
}

export default TextInputField
