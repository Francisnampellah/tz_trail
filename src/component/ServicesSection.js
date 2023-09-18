import React, { useState, useEffect } from "react";
// import div from "react-animate-on-scroll";

function ServiceArea() {
  const handleScroll = ({ scrollTop, direction }) => {
    if (direction === "down") {
      console.log("Scrolling down");
      // Perform actions for scrolling down
    } else if (direction === "up") {
      console.log("Scrolling up");
      // Perform actions for scrolling up
    }
  };

  const [scrollDirection, setScrollDirection] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection(false);
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Start service Area */}
      <div
        animateIn={scrollDirection ? "slideInDown" : "slideInUp"}
        duration={1}
        className="ServiceKontainer"
      >
        <section
          className="service-area section-gap relative ServiceAlways"
          id="service"
        >
          <div className="overlay overlay-bg"></div>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="menu-content pb-60 col-lg-10">
                <div className="title text-center">
                  <h1 className="mb-10 text-white text-3xl font-medium leading-tight p-inner">
                    Always in our customer Favour
                  </h1>
                  <p>Who are always with a tight budget</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End service Area */}
        {/* Start services Area */}
        <section className="services-area pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-service" >
                  <img className="img-fluid" src="img/s1.png" alt="" style={{alignSelf:'center'}} />
                  <h4>Amenities Selection</h4>
                  <p>
                    It's totally up to you what you want and what you want to
                    let go in the hotel selection process.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-service">
                  <img className="img-fluid" src="img/s2.png" alt="" />
                  <h4>Visa Ready</h4>
                  <p>
                    Just 32 Hours - What it takes to get your Visa Ready and
                    other necessary travel documentation.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-service">
                  <img className="img-fluid" src="img/s3.png" alt="" />
                  <h4>Personalized Travel Plans</h4>
                  <p>
                    We have a wide variety of hotels & resorts to accommodate
                    you. 3D4N or 15D16N, it's totally up to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* End services Area */}
    </>
  );
}

export default ServiceArea;
