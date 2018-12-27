import React, {Component} from 'react';
import '../assests/css/test-series.css';
import Cookies from 'js-cookie';

export default class TestSeriesPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
          test_series: []
      };
    }

    componentDidMount = (event) => {
      return fetch('http://www.localhost.com/api/test-series/', {
        method: 'GET',
        credentials: 'include',
        headers: {
                  'Content-Type': 'application/json',
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

    startTestSeries = (data) => {
      return fetch('http://www.localhost.com/api/test-series/', {
        method: 'POST',
        credentials: 'include',
        headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': Cookies.get('csrftoken')
              },
        body: JSON.stringify(data),
      }).then((response) => {
          if (response.status === 403) {
              throw new Error("User not logged in. Please login");
          } else if (response.status === 200) {
              this.props.history.push('/question')
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
            test_series: data.test_series
        })
    }

    handleOnChange = (e) => {
        const data = {
          "ts_id":e.currentTarget.id
        };
        this.startTestSeries(data);

    }

  render () {

    return (
      <div className="testSeries">
        <div className="text-center" id="public-header">
          <div id="logo-center">
            <img src="https://cdn.getvero.com/assets/logo-white-2dde46947ccac730f7d24ac88f4a08c8.svg" alt="Logo white"/>
          </div>
        </div>
        <div className="entry-page entry-single-column" >
            <h4 className="center-text">
                Select any 1 test series
            </h4>
            <div className="testSeriesCardBox">
                {this.state.test_series.map((d, idx) => {
                    return (
                        <div className="testSeriesCard" id={d.id} key={d.id} value={ d.id } onClick={(e) => this.handleOnChange(e)}>
                            <div className="">
                                <span className="testSeriesName">{d.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

      </div>
    );
  }
}
