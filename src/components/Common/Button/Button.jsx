import React from 'react'
import "./Button.css"

const Button = ({text ,onClick,outlined ,style}) => {
  return (
    <div className={outlined?'outlined-btn':'btn'} style={style} onClick={()=>onClick()}>
      {text}
    </div>
  )
}

export default Button