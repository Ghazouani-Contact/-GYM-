import React from 'react'
import { Link } from 'react-router-dom'
import { photo } from '../../data'
import './photo.css'
const Photo = () => {
  return (
    <div className='body3d'>
      
<section id="slideshow">
<h1 className='photo'>Our Picture</h1>
<Link ><p className='morepic'>More picture</p></Link>

      <div className="entire-content">
      
        <div className="content-carrousel" >
        {photo.map((item)=>(
          <figure key={item.id} className="shadow"><img src={item.img} alt=''/></figure>
          ))}
    </div>
  
  </div>
</section>
    </div>
  )
}

export default Photo