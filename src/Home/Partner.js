import React from "react";
import { partners } from "../Assets";

function Partner() {
  return (
    <div className="partner">
      {partners.map((each) => {
        return (
          <div className="eachPartner flex bg-white p-4 items-center justify-center rounded-xl drop-shadow">
            <img src={each.src} alt="destination" className="h-10 " />
          </div>
        );
      })}
    </div>
  );
}

export default Partner;
