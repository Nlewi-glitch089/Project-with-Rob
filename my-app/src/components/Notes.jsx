import { useState } from "react";

export default function Notes({ notes, onAddNote }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote(inputValue);
    setInputValue(""); // clear field after adding
  };

  return (
    <div className="notes-widget">
      <h2>Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Add a new note..." 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
}