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
    return fetch('http://localhost:8002/login/', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="login">
        <div class="text-center" id="public-header">
          <div id="logo-center">
            <img src="https://cdn.getvero.com/assets/logo-white-2dde46947ccac730f7d24ac88f4a08c8.svg" alt="Logo white"/>
          </div>
        </div>
        <div className="entry-page entry-single-column"  id="loginForm">
            <div className="form-box">
                <h4 className="center-text">
                    Sign in to your account
                </h4>

                <form class="new_user" id="new_user" accept-charset="UTF-8" onSubmit={this.handleSubmit}>
                    <meta name="csrf-token" content=""/>
                    <div class="flat-form-group">
                        <label class="small">Email</label>
                        <input class="form-control flat-input" type="text" value="" name="user[email]" id="user_email" value={this.state.email} onChange={this.handleChange}/>
                    </div>
                    <div class="flat-form-group">
                        <label class="small">Password</label>
                        <input class="form-control flat-input" type="password" name="user[password]" id="user_password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div class="form-group submit-btn">
                        <input type="submit" name="commit" value="Sign In" class="form-box-btn" disabled={!this.validateForm()}/>
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
