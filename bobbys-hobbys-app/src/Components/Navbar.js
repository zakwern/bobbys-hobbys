import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SideNav from './SideNav'

const Navbar = () => {

    return (
        <div>
            <nav className="nav-wrapper indigo accent-4">
                <div className="container">
                    <Link to='/' className="brand-logo">Bobby's Hobbys</Link>
                    <ul className="hide-on-large-only"> 
                        <SideNav />
                    </ul>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to='/'>Inventory</NavLink></li>
                        <li><NavLink to='/'>Contact Us</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar