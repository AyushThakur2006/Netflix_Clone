import React from 'react'
import yt_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
          <img src={yt_icon} />
          <img src={twitter_icon} />
          <img src={instagram_icon} />
          <img src={facebook_icon} />
        </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media Center</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notice</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact us</li>
        </ul>
        <p className='copyright-text'>
        &#169; 1997-2025 Netflix, Inc.
        </p>
    </div>
  )
}

export default Footer