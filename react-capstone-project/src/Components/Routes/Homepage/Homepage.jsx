import React from "react";
import Userprofile from "./Userprofile/Userprofile";
import Weather from "./Weather/Weather";
import News from "./News/News";
import "./Homepage.css";
function Homepage() {
  return (
    <div className="cont">
      <div className="homepage">
        <div className="left">
          <div className="userpofile">
            <Userprofile />
          </div>
          <div className="weather">
            <Weather />
          </div>
        </div>
        <div className="news">
          <News />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
