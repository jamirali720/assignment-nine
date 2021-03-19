import React from 'react';
import {Link} from 'react-router-dom'
import  './Header.css'

const Header = () => {
    return (
      <div className="navLink link-items ">
            <nav class="navbar navbar-expand-lg">          
                <ul class="navbar-nav">               
                        <Link class="nav-link text-success" to="/home">Home</Link>
                        <Link class="nav-link text-success" to="/destination">Destination</Link>
                        <Link class="nav-link text-success" to="/blog">Blog</Link>
                        <Link class="nav-link text-success" to="/contact">Contact</Link>
                        <button className="btn btn-primary"> <Link class="nav-link text-white" to="/login">Login</Link></button>
                </ul>          
        </nav>
      </div>
    );
};

export default Header;