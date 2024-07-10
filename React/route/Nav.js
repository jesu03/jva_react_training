import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const navo  = useNavigate();
  return (
    <div>
       <nav>
        <h1 onClick={()=>navo('/')}>Latino</h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/feature">Feature</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Nav
