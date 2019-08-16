import React from "react";
import {
  Route,
  Redirect
} from "react-router-dom";
import { Consumer } from "../Context";

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Consumer>
            {
                context => (
                    <Route 
                        {...rest}
                        render={props => context.authUser ? (
                            <Component {...props} />
                        ): <Redirect to="/signin" />
                    }
                    />
                )
            }
        </Consumer>
    )
}

export default PrivateRoute;