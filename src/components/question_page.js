import React, {Component} from 'react'
import Next from '../assests/images/next.jpeg'
import Prev from '../assests/images/prev.jpeg'
import Info from '../assests/images/prev.jpeg'
import Diagram from '../assests/images/homePageImage.jpeg'
import '../assests/css/question_page.css'

export default class QuestionPage extends Component {

  render () {
    return (
        <div className="questionContainer">
            <div className="questionHeaderBar">
                <div className="header-section topicName">Topic</div>
                <div className="header-section questionNumber"> 3 </div>
                <div className="header-section timer">12:34 hours</div>
            </div>
            <div className="hintExempt">
                <div className="button hint">HINT</div>
                <div className="button exempt">EXEMPT</div>
                <div className="ghost-view"/>
            </div>
            <div className="questionTextContainer">
                <span className="questionContent">
                    question question question question question question question
                    question question question question question question question question question question
                    question question question question question
                </span>
            </div>
            <div className="answerContent">
                <div className="optionsDiagram">
                    <div className="options">
                        <label class="container">One
                          <input type="radio" checked="checked" name="radio" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Two
                          <input type="radio" name="radio" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Three
                          <input type="radio" name="radio" />
                          <span class="checkmark"></span>
                        </label>
                        <label class="container">Four
                          <input type="radio" name="radio" />
                          <span class="checkmark"></span>
                        </label>
                    </div>
                    <div className="diagram">
                        <img src={Diagram} alt="Diagram" className="question-image"/>
                    </div>
                </div>
            </div>
            <div className="questionFooter">
                <div className="info">
                    <div className="button">
                        <span>?</span>
                    </div>
                </div>
                <div className="navigation">
                    <div className="prev">
                        <div className="button">
                            <span>PREVIOUS</span>
                        </div>
                    </div>
                    <div className="next">
                        <div className="button">
                            <span>NEXT</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
