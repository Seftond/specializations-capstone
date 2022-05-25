import React from 'react'
import { NavLink } from 'react-router-dom';
import Socials from './Socials'
function DefaultNav() {
    return (
        <>
            <section className='headerTitle'>
                <img id='logo' src='images/logo-real.jpg' alt='Henry IX Logo' height='75'/>
            </section>
        <div className='navPage'>
            <nav className='navBar'>
                <div  className='navSocials'>
                    <Socials/>  
                </div>
                <NavLink className='headerLinks'
                    style={({ isActive }) => {
                        return {
                            backgroundColor: isActive ? "#6B6B6B" : "",
                            };
                    }}
                    to='/home'
                >
                    Home
                </NavLink>
                <NavLink className='headerLinks'
                    style={({ isActive }) => {
                        return {
                            backgroundColor: isActive ? "#6B6B6B" : "",
                        };
                    }}
                    to='/events'
                >
                    Tour
                </NavLink>
                <NavLink className='headerLinks'             
                    style={({ isActive }) => {
                        return {
                        backgroundColor: isActive ? "#6B6B6B" : "",
                        };
                    }}
                    to='/shop'
                >
                    Shop
                </NavLink> 
                <NavLink className='headerLinks'            
                    style={({ isActive }) => {
                        return {
                        backgroundColor: isActive ? "#6B6B6B" : "",
                        };
                    }}
                    to='/timeline'
                >
                    Timeline
                </NavLink>
                <NavLink className='headerLinks'           
                    style={({ isActive }) => {
                        return {
                        backgroundColor: isActive ? "#6B6B6B" : "",
                        };
                    }}
                    to='/contact'
                >
                    Contact/Book
                </NavLink>
                <NavLink className='headerLinks'          
                    style={({ isActive }) => {
                        return {
                        backgroundColor: isActive ? "#6B6B6B" : "",
                        };
                    }}
                    to='/subscribe'
                >
                    Subscribe
                </NavLink> 
            </nav>
    </div>
        </>
      )
}

export default DefaultNav