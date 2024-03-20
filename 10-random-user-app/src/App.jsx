import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SingleUser from "./components/SingleUser";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <Header />
      <UserList />
      <SingleUser />
    </div>
  );
}

export default App;
