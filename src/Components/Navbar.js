import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navbar.css'; // Import the CSS file for styling

// import logo from '../img/logo.jpg'

const Navbar = () => {
    const token = localStorage.getItem('token');

    const RenderNavbar = () => {
        if (token) {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/allOrders">Orders</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout">Logout</NavLink>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                </>
            );
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <NavLink className="navbar-brand" to="/">
                {/* <img className='logo' src={logo} alt='logo' /> */}
                <b>E-Website</b>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <RenderNavbar />
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
