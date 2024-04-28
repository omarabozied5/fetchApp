import './button.css'

import propTypes from 'prop-types'
import React from 'react'

const Button = ({ onClick, text }) => {
  return (
    <diV className="btn">
      <button onClick={onClick} className="buttonn">
        {text}
      </button>
    </diV>
  )
}
Button.propTypes = {
  text: propTypes.string,
  onClick: propTypes.func,
}

export default Button
