import React from "react";
import { animated } from "@react-spring/web";
import ScrollAnimation from "react-animate-on-scroll";

function Banner() {
  return (
    <section className=" relative BannerCostume">
      <div className="overlay overlay-bg darkKontainer"></div>
      <div className="container">
        <div className="row fullscreen d-flex align-items-center justify-content-center">
          <ScrollAnimation
            animateIn="slideInUp"
            duration={4}
            className="banner-content col-lg-10"
          >
            <h5 className="text-uppercase">
              Be the part of this Wonderful Journey
            </h5>
            <h1>Incredible India!</h1>
            <a href="#" className="primary-btn text-uppercase">
              Explore Now
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}

export default Banner;
