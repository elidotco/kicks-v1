import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import "@splidejs/react-splide/css";

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
            <div className="catcard one"></div>
            <div className="catcard"></div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Image 2" />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Categories;
