import React, { Component } from 'react';
import Cookies from 'js-cookie'; 
const Context = React.createContext(); //create context


export class Provider extends Component {

    state = {
        authUser: Cookies.getJSON('authUser') || null //get the authenticatedUser if it exist 
    }

    render() {
        const {authUser} = this.state.authUser;
        const value = {
            authUser,
            actions: {
                signIn: this.signIn
            }
        }

        return (
            <Context.Provider value={value}>
                {this.props.children} {/*allow child components have access to the context*/}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;

//the following is a HOC that automatically subscribe the passed component to the actions and data
export default (Component) => {
    return (props) => {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        )
    }
}