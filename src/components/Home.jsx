import React from 'react'
import DefaultNav from './DefaultNav'
import Footer from './Footer'
import ImageSlider from './ImageSlider'
function Home() {
  return (
    <div className='page'>
      <DefaultNav/>
      <div className='home'>
        <ImageSlider/>
        <section className='homeVideo'>
          <h2>You Take Me Home (Original) </h2>
          <iframe
            width="700" 
            height="450" 
            src="https://www.youtube.com/embed/OAQg8W80UmY" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </section>
        <section className='homeVideo'>
          <h2>Feeling Whitney- Post Malone (Cover)</h2>
          <iframe 
            width="700" 
            height="450" 
            src="https://www.youtube.com/embed/zdeJg545kxM" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default Home