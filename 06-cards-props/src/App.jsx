import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
const datas = [
  {
    name: "Azula",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo in exercitationem est veniam molestias modi quidem at quam iure.",
    link: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/Avatar-The-Last-Airbender-Azula-.jpg?q=50&fit=crop&w=960&h=500",
  },
  {
    name: "Aang",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo in exercitationem est veniam molestias modi quidem at quam iure.",
    link: "https://upload.wikimedia.org/wikipedia/tr/7/77/Aang_karakteri.png",
  },
  {
    name: "Zuko",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias quo in exercitationem est veniam molestias modi quidem at quam iure.",
    link: "https://upload.wikimedia.org/wikipedia/en/3/3e/Prince_Zuko.jpg",
  },
];
function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {datas.map((data, i) => (
        <Card
          key={i}
          name={data.name}
          link={data.link}
          description={data.description}
        />
      ))}
    </div>
  );
}

export default App;
