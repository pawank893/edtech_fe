import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../assests/css/result.css";
import Cookies from 'js-cookie';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
        total_question: 0,
        total_answered: 0,
        correct_choices:0,
        wrong_choices:0
    };
  }

  componentDidMount = (event) => {
    return fetch('18.222.218.229/api/result/', {
      method: 'GET',
      credentials: 'include',
      headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
    }).then((response) => {
        if (response.status === 403) {
            throw new Error("User not logged in. Please login");
        } else if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Something went wrong');
        }
    }).then((responseJson) => {
          this.setData(responseJson)
    }).catch((error) =>{
        console.error(error);
      });
  }

  setData = (data) => {
      this.setState({
          total_question: data.total_question,
          total_answered: data.total_answered,
          correct_choices: data.correct_choices,
          wrong_choices: data.wrong_choices,
      })
  }

  render() {
    return (
      <div className="result">
        <div className="text-center" id="public-header">
          <div id="logo-center">
            <img src="https://cdn.getvero.com/assets/logo-white-2dde46947ccac730f7d24ac88f4a08c8.svg" alt="Logo white"/>
          </div>
        </div>
        <div className="entry-page entry-single-column" >
            <div className="form-box">
                <h4 className="center-text">
                    Test series result
                </h4>

                <div className="values">
                    <label className="result-label">Total question:</label>
                    <span className="result-value">{this.state.total_question}</span>
                </div>
                <div className="values">
                    <label className="result-label">Total answered:</label>
                    <span className="result-value">{this.state.total_answered}</span>
                </div>
                <div className="values">
                    <label className="result-label">Correct answer:</label>
                    <span className="result-value">{this.state.correct_choices}</span>
                </div>
                <div className="values">
                    <label className="result-label">Wrong answer:</label>
                    <span className="result-value">{this.state.wrong_choices}</span>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Result;
