import Banner from "./Banner";
import Portfolio from "../ViewAll/FearuredTour";
import ServiceArea from "../component/ServicesSection";
import CarouselComponent from "../ViewAll/Carousel";
import ReviewSection from "../component/ReviewSection";

import React from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <Portfolio />
      <ServiceArea />
      <CarouselComponent />
      <div className="inBetween">
        <div animateIn="slideInLeft" duration={2}>
          <h1 style={{ fontSize: 72, color: "white" }}>Hello word</h1>
        </div>
        <div animateIn="slideInRight" duration={2}>
          <p style={{ fontSize: 16, color: "white", textAlign: "justify" }}>
            In the above code, the initial prop defines the behavior of a motion
            component before it mounts, while the animate prop is used to define
            the behavior when it mounts. Now, we’ll add a fade-in animation
            effect to the motion component by setting the opacity of the
            component to 0 before it mounts and back to 1 when it mounts. The
            transition property has a duration value that indicates the
            animation duration.{" "}
          </p>
        </div>
      </div>
      <ReviewSection />
    </div>
  );
}
