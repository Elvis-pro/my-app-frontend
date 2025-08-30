import React from "react";
import MCarousel from "../component/moviecarousel"
import "../styles/Structures.css";

export default function Hero (){
    return(
        <div className="hero">
            <MCarousel />
            <div className="custom-pagination pag-button"></div>
        </div>
    )
}