import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems((prevItems) => [...prevItems, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="app-container">
      <h1>Item List Manager</h1>
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter item..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
