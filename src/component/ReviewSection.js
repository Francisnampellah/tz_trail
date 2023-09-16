import React from 'react';

const ReviewSection = () => {
  return (
    <section className="review-area section-gap" id="testimonial">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-10">
            <div className="title text-center">
              <h1 className="mb-10">How Our Customers Felt About Us</h1>
              <p>Who are in extreme love with friendly &amp; inviting people</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="single-review">
              <img src="img/c1.png" alt="" />
              <div className="title d-flex flex-row">
                <a href="#"><h4>Fannie Rowe</h4></a>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
              <p>
                It was a life experience to visit such a beautiful cultural country.
              </p>
            </div>
            <div className="single-review">
              <img src="img/c3.png" alt="" />
              <div className="title d-flex flex-row">
                <a href="#"><h4>Lillie Summers</h4></a>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
              <p>
                Just one word - Incredible!
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-review">
              <img src="img/c2.png" alt="" />
              <div className="title d-flex flex-row">
                <a href="#"><h4>Bob Marley</h4></a>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
              <p>
                Damm! I'm thinking of staying here in this world.
              </p>
            </div>
            <div className="single-review">
              <img src="img/c4.png" alt="" />
              <div className="title d-flex flex-row">
                <a href="#"><h4>Jackie Chan</h4></a>
                <div className="star">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
              <p>
                Now, I am a big fan of Power Yoga. Thanks for such a gift to this world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
