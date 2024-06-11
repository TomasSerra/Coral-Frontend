import React from 'react'
import { RiEditFill } from "react-icons/ri";
import './NewsOwnCard.scss'


function NewsOwnCard({title, image, description, date, editNew, deleteNew}) {
  return (
    <div className='new-own-card'>
        <button className='edit-btn' onClick={editNew}><RiEditFill/></button>
        <h6>{title}</h6>
        <div className='image' style={{backgroundImage: 'url('+image+')'}}></div>
        <p>{description}</p>
    </div>
  )
}

export default NewsOwnCard