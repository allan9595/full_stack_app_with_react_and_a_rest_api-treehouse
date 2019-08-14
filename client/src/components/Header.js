import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="bounds">
            <h1 className="header--logo">Courses</h1>
            
            <NavLink to="/" className="signout ">        
                <nav><span className="a1">Sign Out</span></nav>                
            </NavLink>
            <nav>
                <span>
                    Welcome Joe Smith!
                </span>
            </nav>
            </div>
      </div>
    )
}

export default Header;