import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/4C7A/production/_114587591_gettyimages-676894393.jpg" },
  { url: "data:image/jpeg;base64,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" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg" }
];
function ImageSlider() {
  return (
    <div>
        <SimpleImageSlider
        width={800}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        slideDuration={2.0}
        autoPlayDelay={4.0}
      />

    </div>
  )
}

export default ImageSlider