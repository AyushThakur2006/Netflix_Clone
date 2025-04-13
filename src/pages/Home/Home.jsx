import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
<Navbar/>
<div className="hero">
  <img src={hero_banner} className='banner-img' />
  <div className="hero_caption">
    <img src={hero_title} className='caption-img'  />
    <p>Discovering his ties to a secret ancient order, a young man living in mordern Istanbul embarks on a quest to save the city from an immortal enemy</p>
    <div className="hero-btns">
      <button className='btn'><img src={play_icon}/>Play</button >
      <button className='btn dark-btn'><img src={info_icon}/>More Info</button>
            </div>
            <Titlecards/>
  </div>
</div>
<div className="more-cards">
<Titlecards title={'Blockbuster movies'}/>
<Titlecards title={'Only on Netflix'}/>
<Titlecards title={'Upcoming'}/>
<Titlecards title={'Topics for You'}/>
</div>
<Footer/>
    </div>
  )
}

export default Home