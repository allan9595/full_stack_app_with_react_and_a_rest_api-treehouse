import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="bounds">
            <h1 className="header--logo">Courses</h1>
                <NavLink to="/" className="signout">
                    <nav>
                        <span>
                            Welcome Joe Smith!
                        </span>
                        <a>
                            Sign Out
                        </a>
                    </nav>
                </NavLink>
            </div>
      </div>
    )
}

export default Header;