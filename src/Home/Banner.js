import React, { useState, useEffect } from "react";
import "./banner.css";
import ActionAreaCard from "../component/Featurecard";
import Partner from "./Partner";
import OverflowCard from "../component/DestinationCard";
import ChiniDown from "../component/ChiniDown";

function Banner() {
  const data = [1, 23, 5, 6, 12, 45, 778, 9];

  const [datam, setDatam] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = "https://api.tanzaniatrails.co.tz/api/get_popular_packages";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(datam);
        setDatam(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  console.log(datam);

  if (datam === undefined) {
    return [
      <div class="demo">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="loader">
                <span class="loading">
                  <span>L</span>
                  <span>o</span>
                  <span>a</span>
                  <span>d</span>
                  <span>i</span>
                  <span>n</span>
                  <span>g</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>,
    ];
  }

  return (
    <div className="Hero">
      <div className="InsideHero">
        <div className="part1">
          <p className="welcomeToTz">Welcome to tanzania Trails</p>
          <p className="text_discover">Discover Your Next Adventure.</p>
          <p className="happy">
            We are happy to help you plan your next adventure and create
            unforgettable memories. We offer variety of travel options.
          </p>
        </div>

        <div className="part2"></div>
      </div>
      <div style={{ width: "100%" }}>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "2rem" }}
        >
          <h1 style={{ alignSelf: "flex-start", fontSize: "24px" }}>
            Featured Tours
          </h1>
          <h2 style={{ alignSelf: "flex-start", fontSize: "16px" }}>
            Most recommended tours on this season.
          </h2>
        </div>

        <div className="featuredCard">
          {datam
            .filter((each, idx) => idx < 4)
            .map((each) => {
              return <ActionAreaCard detail={each} />;
            })}
        </div>
        <h3 style={{ alignSelf: "flex-start", fontSize: "16px" }}>View All</h3>
      </div>

      <div className="partners">
        <h3>Trusted by largest travel brands</h3>
        <Partner />
      </div>

      <div className="beachTour">
        <div className="beach">
          <div className="beachPart1">
            <h1 style={{ color: "white", fontSize: "44px", fontWeight: 1000 }}>
              Beach Tours
            </h1>
            <h2 style={{ color: "white", fontSize: "24px", fontWeight: 100 }}>
              Most recommended tours on this season.
            </h2>
          </div>

          <div className="beachPart2">
            <div className="dontMiss">
              <h1
                style={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: 600,
                }}
              >
                Don't Miss A Chance
              </h1>
              <div
                style={{
                  backgroundColor: "white",
                  fontSize: "24px",
                  fontWeight: 600,
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    color: "#683e12",
                    fontSize: "16px",
                    fontWeight: 400,
                    padding: "10px",
                  }}
                >
                  Don't Miss A Chance
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  fontWeight: 600,
                  borderRadius: "10px",
                }}
              >
                <p
                  style={{
                    color: "#683e12",
                    fontSize: "16px",
                    fontWeight: 400,
                    padding: "10px",
                  }}
                >
                  Don't Miss A Chance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <h1 style={{ alignSelf: "flex-start" }}>Destination</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {data
            .filter((each, idx) => idx < 4)
            .map((each) => {
              return <OverflowCard />;
            })}
        </div>
        <h3 style={{ alignSelf: "flex-start" }}>View All</h3>
      </div>
      <ChiniDown />
    </div>
  );
}

export default Banner;
