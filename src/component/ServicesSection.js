import React from 'react';

const ServicesSection = () => {
  return (
    <section className="services-area pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="single-service">
              <img className="img-fluid" src="img/s1.png" alt="" />
              <h4>Amenities Selection</h4>
              <p>
                It's totally up to you what you want and what you want to let go in the hotel selection process.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-service">
              <img className="img-fluid" src="img/s2.png" alt="" />
              <h4>Visa Ready</h4>
              <p>
                Just 32 Hours - What it takes to get your Visa Ready and other necessary travel documentation.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-service">
              <img className="img-fluid" src="img/s3.png" alt="" />
              <h4>Personalized Travel Plans</h4>
              <p>
                We have a wide variety of hotels & resorts to accommodate you. 3D4N or 15D16N, it's totally up to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
