import React, { useState, useEffect } from "react";

const ChoiceBoard = ({ updateUserChoice }) => {
  const [choice, setChoice] = useState("");

  useEffect(() => {
    updateUserChoice(choice);
  }, [choice]);
  return (
    <div className="card    absolute bottom-10 left-1/2 -translate-x-2/4">
      <div className="card-body flex  flex-row gap-10">
        <div className="avatar indicator">
          <button
            className="w-28 h-28 rounded-full p-3 bg-slate-800 hover:border-2 ease-in-out duration-50"
            onClick={() => setChoice("Rock")}
          >
            <img
              src="https://cdn.pixabay.com/photo/2014/12/22/00/03/rock-576667_960_720.png"
              alt="rock"
            />
          </button>
        </div>
        <div className="avatar indicator">
          <button
            className="w-28 h-28 rounded-full p-3 bg-slate-800  hover:border-2 ease-in-out duration-50"
            onClick={() => setChoice("Paper")}
          >
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/16/26/toilet-paper-150912_960_720.png"
              alt="rock"
            />
          </button>
        </div>
        <div className="avatar indicator">
          <button
            className="w-28 h-28 rounded-full p-3 bg-slate-800  hover:border-2 ease-in-out duration-50"
            onClick={() => setChoice("Scissor")}
          >
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/13/28/scissors-147115_960_720.png"
              alt="rock"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoiceBoard;
