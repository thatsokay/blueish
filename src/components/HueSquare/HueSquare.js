import React from 'react'
import PropTypes from 'prop-types'

import './HueSquare.css'

const HueSquare = ({ hue }) => {
  var style = {
    backgroundColor: `hsl(${hue}, 100%, 50%)`,
  }
  return (
    <div className="hue-square" style={style}>
    </div>
  )
}

HueSquare.propTypes = {
  hue: PropTypes.number.isRequired,
}

export default HueSquare
