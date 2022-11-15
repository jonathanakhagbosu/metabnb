import React from "react";
import "./inspiration.css";
import stars from "../../assets/stars.svg";

const InspirationImages = [
  { src: require("../../assets/inspiration_1.png") },
  { src: require("../../assets/inspiration_2.png") },
  { src: require("../../assets/inspiration_3.png") },
  { src: require("../../assets/inspiration_4.png") },
  { src: require("../../assets/inspiration_5.png") },
  { src: require("../../assets/inspiration_6.png") },
  { src: require("../../assets/inspiration_7.png") },
  { src: require("../../assets/inspiration_8.png") },
];

const Inspiration = () => {
  return (
    <section id="inspiration-section">
      <div className="container inspiration-container">
        <h2>Inspiration for your next adventure</h2>
        <div className="grid-container">
          {InspirationImages.map((e, index) => {
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

export default Inspiration;
