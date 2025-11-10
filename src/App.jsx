import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoreRecentlyAdded from "./More_pages/moreRecentlyAdded";
import MoreMostPopular from "./More_pages/moreMostPopular";
import MoreTopRated from "./More_pages/moreTopRated";
import MoreTrending from "./More_pages/moreTrending";
import Home from "../src/pages/home";
import Navbar from "../src/Navbar/navbar";
import GenrePage from "../src/pages/genrePages";

export default function app (){
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/morerecentlyadded" element={<MoreRecentlyAdded />} />
        <Route path="/moretrending" element={<MoreTrending />} />
        <Route path="/moremostpopular" element={<MoreMostPopular />} />
        <Route path="/moretoprated" element={< MoreTopRated/>} />
        <Route path="/genre/:genre" element={<GenrePage />} />
      </Routes>
    </Router>
  )
}