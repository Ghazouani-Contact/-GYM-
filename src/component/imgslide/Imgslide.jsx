import React from "react";
import { Link } from "react-router-dom";
import "./imgslide.css";

function Imgslide({ item }) {
  return (
    <Link to="/gigs?cat=design" className="link">
      <div className="catCard">
        <img src={item.img} alt="" />
       
      </div>
      <p className="IMGP">{item.title}</p>
        <p className="IMGP">{item.desc}</p>
    </Link>
  );
}
export default Imgslide;