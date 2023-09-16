import React from 'react';

function Portfolio() {
  return (
    <section className="portfolio-area section-gap" id="portfolio">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">Destination</h1>
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
          <div className="row grid">
            {/* Portfolio items */}
            <div className="single-portfolio col-sm-4 all corporate">
              <div className="item">
                <img src="img/p1.jpg" alt="Work 1" />
                <div className="p-inner">
                  <h4><a href="./Pages-inside/GoldenTemple-Info.html">Golden Temple</a></h4>
                  <div className="cat">Punjab</div>
                </div>
              </div>
            </div>
            <div className="single-portfolio col-sm-4 all personal">
              <div className="item">
                <img src="img/p2.jpg" alt="Work 1" />
                <div className="p-inner">
                  <h4>Gwalior Fort</h4>
                  <div className="cat">Madhya Pradesh</div>
                </div>
              </div>
            </div>
            <div className="single-portfolio col-sm-4 all agency">
              <div className="item">
                <img src="img/p9.jpg" alt="Work 1" />
                <div className="p-inner">
                  <h5>Twang</h5>
                  <div className="cat">Arunachal Pradesh</div>
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
      </div>
    </section>
  );
}

export default Portfolio;
