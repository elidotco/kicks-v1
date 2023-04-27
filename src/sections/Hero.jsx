import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="slogan">
        <h1>
          DO IT <span>RIGHT</span>
        </h1>
      </div>
      {/* Featured Shoe */}
      <div className="featured-shoe">
        <div className="tag">Jordan shoe of the year</div>

        <div className="description">
          <div className="name">
            <h2>JOrdan 4</h2>
            <p>Jordan introducin the nwe Jordan 4s for every atletic dream</p>
            <a href="/" className="primary-button">
              Shop now
            </a>
          </div>
          <div className="card-c">
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </div>
      </div>

      {/* Mini New Drops Section */}
      <div className="newdrops">
        <div className="title">
          <div>
            <h2>Dont Miss out</h2>
            <h2>new Drops</h2>
          </div>

          <div>
            <a href="/" className="primary-button">
              Shop now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
