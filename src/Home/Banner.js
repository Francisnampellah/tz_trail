import React from "react";
import { motion } from "framer-motion";

function Banner() {
  return (
    <section className=" relative BannerCostume">
      <div className="overlay overlay-bg darkKontainer"></div>
      <div className="container">
        <div className="row fullscreen d-flex align-items-center justify-content-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration:4}}
            className="banner-content col-lg-10"
          >
            <h5 className="text-uppercase">
              Be the part of this Wonderful Journey
            </h5>
            <h1>Incredible Tanzania!</h1>
            <a href="#" className="primary-btn text-uppercase">
              Explore Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
