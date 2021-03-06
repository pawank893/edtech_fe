import React, { Component } from "react";
import Header from './header';
import "../assests/css/login.css";
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: ""
    };
  }

  componentDidMount = () => {
      Cookies.remove("result_page")
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
    return fetch('/api/signup/', {
      method: 'POST',
      credentials: 'include',
      headers: {
                'Content-Type': 'application/json',
            },
      body: JSON.stringify(data),
    }).then((response) => response.json())
      .then((responseJson) => {
          this.props.history.push('/test-series')
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
      <div className="login">
      <div className="header-div">
        <Header />
      </div>
        <div className="text-center" id="public-header">
          <div id="logo-center">
            <img src="https://cdn.getvero.com/assets/logo-white-2dde46947ccac730f7d24ac88f4a08c8.svg" alt="Logo white"/>
          </div>
        </div>
        <div className="entry-page entry-single-column"  id="loginForm">
            <div className="form-box">
                <h4 className="center-text">
                    Sign up to participate in test series
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
                    <div className="form-group submit-btn sign-in-button">
                        <input type="submit" name="commit" value="Sign Up" className="form-box-btn sign-in-input" disabled={!this.validateForm()}/>
                    </div>
                    <div className="sign-up-link text-center">
                        <Link to="/login">
                            <span>Already have an account? Login here</span>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

export default Signup;
