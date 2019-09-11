import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ logout, currentUser }) => {

    const links = (
        <>
            <li>
                <NavLink className="nav-li" to="/login">Log In</NavLink>
            </li>
            <li>
                <NavLink className="nav-li" to="/register">Register</NavLink>
            </li>
        </>
    );

    const authLinks = (
        <>
            <li>
                <NavLink className="nav-li" to="/profile">Profile</NavLink>
            </li>
            <li>
                <NavLink className="nav-li" to="/events">Events</NavLink>
            </li>
            <li>
                <NavLink className="nav-li" to="/items">Items</NavLink>
            </li>
            <li>
                <span className="nav-li" onClick={logout} style={{ cursor: 'pointer' }}>Logout</span>
            </li>
        </>
    );

    return (
        <nav>
            <div className="nav-items">
                <Link className="nav-li" to="/"><h1>ClothingSwap</h1></Link>
                { currentUser ? authLinks : links }
            </div>
        </nav>
    )

};

export default NavBar;
