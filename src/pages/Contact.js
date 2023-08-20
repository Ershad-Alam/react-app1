import React from 'react';
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    
    <main>
        <div className="container">
            Contact

            <Link to="/home">Home</Link>
            <Link to="/faq" className='active'>FAQ</Link>
        </div>
        
    </main>
  )
}

export default Contact