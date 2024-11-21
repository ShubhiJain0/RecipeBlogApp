import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink to="/recipe/:id">Recipe item</NavLink>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </div>
  );
}

export default NavBar