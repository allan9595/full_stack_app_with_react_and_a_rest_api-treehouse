import React, { Component } from 'react'
import {Link} from 'react-router-dom';
class UserSignIn extends Component {

    state = {
        emailAddress: "",
        password: ""
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const context = this.props.context;
        context.actions.signIn(
            this.state.emailAddress, 
            this.state.password
        ).then((user) => {
            if(user.status === 200){
                this.props.history.push('/courses/create');
            }
        }).catch((e) => {
            console.log("login unsuccessful")
        });

    }

    handleCancel = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <hr />
                <div className="bounds">
                    <div className="grid-33 centered signin">
                    <h1>Sign In</h1>
                    <div>
                        <form>
                            <div>
                                <input 
                                    id="emailAddress" 
                                    name="emailAddress" 
                                    type="text" 
                                    className="" 
                                    placeholder="Email Address" 
                                    onChange={this.handleChange}
                                    value={this.state.emailAddress}
                                />
                                </div>
                                <div>
                                    <input 
                                        id="password" 
                                        name="password" 
                                        type="password" 
                                        className="" 
                                        placeholder="Password" 
                                        onChange={this.handleChange}
                                        value={this.state.password}
                                    />
                                </div>
                                <div className="grid-100 pad-bottom">
                                    <button 
                                        className="button" 
                                        type="submit"
                                        onClick={this.handleSubmit}
                                    >
                                        Sign In
                                    </button>
                                    <button 
                                        className="button button-secondary" 
                                        onClick={this.handleCancel}
                                    >
                                        Cancel
                                    </button>
                                </div>
                        </form>
                    </div>
                    <p>&nbsp;</p>
                    <p>Don't have a user account? 
                        Click 
                        &nbsp;
                    <Link to="/signup" className="a1">
                        here 
                    </Link>
                        &nbsp;
                        to sign in!
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSignIn;