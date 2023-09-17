import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ChiniDown from "./component/ChiniDown";
import SingleTour from "./Home/SingleTour";
import Example from "./Pages/OurTOur";
import About from "./Pages/About";
import { useState, useEffect } from "react";
import Home from "./Home/Home";

import Header from "./Naviagtion/Header";

function App() {
  const [singleTourId, setSingleTourId] = useState();

  let id = 0;

  useEffect(() => {
    id = singleTourId;
  }, [singleTourId]);

  return (
    <div className="Appjs">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/singletour"
            element={<SingleTour singleTourId={id} />}
          />
          <Route
            path="/ourtour"
            element={<Example setTourId={setSingleTourId} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <ChiniDown />
    </div>
  );
}

export default App;

{
  /* <Banner />
<FearuredTour />
<ServicesSection />
<CarouselComponent />
<div className="inBetween">
  <ScrollAnimation animateIn="slideInLeft" duration={2}>
    <h1 style={{ fontSize: 72, color: "white" }}>Hello word</h1>
  </ScrollAnimation>
  <ScrollAnimation animateIn="slideInRight" duration={2}>
    <p style={{ fontSize: 16, color: "white", textAlign: "justify" }}>
      In the above code, the initial prop defines the behavior of a
      motion component before it mounts, while the animate prop is used
      to define the behavior when it mounts. Now, we’ll add a fade-in
      animation effect to the motion component by setting the opacity of
      the component to 0 before it mounts and back to 1 when it mounts.
      The transition property has a duration value that indicates the
      animation duration.{" "}
    </p>
  </ScrollAnimation>
</div>
<ReviewSection /> */
}
