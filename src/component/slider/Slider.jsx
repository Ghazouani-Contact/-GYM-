import React from "react";
import "./slider.css";
import Slider from "infinite-react-carousel";
import { imagebig } from "../../data";

const Slide = () => {
  return (
    <div className="slider">
      <div className="containe"> 
      <Slider  autoplay arrows={false} dots autoplaySpeed={6000} duration={400}	>
      {imagebig.map((item) => (
          <img src={item.img}  key={item.id}  className="image"/>
        ))}
    
    
  </Slider>
      </div>
    </div>
  );
};

export default Slide;