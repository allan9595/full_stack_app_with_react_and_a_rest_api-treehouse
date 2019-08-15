import React, { Component } from 'react';
import Cookies from 'js-cookie'; 
import axios from 'axios';

const Context = React.createContext(); //create context

export class Provider extends Component {

    state = {
        authUser: Cookies.getJSON('authUser') || "" //get the authenticatedUser if it exist 
    }

    render() {
        const {authUser} = this.state.authUser;
        const value = {
            authUser,
            actions: {
                signIn: this.signIn,
                signOut: this.signOut
            }
        }

        return (
            <Context.Provider value={value}>
                {this.props.children} {/*allow child components have access to the context*/}
            </Context.Provider>
        )
    }

    signIn = async (emailAddress, password) => {
        const encodedCredentials = btoa(`${emailAddress}:${password}`);
        const user = await axios.get('http://localhost:5000/api/users', {
            headers: {
                "Authorization": `Basic ${encodedCredentials}`,
                "Content-Type": "application/json; charset=utf-8"
            }
        })
        return user;
    }

    signOut = () => {
        this.setState({
            authUser: "" //reset the authUser
        })
        Cookies.remove('authUser'); //remove the cookies
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