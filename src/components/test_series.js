import React, {Component} from 'react';
import '../assests/css/test-series.css';
import Cookies from 'js-cookie';
import Header from './header';

export default class TestSeriesPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
          test_series: []
      };
    }

    componentDidMount = (event) => {
            Cookies.remove("result_page")
      return fetch('/api/test-series/', {
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
      return fetch('/api/test-series/', {
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
      <div className="testSeries-container">
        <div className="header-div">
          <Header />
        </div>
        <div className="test-entry-page test-entry-single-column" >
            <h4 className="select-test">
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
