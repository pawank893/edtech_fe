import React, {Component} from 'react'
import Next from '../assests/images/next.jpeg'
import Prev from '../assests/images/prev.jpeg'
import Info from '../assests/images/prev.jpeg'
import Diagram from '../assests/images/homePageImage.jpeg'
import '../assests/css/question_page.css'
import Cookies from 'js-cookie';

export default class QuestionPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
          questionNo: 0,
          topic: "",
          question: "",
          options: [],
          image:""
      };
    }

    getQuestion = (data) => {
        fetch('http://www.localhost.com/api/question/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.get('csrftoken')
                    },
            body: JSON.stringify(data),
        }).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then((responseJson) => {
              this.setData(responseJson)
        }).catch((error) =>{
            this.props.history.push('/login')
            console.error(error);
        });
     }

    setData = (data) => {
        this.setState({
            topic: data.topic,
            question: data.question,
            options: data.options,
            image: data.image,
            questionNo: data.question_no
        })
    }

    isFirstQuestionPage = () => {
        return this.state.questionNo == 1
    }

    nextQuestion = event => {
      event.preventDefault();
      const data = {
        "action":"next"
      } ;
      this.getQuestion(data)
    }

    prevQuestion = event => {
      event.preventDefault();
      console.log(this.state.questionNo);
      const data = {
        "action":"prev"
      } ;
      this.getQuestion(data)
    }

    componentDidMount() {
        const data = {
          "q_no":this.state.questionNo
        } ;
        this.getQuestion(data)
      }

  render () {
    return (
        <div className="questionContainer">
            <div className="questionHeaderBar">
                <div className="header-section topicName">{ this.state.topic }</div>
                <div className="header-section questionNumber"> Q. No. { this.state.questionNo } </div>
                <div className="header-section help">
                    <div className="button">
                        <span>?</span>
                    </div>
                </div>
            </div>
            {/*<div className="hintExempt">
                <div className="button hint">HINT</div>
                <div className="button exempt">EXEMPT</div>
                <div className="ghost-view"/>
            </div>*/}
            <div className="questionTextContainer">
                <span className="questionContent">
                    { this.state.question }
                </span>
            </div>
            <div className="answerContent">
                <div className="optionsDiagram">
                    <div className="options">
                        <label className="container">{ this.state.options[0] }
                          <input type="radio" name="radio" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">{ this.state.options[1] }
                          <input type="radio" name="radio" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">{ this.state.options[2] }
                          <input type="radio" name="radio" />
                          <span className="checkmark"></span>
                        </label>
                        <label className="container">{ this.state.options[3] }
                          <input type="radio" name="radio" />
                          <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className="diagram">
                        <img src={ this.state.image } alt="Diagram" className="question-image"/>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <div className="prev">
                    <div className="form-group submit-btn" onClick={this.prevQuestion}>
                        <input type="submit" name="commit" value="Prev" className="form-box-btn" disabled={this.isFirstQuestionPage()}/>
                    </div>
                </div>
                <div className="next">
                    <div className="form-group submit-btn" onClick={this.nextQuestion}>
                        <input type="submit" name="commit" value="Next" className="form-box-btn" />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
