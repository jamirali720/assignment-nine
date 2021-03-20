import React from 'react';
import {Link} from 'react-router-dom'
import  './Header.css'

const Header = () => {
    return (
      <div className="navLink link-items ">
            <nav className="navbar navbar-expand-lg">          
                <ul className="navbar-nav">               
                        <Link className="nav-link text-success" to="/home">Home</Link>
                        <Link className="nav-link text-success" to="/destination">Destination</Link>
                        <Link className="nav-link text-success" to="/blog">Blog</Link>
                        <Link className="nav-link text-success" to="/contact">Contact</Link>
                        <button className="btn btn-primary"> <Link className="nav-link text-white" to="/login">Login</Link></button>
                </ul>          
        </nav>
      </div>
    );
};

export default Header;