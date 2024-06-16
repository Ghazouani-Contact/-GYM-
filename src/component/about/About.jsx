import React from 'react'
import "./about.css"
import img from "../../image/png.png"
import Icon from "./icon.png"
import Icon2 from "./icon2.png"
import Icon3 from "./icon3.png"

const About = () => {

  return (
    <div className='body'>
        <div className='LF'>

     <div className="left">
         <div className='bg'>  
             <img src={img} alt="" className='Aimg'/>
             <h2 className='h1'>About us</h2>

         </div>
     </div>

     <div className='right'>
     <div className='IT'>
      <img src={Icon} alt="" className='icon' />
         <h3 className='ITtitle'>title1</h3>
         </div>
        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. .</p>
        <div className='IT'>
        <img src={Icon2} alt="" className='icon' />
        <h3 className='ITtitle'>title1</h3>
        </div>
       <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.</p>
     
       <div className='IT'>
        <img src={Icon3} alt="" className='icon' />
        <h3 className='ITtitle'>title1</h3>
        </div>
        <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p>
        </div>
     </div>
        </div>
  )
}

export default About