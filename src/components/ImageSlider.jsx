import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/Capture.jpg" },
  { url: "images/Capture2.jpg" },
  { url: "images/Capture3.jpg" }
];
function ImageSlider() {
  return (
    <div>
        <SimpleImageSlider
        width={'98vw'}
        height={'90vh'}
        images={images}
        showNavs={true}
        autoPlay={true}
        slideDuration={2.0}
        autoPlayDelay={4.0}
      />

    </div>
  )
}

export default ImageSlider