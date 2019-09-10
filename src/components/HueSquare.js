import React from 'react'
import PropTypes from 'prop-types'

const HueSquare = ({hue, size}) => {
  const style = {
    height: `${size}vh`,
    width: `${size}vh`,
    border: `${size / 20}vh solid whitesmoke`,
    borderRadius: `${size / 10}vh`,
    background:
      hue === null
        ? 'linear-gradient(to right, #2a00ff, #7f00ff)'
        : `hsl(${hue}, 100%, 50%)`
  }
  return <div className="hue-square" style={style}></div>
}

HueSquare.propTypes = {
  hue: PropTypes.number,
  size: PropTypes.number
}

HueSquare.defaultProps = {
  hue: null,
  size: 40
}

export default HueSquare
