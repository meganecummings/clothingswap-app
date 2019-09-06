import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ logout, currentUser }) => {

    const links = (
        <div className="nav-items">
            <li>
                <NavLink className="nav-li" to="/login">Log In</NavLink>
            </li>
            <li>
                <NavLink className="nav-li" to="/register">Register</NavLink>
            </li>
        </div>
    );

    const authLinks = (
        <div className="nav-items">
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
        </div>
    );

    return (
        <nav>
            <div className="logo">
                <Link className="nav-li" to="/"><h1>haute swap</h1></Link>
            </div>
            { currentUser ? authLinks : links }
        </nav>
    )

};

export default NavBar;
