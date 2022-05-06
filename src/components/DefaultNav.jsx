import React from 'react'
import { Link, Outlet} from 'react-router-dom';
import Footer from './Footer';
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
                <Link to='/home'>Home</Link> |{" "}
                <Link to='/events'>Tour</Link> |{" "}
                <Link to='/shop'>Shop</Link> |{" "}
                <Link to='/timeline'>Timeline</Link> |{" "}
                <Link to='/contact'>Contact/Book</Link> |{" "}
                <Link to='/subscibe'>Subscribe</Link>
            </nav>
                <Outlet/>
                <Footer/>
    </div>
      )
}

export default DefaultNav