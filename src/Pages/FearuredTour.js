import React, { useState, useEffect } from "react";

function Portfolio() {
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

  console.log(scrollDirection);

  return (
    <section
      className="portfolio-area section-gap"
      id="portfolio"
      onScroll={handleScroll}
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10 text-3xl font-medium leading-tight p-inner">
                Destination
              </h1>
              <p>Explore Tanzania from Arusha to Serengeti</p>
            </div>
          </div>
        </div>

        {/* <div className="filters">
          <ul>
            <li className="active" data-filter="*">All</li>
            <li data-filter=".corporate">North</li>
            <li data-filter=".personal">Central</li>
            <li data-filter=".agency">North-Eastern</li>
            <li data-filter=".portal">South</li>
          </ul>
        </div> */}

        <div className="filters-content">
          <div
            animateIn={scrollDirection ? "slideInDown" : "slideInUp"}
            duration={1}
            className="flex flex-wrap"
          >
            {/* Portfolio items */}

            <div className="single-portfolio col-sm-4 all corporate">
              <div className="item">
                <img src="img/p1.jpg" alt="Work 1" />
                <div className="text-xl font-medium leading-tight p-inner">
                  <h4>
                    <a href="./Pages-inside/GoldenTemple-Info.html">
                      Golden Temple
                    </a>
                  </h4>
                  <div className="cat">Punjab</div>
                </div>
              </div>
            </div>
            <div className="single-portfolio col-sm-4 all personal">
              <div className="item">
                <img src="img/p2.jpg" alt="Work 1" />
                <div className="text-xl font-medium leading-tight p-inner">
                  <h4>Gwalior Fort</h4>
                  <div className="cat">Madhya Pradesh</div>
                </div>
              </div>
            </div>
            <div className="single-portfolio col-sm-4 all agency">
              <div className="item">
                <img src="img/p9.jpg" alt="Work 1" />
                <div className="text-xl font-medium leading-tight p-inner">
                  <h5>Twang</h5>
                  <div className="cat">Arunachal Pradesh</div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="single-portfolio col-sm-4 all portal">
              <div className="item">
                <img src="img/p12.jpg" alt="Work 1" />
                <div className="p-inner">
                  <h5>Alleppey</h5>
                  <div className="cat">Kerala</div>
                </div>
              </div>
            </div> */}
          {/* Add more portfolio items here */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
