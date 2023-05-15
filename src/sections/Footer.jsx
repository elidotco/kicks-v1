import React from "react";
import logo from "../logo-white.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="layer">
        <div className="newsletter">
          <div className="left">
            <div>
              <h2>Join our KicksPlus Club & get 15% off</h2>
              <p>Sign up for free! Join the community.</p>
            </div>
            <div className="news">
              <input
                name="text"
                type="email"
                placeholder=" Email Address"
                className="mail-input"
              />
              <button className="mail-button">Submit</button>
            </div>
          </div>
          <div className="right">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="bottom">
          <div className="top">
            <div className="about">
              <h2>About Us</h2>
              <p>
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>
            <div className="cate-menu">
              <h3>Categories</h3>
              <ul>
                <li>Runners</li>
                <li>Sneakers</li>
                <li>Basketball</li>
                <li>Outdoor</li>
                <li>Golf</li>
                <li>Hiking</li>
              </ul>
            </div>
            <div className="company">
              <h3>Company</h3>
              <p>About</p>
              <p>Contact</p>
              <p>Blogs</p>
            </div>
            <div className="socials">
              <h3>Follow us</h3>
              <p>About</p>

              <p>Contact</p>
              <p>Blogs</p>
            </div>
          </div>
          <div className="down">
            <img src={logo} alt="hom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
