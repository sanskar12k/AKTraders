import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";
import Carousel from "react-material-ui-carousel";
import PropTypes from "prop-types";
function SimpleSlider({ images }) {
  return (
    <Carousel navButtonsAlwaysVisible animation="slide">
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={index} style={{ width: "min-content", height: "75vh" }} />
        </div>
      ))}
    </Carousel>
  );
}

// Add PropTypes validation
SimpleSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SimpleSlider;
// <Swiper spaceBetween={50} slidesPerView={1}>
//   <SwiperSlide>
//     <img src="https://via.placeholder.com/300" alt="slide1" />
//   </SwiperSlide>
//   <SwiperSlide>
//     <img src="https://via.placeholder.com/300" alt="slide2" />
//   </SwiperSlide>
// </Swiper>;
