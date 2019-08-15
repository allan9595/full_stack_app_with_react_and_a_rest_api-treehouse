import React from 'react';
import { NavLink } from 'react-router-dom';
import { Consumer } from '../Context';

const Header = () => {
    return(
        <Consumer>
            {
                context => 
                    (
                        context.authUser ? (
                            <div className="header">
                                <div className="bounds">
                                    <h1 className="header--logo">Courses</h1>
                                        <NavLink to="/" className="signout">        
                                            <nav>
                                                <span className="a1">
                                                    Sign Out
                                                </span>
                                            </nav>                
                                        </NavLink>
                                    <nav>
                                        <span>
                                            Welcome,
                                            {context.authUser.firstName}

                                            {context.authUser.lastName} !
                                        </span>
                                    </nav>
                                </div>
                            </div>
                    ): (
                        <div className="header">
                            <div className="bounds">
                                <h1 className="header--logo">Courses</h1>
                                    <NavLink to="/signin" className="signin">        
                                        <nav>
                                            <span className="a1">
                                                Sign In
                                            </span>
                                        </nav>                
                                    </NavLink>
                                <nav>
                                    <span>
                                        <NavLink to="/signup" className="signup">        
                                            <nav>
                                                <span className="a1">
                                                    Sign Up
                                                </span>
                                            </nav>                
                                        </NavLink>
                                    </span>
                                </nav>
                            </div>
                        </div>
                    )
                )     
            }   
      </Consumer>
    )
}

export default Header;