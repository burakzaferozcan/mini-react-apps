import { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };
  const removeItem = (i) => {
    const updatedItems = [...items];
    updatedItems.splice(i, 1);
    setItems(updatedItems);
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input
        value={newItem}
        type="text"
        placeholder="Add Todo"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => removeItem(i)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
