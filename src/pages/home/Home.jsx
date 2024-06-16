import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Sliderone from '../../component/slider/Slider';
import Slide from '../../component/slide/Slide';
import About from '../../component/about/About.jsx';
import Photo from '../../component/photo/Photo';
import Abonnement from '../../component/abonnement/Abonnement';
import Footer from '../../component/footer/Footer';


const Home = () => {
  return (
  <div className='color'>
    <Navbar/>
    <Sliderone/>
    <About/>
    <Slide/>
    <Photo/>
    <Abonnement/>
    <Footer/>
  </div>
  )
}

export default Home