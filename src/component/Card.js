import React from 'react'

const Card = (cardProp, demoTitle) => {
  return (
    <>
    <div className='card'>
        <h2>I am a { cardProp.heading }!</h2>
        <p>{cardProp.description}</p>
        <button>{cardProp.buttonText}</button>
    </div>
    
    </>
  )
}

export default Card