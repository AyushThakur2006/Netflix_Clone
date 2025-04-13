import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../Firebase'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navref = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        navref.current.classList.add('nav-dark')
      } else {
        navref.current.classList.remove('nav-dark')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  return (
    <div ref={navref} className='navbar'>
      <div className="navbar-left">
        <img src={logo} />
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
        <p>children</p>
        <img src={bell} className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} className='profile' />
          <img src={caret_icon} />
          <div className="drop-down">
            <p onClick={handleLogout}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
