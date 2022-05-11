import React from 'react'
import { NavLink } from 'react-router-dom';
function DefaultNav() {
    return (
        <div>
            <section
                style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <h1>HenryIX</h1>
            </section>
            
            <nav
                style={{
                    display:'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >   
                <NavLink             
                    style={({ isActive }) => {
                        return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                        padding: "5px"
                        };
                    }}
                    to='/home'
                >
                    Home
                </NavLink>
                <NavLink             
                    style={({ isActive }) => {
                        return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                        padding: "5px"
                        };
                    }}
                    to='/events'
                >
                    Tour
                </NavLink>
                <NavLink             
                    style={({ isActive }) => {
                        return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                        padding: "5px"
                        };
                    }}
                    to='/shop'
                >
                    Shop
                </NavLink> 
                <NavLink             
                    style={({ isActive }) => {
                        return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                        padding: "5px"
                        };
                    }}
                    to='/timeline'
                >
                    Timeline
                </NavLink>
                <NavLink             
                    style={({ isActive }) => {
                        return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                        padding: "5px"
                        };
                    }}
                    to='/contact'
                >
                    Contact/Book
                </NavLink>
                <NavLink             
                    style={({ isActive }) => {
                        return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                        padding: "5px"
                        };
                    }}
                    to='/subscribe'
                >
                    Subscribe
                </NavLink> 
            </nav>
    </div>
      )
}

export default DefaultNav