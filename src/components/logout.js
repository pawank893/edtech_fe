import React, { Component } from "react";
import Cookies from 'js-cookie';

class Logout extends Component {


  handleLogout = () => {
    return fetch('/api/logout/', {
      method: 'POST',
      credentials: 'include',
      headers: {
                'Content-Type': 'application/json',
            }
    }).then((response) => response.json())
      .then((responseJson) => {
          Cookies.remove('csrftoken')
          this.props.history.push('/')
      })
      .catch((error) =>{
        console.error(error);
      });
  }
  componentDidMount() {
    this.handleLogout();
  }

  render() {
    return (
      <div className="login">
      </div>
    );
  }
}

export default Logout;
