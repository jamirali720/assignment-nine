import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { userContext } from '../../App';
import  './Header.css'

const Header = () => {
  const [loggedInUser] = useContext(userContext)
  
    return (
      <div className="navLink link-items ">          
            <nav className="navbar navbar-expand-lg">          
                <ul className="navbar-nav">               
                        <Link className="nav-link text-success" to="/home">Home</Link>
                        <Link className="nav-link text-success" to="/destination">Destination</Link>
                        <Link className="nav-link text-success" to="/blog">Blog</Link>
                        <Link className="nav-link text-success" to="/contact">Contact</Link>
                        <button className="btn btn-primary"> <Link className="nav-link text-white" to="/login">Login</Link></button>
                        <h4 style={{color: 'green', marginLeft:'10px'}}> welcome ! {loggedInUser.name}</h4>
                    
                </ul>          
        </nav>
        <h1 style={{color:'green', marginTop:'30px'}}>CITY TRANSPORT</h1>
      </div>
    );
};

export default Header;