import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: '1.png',
  },
  {
    url: '2.png',
  },
  {
    url: '3.png',
  },
  {
    url: '4.png',
  },
  {
    url: '5.png',
  },
  {
    url: '6.png',
  }
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{width: '100%', borderRadius: '1.5rem'}} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slideshow;