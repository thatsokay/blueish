import React from 'react'

const HueSquare = (props: {hue: number | null, size?: number}) => {
  const size = props.size || 40
  const style = {
    height: `${size}vh`,
    width: `${size}vh`,
    border: `${size / 20}vh solid whitesmoke`,
    borderRadius: `${size / 10}vh`,
    background:
      props.hue === null
        ? 'linear-gradient(to right, #2a00ff, #7f00ff)'
        : `hsl(${props.hue}, 100%, 50%)`
  }

  return <div className="hue-square" style={style}></div>
}

export default HueSquare
