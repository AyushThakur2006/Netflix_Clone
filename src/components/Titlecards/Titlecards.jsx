import React, { useEffect, useRef } from 'react'
import  './Titlecards.css'
import { Link } from 'react-router-dom'
import cards_data from '../../assets/cards/Cards_data'
const Titlecards = ({title}) => {
const cardRef=useRef();
const handlewheel=(e)=>{
e.preventDefault();
cardRef.current.scrollLeft += e.deltaY
}
useEffect(() => {
    cardRef.current.addEventListener('wheel',handlewheel)
},[]);

  return (
    <div className='titlecards'>
        <h2>{title?title:'sPopular on Netflix'}</h2>
        <div className="card-list" ref={cardRef}>
          {cards_data.map((card,index)=>{
            return <Link to={'/player/:id'} className='card' key={index}><img src={card.image} alt="" /> 
            <p>{card.name}</p>
            </Link>
          })}
        </div>
    </div>
  )
}

export default Titlecards