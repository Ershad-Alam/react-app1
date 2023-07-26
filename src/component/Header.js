import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/Header-style.css';

import { ImHome } from "react-icons/im";

const Header = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/"> <ImHome/> Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header

