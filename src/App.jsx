import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";

export default function app (){
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<AllMovies />} />
        <Route path="/series" element={<AllSeries />} /> */}
      </Routes>
    </Router>
  )
}