import React, { useState } from "react";
import "./App.css";

function App() {
  const [maxNumber, setMaxNumber] = useState(10);
  const [minNumber, setMinNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const min = parseInt(minNumber);
  const max = parseInt(maxNumber);

  return (
    <div>
      <div>
        <p>
          random number : <span>{randomNumber}</span>
        </p>
      </div>
      <div>
        <div>
          <p>
            min :
            <input
              type="number"
              value={minNumber}
              onChange={(e) => setMinNumber(e.target.value)}
            />
          </p>
        </div>
        <div>
          <p>
            max :
            <input
              value={maxNumber}
              type="number"
              onChange={(e) => setMaxNumber(e.target.value)}
            />
          </p>
        </div>
        <button
          onClick={() =>
            setRandomNumber(Math.floor(Math.random() * (max - min + 1) + min))
          }
        >
          get random number
        </button>
      </div>
    </div>
  );
}

export default App;
