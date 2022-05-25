import React from 'react'
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'
import { IconContext } from 'react-icons'

function Socials() {
  return (
    <div className='socials'>
        <IconContext.Provider value={{ size: 20 }}>
            <FaTwitter/>
            <a href='https://www.instagram.com/henryixmusic/?hl=en'><FaInstagram/></a>
            <a href='https://www.facebook.com/henryixmusic'><FaFacebook/></a>
            <a href='https://www.youtube.com/channel/UC7146m4Kn60om_0Dnqai3CQ'><FaYoutube/></a>

        </IconContext.Provider>
    </div>
  )
}

export default Socials