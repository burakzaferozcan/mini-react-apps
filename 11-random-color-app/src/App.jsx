import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [hex, setHex] = useState();

  const randomLinearGradientHex = () => {
    const randomHexValue1 = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
    const randomHexValue2 = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
    const deg = Math.floor(Math.random() * 360);
    const gradientColor = `linear-gradient(${deg}deg, ${randomHexValue1}, ${randomHexValue2})`;
    setHex(gradientColor);
  };
  const randomRadialGradientHex = () => {
    const randomHexValue1 = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
    const randomHexValue2 = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
    const gradientColor = `radial-gradient(${randomHexValue1}, ${randomHexValue2})`;
    setHex(gradientColor);
  };
  const randomColor = () => {
    const randomHexValue = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;

    setHex(randomHexValue);
  };
  useEffect(() => {
    document.body.style.background = hex;
  }, [hex]);

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <p>{hex}</p>
      {hex && (
        <button onClick={() => navigator.clipboard.writeText(hex)}>
          copy the color
        </button>
      )}

      <button onClick={() => randomLinearGradientHex()}>
        click for new linear-gradient color
      </button>
      <button onClick={() => randomRadialGradientHex()}>
        click for new radial-gradient color
      </button>
      <button onClick={() => randomColor()}>click for new color</button>
    </div>
  );
}

export default App;
