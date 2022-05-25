import React from 'react'
import DefaultNav from './DefaultNav'
import Footer from './Footer'

function Timeline() {
  return (
    <div className='page'>
      <DefaultNav/>
      <div className='timeline'>
        <h1>Henry IX Timeline</h1>
        <div className='timelineYear'><h3>2019</h3></div>
        <p className='timelineText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className='timelineYear'><h3>2020</h3></div>
        <p className='timelineText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus at ultrices mi tempus imperdiet nulla. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Tellus pellentesque eu tincidunt tortor aliquam nulla. In hac habitasse platea dictumst vestibulum rhoncus est. Urna et pharetra pharetra massa massa ultricies. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Sit amet volutpat consequat mauris. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Suscipit tellus mauris a diam maecenas. Mi quis hendrerit dolor magna eget est lorem. </p>
        <div className='timelineYear'><h3>2021</h3></div>
        <p className='timelineText'>Eget nullam non nisi est sit amet facilisis magna etiam. Arcu non odio euismod lacinia. Consequat id porta nibh venenatis cras. Tellus molestie nunc non blandit massa enim nec dui. Vel eros donec ac odio tempor orci dapibus ultrices. Gravida rutrum quisque non tellus orci ac auctor. Turpis in eu mi bibendum neque egestas congue quisque egestas. Enim ut sem viverra aliquet eget sit amet tellus. Turpis massa sed elementum tempus egestas sed. A scelerisque purus semper eget duis at tellus. Id aliquet risus feugiat in ante metus dictum.</p>
        <div className='timelineYear'><h3>2022</h3></div>
        <p className='timelineText'>Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Facilisi nullam vehicula ipsum a arcu cursus vitae. Ultrices gravida dictum fusce ut placerat. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Magna sit amet purus gravida. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Commodo sed egestas egestas fringilla. Ornare massa eget egestas purus viverra. Sed id semper risus in hendrerit. Massa tincidunt dui ut ornare lectus sit amet. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Turpis tincidunt id aliquet risus feugiat in ante.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default Timeline