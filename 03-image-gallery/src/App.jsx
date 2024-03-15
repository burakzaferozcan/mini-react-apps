import "./App.css";
import React from "react";
import Images from "./images";
import { useState } from "react";
function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);
  return (
    <div className="App">
      <div>
        <h1>Image Gallery</h1>
        <img
          src={selectedImg}
          alt="selected image"
          className="selected"
          style={{ padding: "5px", cursor: "pointer", borderRadius: "10px" }}
        />
      </div>
      <div>
        <h2>Click Photo</h2>
        {Images.map((img, i) => (
          <img
            style={{ padding: "5px", cursor: "pointer", borderRadius: "10px" }}
            onClick={() => setSelectedImg(img)}
            src={img}
            alt="image"
            key={i}
            width={100}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
