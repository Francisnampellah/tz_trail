import React, { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
// import div from "react-animate-on-scroll";
import KardComponent from "../component/KardComponent";

const CarouselComponent = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  console.log(windowSize.current[0]);

  const DataArray = [1, 2, 34, 4];

  const chunkedData = [];

  if (windowSize.current[0] <= 400) {
    for (let i = 0; i < DataArray.length; i += 1) {
      chunkedData.push(DataArray.slice(i, i + 1));
    }
  } else {
    for (let i = 0; i < DataArray.length; i += 3) {
      chunkedData.push(DataArray.slice(i, i + 3));
    }
  }


  const ArryData = [1, 2, 3];
  return (
    <div
      animateIn={"fadeIn"}
      duration={3}
      className=""
      id="portfolio"
    >
      <div className="container popularProductKontainer">
        <div className="row d-flex justify-content-center">
          <div className="menu-content col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10 text-black text-3xl font-medium leading-tight p-inner">Popular Product</h1>
              <p>Explore Tanzania from Arusha to Serengeti</p>
            </div>
          </div>
        </div>

        <Carousel
          id="carouselExampleControls"
          className="carousel carousel-dark slide "
          interval={null}
          fade={true}
          slide={true}
          indicators={true}
          controls={true}
        >
          {chunkedData.map((each) => (
            <Carousel.Item>
              <div className="card-wrapper container-sm d-flex justify-content-around popularProduct">
                {each.map((item, itemIndex) => (
                  <KardComponent />
                ))}
              </div>{" "}
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="KardCostumeViewAll">
          <span>View All</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
