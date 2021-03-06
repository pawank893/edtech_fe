import React, {Component} from 'react'
import '../assests/css/question_page.css'
import Cookies from 'js-cookie';
import ReactHtmlParser from 'react-html-parser';

export default class QuestionPage extends Component {

    constructor(props) {
      super(props);
      this.state = {
          questionNo: 0,
          topic: "",
          question: "",
          options: [],
          image:"",
          firstQuestionPage: false
      };
    }

    getQuestion = (data) => {
        if(Cookies.get("result_page")) {
            this.props.history.push('/result');
        } else {
            return fetch('/api/question/', {
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
                } else if (response.status === 204) {
                    this.props.history.push('/result')
                } else if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong');
                }
            }).then((responseJson) => {
                  this.setData(responseJson)
            }).catch((error) =>{
                if (error.message === "User not logged in. Please login") {
                    this.props.history.push('/login')
                }
                console.error(error);
            });
         }
 }
    setData = (data) => {
        this.setState({
            topic: data.topic,
            question: data.question,
            options: data.options,
            image: data.image,
            questionNo: data.question_no,
            firstQuestionPage: data.question_no === 1
        })
        data.options.map((d, idx) => {
            if(d['answered']) {
                this.setState({
                    answer:d.id
                })
            }
        })
    }

    isFirstQuestionPage = () => {
        // debugger;
        // return this.state.questionNo == 1
        this.setState({ firstQuestionPage: this.state.questionNo === 1});
    }

    nextQuestion = event => {
      event.preventDefault();
      const data = {
        "action":"next",
        "answer": this.state.answer
      } ;
      this.getQuestion(data);
      this.setState({ answer: null});
    }

    prevQuestion = event => {
      event.preventDefault();
      console.log(this.state.questionNo);
      const data = {
        "action":"prev",
        "answer": this.state.answer
      } ;
      this.getQuestion(data)
      this.setState({ answer: null});
    }

    componentDidMount() {
        const data = {
          "q_no":this.state.questionNo
        } ;
        this.getQuestion(data);

    }

    handleOnChange = (e) => {
        // e.preventDefault();
        console.log('selected option', e.target.value);
        this.setState({ answer: e.target.value});
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
                <span className="questionContent supsub">
                    {ReactHtmlParser(this.state.question)}
                </span>
            </div>
            <div className="answerContent">
                <div className="optionsDiagram">
                    <div className="options">
                        {this.state.options.map((d, idx) => {
                            return (
                                <label className="container" key={d.id} >  {d.type === "Image" ? <img src={ d.choice } alt="Diagram" className="question-image"/> : <span>{ReactHtmlParser(d.choice)}</span>}
                                    <input type="radio" name="radio" key={d.id} value={ d.id } checked={d.id == this.state.answer} onChange={(e) => this.handleOnChange(e)}/>
                                    <span className="checkmark"></span>
                                </label>
                            )
                        })}
                    </div>
                    {
                      this.state.image ?
                      <div className="diagram">
                          <img src={ this.state.image } alt="Diagram" className="question-image"/>
                      </div>: null
                  }
                </div>
            </div>
            <div className="navigation">
                <div className="prev">
                    <div className="form-group submit-btn" onClick={this.prevQuestion}>
                        <input type="submit" name="commit" value="Prev" className={ this.state.firstQuestionPage ? "form-box-btn hiddenElem" : "form-box-btn"}  disabled={this.state.firstQuestionPage}/>
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
