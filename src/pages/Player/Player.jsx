import React, { useState } from 'react'
import './Player.css'
import backarrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate } from 'react-router-dom'
const Player = () => {
  const navigate=useNavigate();
  return (
    <div className='player'> 
<img src={backarrow_icon} onClick={()=>{navigate(-1)}}/>
<iframe width='90%' height='90%' src='https://www.youtube.com/embed/UNkMCf-4pGE' title='Trailer' frameBorder='0' allowFullScreen></iframe>
<div className="player-info">
  <p>Publish date</p>
  <p>Name</p>
  <p>Type</p>
</div>
    </div>
  )
}

export default Player