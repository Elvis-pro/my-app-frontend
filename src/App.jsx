import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoreRecentlyAdded from "./More_pages/moreRecentlyAdded"
import Home from "../src/pages/home";

export default function app (){
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/morerecentlyadded" element={<MoreRecentlyAdded />} />
        {/* <Route path="/series" element={<AllSeries />} /> */}
      </Routes>
    </Router>
  )
}