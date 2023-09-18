import React from "react";
import Image from "../Assets/hero.jpg";
import Karousel from './Carousel.js'

function Portfolio() {
  const arryData = [1, 23, 45, 67];
  return (
    <section className="portfolio-area section-gap" id="portfolio">
      <div className="container ">
        <div className="row d-flex justify-content-center">
          <div className="menu-content col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">Popular Product</h1>
              <p>Explore Tanzania from Arusha to Serengeti</p>
            </div>
          </div>
        </div>
        <div className="popularProduct">
          {arryData.map((each) => (
            <div class="card KardCostume">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top"
              alt="Hollywood Sign on The Hill" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
          ))}
        </div>

        <div className="KardCostumeViewAll">
          <span>View All</span>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

// const Carousel = () => {
//   return (
//     <div
//       id="carouselExampleControls"
//       className="carousel slide"
//       data-ride="carousel"
//     >
//       <div className="carousel-inner">
//         <div className="carousel-item active">
//           <img
//             className="d-block w-100"
//             src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
//             alt="First slide"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             className="d-block w-100"
//             src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
//             alt="Second slide"
//           />
//         </div>
//         <div className="carousel-item">
//           <img
//             className="d-block w-100"
//             src="https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
//             alt="Third slide"
//           />
//         </div>
//       </div>
//       <a
//         className="carousel-control-prev"
//         href="#carouselExampleControls"
//         role="button"
//         data-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="sr-only">Previous</span>
//       </a>
//       <a
//         className="carousel-control-next"
//         href="#carouselExampleControls"
//         role="button"
//         data-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="sr-only">Next</span>
//       </a>
//     </div>
//   );
// };

// export default Carousel;
