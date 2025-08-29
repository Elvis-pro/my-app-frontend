import React from "react";
import Hero from "../component/Hero";
import MP from "../component/mostPopular";
import RA from "../component/RecentlyAdded";
import Trending from "../component/Trending";
import TopRated from "../component/topRated";
import "../styles/home.css"


export default function Home () {
    return(
        <div className="home">
           <Hero />
           <RA />
            <Trending />
            <MP />
            <TopRated />
        </div>
    )
}
