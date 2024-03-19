import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import City from "./components/City";
function App() {
  const key = "9edc4f5d6d5786425d5569b098c155f8";
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("ankara");

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getApi();
  }, [search]);
  return (
    <div className="flex flex-col justify-center text-center">
      <h1 className="text-2xl">weather app</h1>
      <div>
        <input
          className="border p-3 placeholder:to-blue-400 rounded-xl bg-black"
          type="text"
          placeholder="şehir"
          onChange={(e) => setSearch(e.target.value)}
        />
        <City city={city} />
      </div>
    </div>
  );
}

export default App;
