import React from "react";

const ScoreBoard = ({ userChoice, computerChoice }) => {
  return (
    <div className="flex justify-between items-center mt-10">
      <div className="card border  w-80">
        <div className="card-body">
          <h2 className="card-title">User Choice</h2>
          <h1 className="text-7xl">{userChoice}</h1>
        </div>
      </div>
      <div className="card border  w-80">
        <div className="card-body">
          <h2 className="card-title">Computer Choice</h2>
          <h1 className="text-7xl">{computerChoice}</h1>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
