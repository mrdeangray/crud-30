import React, { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthProvider";
// import { Link } from "react-router-dom";
import CopyingAnAngle from "../assets/CopyingAnAngle.svg";
import CopyingASegment from "../assets/CopyingASegment.svg";
import PerpBisector from "../assets/PerpBisectorSoccerFieldToPlayground.svg";
import { Link, useNavigate } from "react-router-dom";
import Demo from "./Confetti";

const Home = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currCount, setCurrCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const goal = 5;

  const questions = [
    {
      id: 0,
      image: CopyingASegment,
      question: "uno",
      choices: ["one", "two", "three", "four"],
      answer: "one",
    },
    {
      id: 1,
      image: CopyingAnAngle,
      question: "dos",
      choices: ["one", "two", "three", "four"],
      answer: "two",
    },
    {
      id: 2,
      image: PerpBisector,
      question: "tres",
      choices: ["one", "two", "three", "four"],
      answer: "three",
    },
  ];
  // const { currUser, handleSignIn, handleSignOut } = useContext(AuthContext);

  const handleNext = () => {
    if (currCount < questions.length - 1) {
      let count = currCount + 1;
      setCurrCount(count);
      // console.log(currCount);
    } else {
      setCurrCount(0);
    }
  };

  const checkAnswer = (answer) => {
    // console.log(questions[currCount].question);
    // console.log(answer);
    let tempScore = score;
    if (answer === questions[currCount].answer) {
      // console.log("CORRECT");
      tempScore = score + 1;
      setScore(tempScore);
      handleNext();
    } else {
      tempScore = score - 1;
      setScore(tempScore);
      // console.log("INCORRECT");
    }
    // setScore(tempScore);
    console.log(tempScore);
    if (score >= goal - 1) {
      // setIsUpdating(true);
      setIsVisible(true);
      setTimeout(() => {
        // setIsUpdating(false);

        navigate(`/drawingactivity`);
      }, 5000);
    }
  };

  return (
    <div className="home">
      <button onClick={() => setIsVisible(!isVisible)}>Fire</button>
      {isVisible && <Demo />}
      {/* <h1>Dean</h1> */}
      <h1>Score: {score}</h1>
      <h4>index: {questions[currCount].id}</h4>
      <h1>{questions[currCount].question}</h1>
      <img src={questions[currCount].image} alt="" />
      <br />
      {questions[currCount].choices.map((el) => {
        return (
          <button key={el} onClick={() => checkAnswer(el)}>
            {el}
          </button>
        );
      })}
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Home;
