import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
<div className="main-menu">
<img src="" alt="Logo.png" className="logo" />
  <nav className="menu-items">
    <ul>
      <li><a href="Home">Home</a></li>
      <li><a href="Services">Services</a></li>
      <li><a href="About">About</a></li>
      <li><a href="Blog">Blogs</a></li>
      <li><a href="Contacts">Contacts</a></li>
    </ul>
      <div className='main-menu__buttons'>
        <button className='sign-up' Link = "/signup">Sign Up</button>
        <button className='login' Link = "/login">Login</button>  
      </div>
  </nav>

</div>

  )
}

export default navbar
