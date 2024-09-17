import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
         <div class="navbar-logo">MyApp</div>
        <ul class="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/props">Props</Link></li>
          <li><Link to="/usestate">useState</Link></li>
          <li><Link to="/usereducer">useReducer</Link></li>
          <li><Link to="/contextapi">ContextApi</Link></li>
          <li><Link to="/bmicalculator">BMI </Link></li>
          <li><Link to="/expensetracker">Expense </Link></li>
        </ul>
    </nav>
        
    </div>
  )
}

export default Navbar
