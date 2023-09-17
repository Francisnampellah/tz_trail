import React, { useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import ScrollAnimation from "react-animate-on-scroll";
import Swal from "sweetalert2";
const TourCarousel = ({ data }) => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  console.log(windowSize.current[0]);

  const chunkedData = [];

  if (windowSize.current[0] <= 400) {
    for (let i = 0; i < data.length; i += 1) {
      chunkedData.push(data.slice(i, i + 1));
    }
  } else {
    for (let i = 0; i < data.length; i += 3) {
      chunkedData.push(data.slice(i, i + 3));
    }
  }

  console.log(data);

  const imageExpand = (url) => {
    Swal.fire({
      imageUrl: url,
      imageAlt: "A tall image",
      //   title: "Custom Image Alert",
      //   html: `<img src=${url} alt="Image" style="max-width: 100%;borderRadius:'10px'">`,
      //   showCloseButton: true,
      //   showConfirmButton: false,
    });
  };

  return (
    <div
      animateIn={"fadeIn"}
      duration={null}
      className=""
      id="portfolio"
      style={{}}
    >
      <div className="container popularProductKontainer">
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
                  <div
                    className="col-md-3 col-sm-6 mb-4"
                    onClick={() =>
                      imageExpand(
                        "https://api.tanzaniatrails.co.tz/" + item.image_url
                      )
                    }
                  >
                    <a href="#">
                      <img
                        className="img-fluid"
                        src={
                          "https://api.tanzaniatrails.co.tz/" + item.image_url
                        }
                        alt=""
                      />
                    </a>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TourCarousel;
