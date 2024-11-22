import { useState } from "react";

export const FunctionalTrafficLight = () => {

  const [colorIndex, setColorIndex] = useState(0)

  const nextStateButtonFunction = () => {
    colorIndex < 2 ? setColorIndex(colorIndex + 1) : setColorIndex(colorIndex - 2)
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}

        <div className={`circle black ${colorIndex === 0 ? 'red' : ''}`}></div>
        <div className={`circle black ${colorIndex === 1 ? 'yellow' : ''}`}></div>
        <div className={`circle black ${colorIndex === 2 ? 'green' : ''}`}></div>
      </div>
      <button className="next-state-button"
        onClick={() => nextStateButtonFunction()}
        >Next State</button>
    </div>
  );
};
