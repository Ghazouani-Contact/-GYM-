import React from "react";
import "./slide.css";
import Slider from "infinite-react-carousel";
import { image } from "../../data";
import Imgslide from "../imgslide/Imgslide";

const Slide = () => {
  return (
    <div className="Sbg">
      <h3 className="title">NOS COURS</h3>
    <div className="slide">  
      <div className="container"> 
      <Slider slidesToShow={3}arrowsScroll={1} autoplay>
      {image.map((img) => (
          <Imgslide  key={img.id} item={img} />
        ))}
    
  </Slider>
      </div>
    </div>
    </div>
  );
};

export default Slide;