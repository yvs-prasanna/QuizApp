import { Component } from "react";

import Cookies from "js-cookie";

import "./index.css";

const Questions = [
  {
    id: 1,
    question: "What is the National Animal of India ?",
    options: ["Elephant", "Lion", "Tiger", "Cheetah"],
    answer: "Tiger",
  },
  {
    id: 2,
    question: "What is the National Bird of India ?",
    options: ["Peacock", "Eagle", "Hen", "Pigeon"],
    answer: "Peacock",
  },
  {
    id: 3,
    question: "What is the National Fruit Of India ?",
    options: ["Apple", "Orange", "Grapes", "Mango"],
    answer: "Mango",
  },
  {
    id: 4,
    question: "What is the National Flower of India ?",
    options: ["Lotus", "Rose", "Jasmine", "CauliFlower"],
    answer: "Lotus",
  },
  {
    id: 5,
    question: "What is the capital Of India ?",
    options: ["Hyderabad", "Delhi", "Mumbai", "kolkatta"],
    answer: "Delhi",
  },
];

const correctSound = new Audio("/sounds/correct.mp3");
const wrongSound = new Audio("/sounds/wrong.mp3");

class EachQuestion extends Component {
  state = {
    activeId: 0,
    selectedOption: "",
    isShow: false,
    isCorrect: false,
    messege: "",
    buttonText: "Submit",
    isCompleted: false,
  };
  c;

  onChangeSelectedOption = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  onClickCheckAnswer = () => {
    const { activeId, selectedOption, buttonText } = this.state;
    const name = Cookies.get("Username");
    if (buttonText === "Submit") {
      const { answer } = Questions[activeId];
      if (selectedOption === answer) {
        this.setState({
          messege: `Congratulations ${name} It's Correct .`,
          isShow: true,
          buttonText: "Next Question",
          isCorrect: true,
        });
        correctSound.play();
      } else if (selectedOption === "") {
        this.setState({
          messege: `${name} Please Select Some Option`,
          isShow: true,
        });
      } else {
        this.setState({
          messege: `${name} , It is Wrong Answer Please try Again.`,
          isShow: true,
          buttonText: "Try Again",
          selectedOption: "",
        });
        wrongSound.play();
      }
    } else if (buttonText === "Next Question") {
      if (activeId + 1 === Questions.length) {
        this.setState({
          isCompleted: true,
          isCorrect: true,
          buttonText: `Test Completed Thank You ${name}`,
        });
      } else {
        this.setState((p) => ({ activeId: p.activeId + 1 }));
        this.setState({
          buttonText: "Submit",
          isShow: false,
          selectedOption: "",
          isCorrect: false,
        });
      }
    } else {
      this.setState({
        buttonText: "Submit",
        isShow: false,
        isCorrect: false,
      });
    }
  };

  render() {
    const { activeId, messege, isShow, buttonText, isCorrect, selectedOption } =
      this.state;
    const { id, question, options } = Questions[activeId];
    const messegeClassname = isCorrect ? "correct-message" : "wrong-messege";
    return (
      <div className="Question-Page">
        <div className="Question-Block">
          <p className="questionNo">Question no.{id}</p>
          <h1>
            {id}. {question}
          </h1>
          <div className="options-block">
            {options.map((each) => (
              <div className="options-with-label">
                <input
                  name={question}
                  id={each}
                  type="radio"
                  value={each}
                  checked={selectedOption === each}
                  onChange={this.onChangeSelectedOption}
                />
                <label className="option-label" htmlFor={each}>
                  {each}
                </label>
              </div>
            ))}
            {!isShow && (
              <p className="result">
                Hello this is prasanna And this project is completely made by me
              </p>
            )}
            {isShow && <p className={messegeClassname}>{messege}</p>}
            <button
              onClick={this.onClickCheckAnswer}
              className="submit-button-in-EachQuestion"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EachQuestion;
