import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { userContext } from '../../App';
import  './Header.css'

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext)
  console.log(loggedInUser);
    return (
      <div className="navLink link-items ">
            <nav className="navbar navbar-expand-lg">          
                <ul className="navbar-nav">               
                        <Link className="nav-link text-success" to="/home">Home</Link>
                        <Link className="nav-link text-success" to="/destination">Destination</Link>
                        <Link className="nav-link text-success" to="/blog">Blog</Link>
                        <Link className="nav-link text-success" to="/contact">Contact</Link>
                        <button className="btn btn-primary"> <Link className="nav-link text-white" to="/login">Login</Link></button>
                        <h4>{loggedInUser.displayName}</h4>
                       
                </ul>          
        </nav>
      </div>
    );
};

export default Header;