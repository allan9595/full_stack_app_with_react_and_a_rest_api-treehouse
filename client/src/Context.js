import React, { Component } from 'react';
import Cookies from 'js-cookie'; 
import axios from 'axios';

const Context = React.createContext(); //create context

export class Provider extends Component {

    state = {
        authUser: Cookies.getJSON('authUser') || "", //get the authenticatedUser if it exist 
        encodedCredentials: Cookies.getJSON('encodedCredentials') || ''
    }

    render() {
        const authUser = this.state.authUser;
        const encodedCredentials = this.state.encodedCredentials;
        const value = {
            authUser,
            encodedCredentials,
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
        console.log(user.data)
        this.setState({
            authUser: user.data,
            encodedCredentials: encodedCredentials
        })
        Cookies.set("authUser", JSON.stringify(user.data), { expires: 1 });
        Cookies.set("encodedCredentials", JSON.stringify(encodedCredentials));
        return user;
    }

    signOut = () => {
        this.setState({
            authUser: "", //reset the authUser
            encodedCredentials: ""
        })
        Cookies.remove('authUser'); //remove the cookies
        Cookies.remove('encodedCredentials');
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