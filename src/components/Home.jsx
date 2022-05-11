import React from 'react'
import DefaultNav from './DefaultNav'
function Home() {
  return (
    <div 
      style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <DefaultNav/>
      <div>
        <h1>You Take Me Home (Original) </h1>
        <iframe
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/OAQg8W80UmY" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
      <div>
        <h1>Feeling Whitney- Post Malone (Cover)</h1>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/zdeJg545kxM" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}

export default Home