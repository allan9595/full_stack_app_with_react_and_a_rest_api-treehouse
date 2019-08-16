import React from 'react';
import { Link } from 'react-router-dom';


const Header = ({context}) => {
    return(
        <div className="header">
            <div className="bounds">
                <Link to="/" className="header--logo">
                <h1>
                    Courses       
                </h1>
                </Link>
                    {context.authUser ? (
                        <nav>
                            <Link to="/signout" className="signout">
                                <span className="a1">
                                    Sign Out
                                </span>
                            </Link>

                            <span>
                            Welcome,
                            {context.authUser.firstName}

                            {context.authUser.lastName} !
                            </span>
                        </nav>
                    ) : (
                        <nav>
                            <Link to="/signin" className="signin">
                                <span className="a1">
                                    Sign in
                                </span>
                            </Link>
                            <Link to="/signup" className="signin">
                                <span className="a1">   
                                Sign Up
                                </span>
                            </Link>
                        </nav>
                    )}
            </div>
        </div>
    )
}

export default Header;