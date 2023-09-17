import React from "react";
import { useRef, useEffect, useState } from "react";
import BasicAccordion from "../component/Accordion";
import BookingForm from "../component/BookingForm";
import { Link, useLocation, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import TourCarousel from "../component/TourCarousel";

const SingleTour = ({ singleTourId }) => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const valueId = queryParams.get("tourId");

  useEffect(() => {
    const apiUrl = `https://api.tanzaniatrails.co.tz/api/package/${valueId}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  if (data.id === undefined) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "80vh", margin: "20px", borderRadius: "10px" }}
      >
        <ClipLoader
          color={"#683e12"}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  console.log(data);

  return (
    <div className="singletourKotainer mt-20">
      {/* Page Content */}
      <div className="container">
        {/* Page Heading/Breadcrumbs */}
        <h1 className="mt-4 mb-3">{data.title}</h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">{data.title}</li>
        </ol>

        {/* Portfolio Item Row */}
        <div className="row">
          <div className="col-md-8">
            <img
              className="img-fluid"
              src={"https://api.tanzaniatrails.co.tz/" + data?.image_url}
              style={{ height: "100%", width: "100%" }}
              alt=""
            />
          </div>
          <div className="col-md-4">
            <h3 className="my-3 decoration-4 font-extrabold text-3xl">
              Description
            </h3>
            <p className="text-justify">{data.description}</p>
            <h3 className="my-3 decoration-4 font-extrabold text-xl">Also</h3>
            Package Level :{" "}
            <span
              class={
                "inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset" +
                "ring-green-600/20"
              }
            >
              {data.package_level.title}
            </span>
          </div>
        </div>

        {/* Related Projects Row */}
        <h3 className="my-4">Related Pictures</h3>

        <TourCarousel data={data.package_gallery} />

        {/* <div className="row">
          {data.package_gallery.map((each) => {
            return (
              <div className="col-md-3 col-sm-6 mb-4">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    alt=""
                  />
                </a>
              </div>
            );
          })}
        </div> */}
      </div>

      <div className="singleTourDetails">
        <div className="tourKontent">
          <h1 className="decoration-4 font-extrabold text-3xl">Itenerary</h1>
          <BasicAccordion data={data.package_days} />
        </div>

        <div className="tourForm" style={{ position: "sticky", top: "30px" }}>
          <BookingForm data={data} />
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
