import React, { Component } from 'react'
import axios from 'axios';
class UserSignUp extends Component {
    
    state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
      confirmPassword: ""
    }

    handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
          [name]: value
      })
    }

    handleCancel = () => {
      this.props.history.push('/');
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const {
        firstName,
        lastName,
        emailAddress,
        password
      } = this.state;

      axios.post('http://localhost:5000/api/users', {firstName, lastName, emailAddress,password})
        .then(() => {
          console.log('user created success')
        }).catch((e) => {
          console.log(e)
        })
    }

    render() {
        return (
          <div className="bounds">
            <div className="grid-33 centered signin">
              <h1>Sign Up</h1>
              <div>
                <form>
                    <div>
                      <input 
                        id="firstName" 
                        name="firstName" 
                        type="text" 
                        className="" 
                        placeholder="First Name" 
                        onChange= {this.handleChange}
                        value={this.state.firstName}
                      />
                    </div>
                    <div>
                      <input 
                        id="lastName" 
                        name="lastName" 
                        type="text" 
                        className="" 
                        placeholder="Last Name" 
                        onChange= {this.handleChange}
                        value={this.state.lastName}
                      />
                    </div>
                    <div>
                      <input 
                        id="emailAddress" 
                        name="emailAddress" 
                        type="text" 
                        className="" 
                        placeholder="Email Address" 
                        onChange= {this.handleChange}
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
                            onChange= {this.handleChange}
                            value={this.state.password}
                        />
                    </div>
                    <div>
                        <input 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        type="password" 
                        className="" 
                        placeholder="Confirm Password"
                        onChange= {this.handleChange}
                        value={this.state.confirmPassword}
                      />
                    </div>
                    <div className="grid-100 pad-bottom">
                        <button 
                            className="button" 
                            type="submit"
                            onClick={this.handleSubmit}
                        >
                            Sign Up
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
                <p>Already have a user account? <a href="">Click here</a> to sign in!</p>
            </div>
        </div>
        )
    }
}

export default UserSignUp;