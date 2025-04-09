import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
    <div className="navbar-left">

    <img src={logo}  />
    <ul>
      <li>Home</li>
      <li>TV Shows</li>
      <li>Movies</li>
      <li>New & Popular</li>
      <li>My List</li>
      <li>Browse by Language</li>
    </ul>

    </div>
    <div className="navbar-right">
 <img src={search} className='icons' />
 <p>childern</p>
 <img src={bell} className='icons' />
 <div className="navbar-profile">
 <img src={profile_img} className='profile' />
 <img src={caret_icon}  />
<div className="drop-down">
  <p>Sign Out</p>
</div>

 </div>
    </div>
    </div>
  )
}

export default Navbar