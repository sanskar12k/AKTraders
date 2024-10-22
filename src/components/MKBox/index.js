/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { forwardRef } from "react";
// import bgImg from "assets/images/fImg6.webp";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
// import Slider from "react-slick";
// import SimpleSlider from "components/MKBox/slider";
// import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Custom styles for MKBox
import MKBoxRoot from "components/MKBox/MKBoxRoot";
import SimpleSlider from "./slider";

// const defaultCarouselSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   // autoplay: true,
// };

const MKBox = forwardRef(
  (
    {
      variant,
      bgColor,
      color,
      opacity,
      borderRadius,
      shadow,
      coloredShadow,
      isCarousel,
      images,
      // carouselSettings = {},
      ...rest
    },
    ref
  ) => {
    // const finalCarouselSettings = {
    //   ...defaultCarouselSettings, // Use default values
    //   ...carouselSettings, // Override with user-defined settings if provided
    // };
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 2,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    // };
    return (
      <MKBoxRoot
        {...rest}
        ref={ref}
        ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow }}
      >
        {isCarousel ? (
          <div>
            <SimpleSlider images={images} />
          </div>
        ) : (
          rest.children // Fallback content for non-carousel usage
        )}
      </MKBoxRoot>
    );
  }
);

// Setting default values for the props of MKBox
MKBox.defaultProps = {
  variant: "contained",
  bgColor: "transparent",
  color: "dark",
  opacity: 1,
  borderRadius: "none",
  shadow: "none",
  coloredShadow: "none",
  isCarousel: false, // No carousel by default
  images: [], // Empty image array by default
  // carouselSettings: {},
};

// Typechecking props for the MKBox
MKBox.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  bgColor: PropTypes.string,
  color: PropTypes.string,
  opacity: PropTypes.number,
  borderRadius: PropTypes.string,
  shadow: PropTypes.string,
  coloredShadow: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "none",
  ]),
  isCarousel: PropTypes.bool, // Validates if the carousel is active
  images: PropTypes.arrayOf(PropTypes.string), // Ensures images is an array of strings
  // carouselSettings: PropTypes.object, // Validates carousel settings object
};

export default MKBox;
