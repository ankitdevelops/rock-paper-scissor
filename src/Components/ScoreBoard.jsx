import React from "react";

const ScoreBoard = ({ userChoice, computerChoice }) => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="card border  w-80">
        <div className="card-body">
          <h2 className="card-title">Your Score</h2>
          <h1 className="text-7xl">10</h1>
        </div>
        <h1>{userChoice}</h1>
      </div>
      <div className="card border  w-80">
        <div className="card-body">
          <h2 className="card-title">Computer Score</h2>
          <h1 className="text-7xl">12</h1>
        </div>
        <h1>{computerChoice}</h1>
      </div>
    </div>
  );
};

export default ScoreBoard;
