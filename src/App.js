import React, { useState, useEffect } from "react";
import ChoiceBoard from "./Components/ChoiceBoard";
import Header from "./Components/Header";
import ScoreBoard from "./Components/ScoreBoard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  useEffect(() => {
    const getRandomChoice = () => {
      let choices = ["Rock", "Paper", "Scissor"];
      return choices[Math.floor(Math.random() * 3)];
    };
    return () => {
      setComputerChoice(getRandomChoice());
    };
  }, [userChoice]);

  const updateUserChoice = (choice) => {
    setUserChoice(choice);
  };

  const getWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      console.log("It's a Tie");
      // toast.success("It's a Tie");
    } else if (userChoice === "Rock") {
      if (computerChoice === "Scissor") {
        console.log("Rock Smashed Scissor! User Wins!");
      } else {
        console.log("Paper covers the Rock! Computer Wins.");
      }
    } else if (userChoice === "Paper") {
      if (computerChoice === "Rock") {
        console.log("Paper covered the rock, User Wins");
      } else {
        console.log("Scissor cuts the paper, Computer Wins!");
      }
    } else if (userChoice === "Scissor") {
      if (computerChoice === "Paper") {
        console.log("Scissor cuts the paper, User Wins!");
      } else {
        console.log("Rock smashes Scissor, Computer Wins");
      }
    }
  };
  getWinner(userChoice, computerChoice);
  console.log(`computer: ${computerChoice}, user: ${userChoice}`);
  return (
    <main className="md:container container px-3 mx-auto md:mx-auto my-24">
      <ToastContainer />
      <Header />
      <hr />
      <ScoreBoard computerChoice={computerChoice} userChoice={userChoice} />
      <ChoiceBoard updateUserChoice={updateUserChoice} />
    </main>
  );
}

export default App;
