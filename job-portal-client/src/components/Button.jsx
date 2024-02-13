import React from 'react'

const Button = ({onClickHandler, value ,title}) => {
  return (
    <button onClick = {onClickHandler} value = {value} className={`px-4 py-4 border text-base hover:bg-blue hover:text-white mb-3 focus:bg-blue focus:text-white `} >
      {title}
    </button>
  )
}

export default Button
