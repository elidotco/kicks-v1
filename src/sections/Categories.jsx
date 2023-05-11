import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";
import { FiArrowUpRight } from "react-icons/fi";

const Categories = () => {
  return (
    <div className="categories">
      <div className="title">Categories</div>

      <Splide
        options={{
          classes: {
            arrows: "splide__arrows class-arrows",
            arrow: "splide__arrow class-arrow",
            prev: "splide__arrow--prev class-prev",
            next: "splide__arrow--next class-next",
          },
          pagination: false,
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <div className="cat">
            <div className="catcard one">
              <div className="catcard-image"></div>
              <div className="catcard-title">
                <p>Lifestyle shoes</p>
                <div className="link">
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
            <div className="catcard">
              <div className="catcard-image"></div>
              <div className="catcard-title">
                <p>Lifestyle shoes</p>
                <div className="link">
                  <FiArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="catcard-image"></div>
          <div className="catcard-title">
            <p>Lifestyle shoes</p>
            <div className="link">
              <FiArrowUpRight />
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Categories;
