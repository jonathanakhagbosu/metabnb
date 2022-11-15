import React from "react";
import stars from "../../assets/stars.svg";
import location from "../../assets/location.png";
import "./place.css";

const Places = [
  { src: require("../../assets/inspiration_5.png") },
  { src: require("../../assets/inspiration_6.png") },
  { src: require("../../assets/inspiration_7.png") },
  { src: require("../../assets/inspiration_8.png") },
  { src: require("../../assets/inspiration_1.png") },
  { src: require("../../assets/inspiration_2.png") },
  { src: require("../../assets/inspiration_3.png") },
  { src: require("../../assets/inspiration_4.png") },
  { src: require("../../assets/inspiration_9.png") },
  { src: require("../../assets/inspiration_10.png") },
  { src: require("../../assets/inspiration_11.png") },
  { src: require("../../assets/inspiration_12.png") },
  { src: require("../../assets/inspiration_13.png") },
  { src: require("../../assets/inspiration_14.png") },
  { src: require("../../assets/inspiration_15.png") },
  { src: require("../../assets/inspiration_16.png") },
];

const PlaceToStay = () => {
  return (
    <section style={{ margin: "60px 0" }}>
      <div className="container">
        <div className="location">
          <div className="location-items">
            <p>Restaurant</p>
            <p>Cottage</p>
            <p>Castle</p>
            <p>fantast city</p>
            <p>beach</p>
            <p>Carbins</p>
            <p>Off-grid</p>
            <p>Farm</p>
          </div>
          <a href="#">
            Location <img src={location} alt="location" />
          </a>
        </div>
        <div className="grid-container">
          {Places.map((e, index) => {
            return (
              <div key={index} className="grid-item">
                <div className="flex-col">
                  <img src={e.src} alt="card" />
                  <div className="flex-col">
                    <p className="flex">
                      Desert king{" "}
                      <span style={{ fontWeight: 700 }}>1MBT per night</span>
                    </p>
                    <p className="flex">
                      2345km away <span>available for 2weeks stay</span>
                    </p>
                    <img src={stars} alt="rating" className="stars" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlaceToStay;
