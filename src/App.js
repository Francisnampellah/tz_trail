import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Naviagtion/Navbar";
import Banner from "./Home/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FearuredTour from "./ViewAll/FearuredTour";
import Popular from "./ViewAll/Popular.js";
import ChiniDown from "./component/ChiniDown";
import ServicesSection from "./component/ServicesSection";
import ReviewSection from "./component/ReviewSection.js";
import CarouselComponent from "./ViewAll/Carousel";

import Header from "./Naviagtion/Header";
function App() {
  return (
    <div className="Appjs">
      <div className="darkKontainer">
        <Header />
        <Banner />
        <FearuredTour />
        <ServicesSection />
        {/* <Popular /> */}
        <CarouselComponent />
        <div className="inBetween">

        </div>
        <ReviewSection />
        <ChiniDown />
        {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/allfeaturedtour" element={<FearuredTour />} />
        </Routes>
      </BrowserRouter> */}
      </div>
    </div>
  );
}

export default App;
