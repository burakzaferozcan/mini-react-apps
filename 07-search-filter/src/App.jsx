import { useState } from "react";
import "./App.css";
import Data from "./Data.json";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <h1>Kurlar Vadisi Konsey</h1>
      <div className="inputContainer">
        <input
          type="text"
          className="search"
          placeholder="Konsey Üyesi Girin"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="data">
        {Data.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.title
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((val) => {
          return (
            <div className="profile" key={val.id}>
              <img src={val.image} alt="" />
              <h2>{val.title}</h2>
              <p >{val.Description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
