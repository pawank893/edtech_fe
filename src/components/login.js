import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../assests/css/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      "username": this.state.email,
      "password": this.state.password
    } ;
    return fetch('http://www.localhost.com/api/login/', {
      method: 'POST',
      credentials: 'include',
      headers: {
                'Content-Type': 'application/json',
            },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {
          this.props.history.push('/question')
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
      <div className="login">
        <div className="text-center" id="public-header">
          <div id="logo-center">
            <img src="https://cdn.getvero.com/assets/logo-white-2dde46947ccac730f7d24ac88f4a08c8.svg" alt="Logo white"/>
          </div>
        </div>
        <div className="entry-page entry-single-column"  id="loginForm">
            <div className="form-box">
                <h4 className="center-text">
                    Sign in to your account
                </h4>

                <form className="new_user" id="new_user" onSubmit={this.handleSubmit}>
                    <meta name="csrf-token" content=""/>
                    <div className="flat-form-group">
                        <label className="small">Email</label>
                        <input className="form-control flat-input" type="text" id="email"  onChange={this.handleChange}/>
                    </div>
                    <div className="flat-form-group">
                        <label className="small">Password</label>
                        <input className="form-control flat-input" type="password" id="password"  onChange={this.handleChange}/>
                    </div>
                    <div className="form-group submit-btn">
                        <input type="submit" name="commit" value="Sign In" className="form-box-btn" disabled={!this.validateForm()}/>
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
