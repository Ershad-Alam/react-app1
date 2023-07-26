import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <h2>I am a { props.heading }!</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default Card