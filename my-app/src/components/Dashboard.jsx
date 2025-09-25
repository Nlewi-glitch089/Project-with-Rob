import { useState } from "react";
import Counter from "./Counter";
import Notes from "./Notes";

export default function Dashboard() {
  // Counter state
  const [count, setCount] = useState(0);

  // Notes state
  const [notes, setNotes] = useState(["First note", "Another note"]);

  // Handlers
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleAddNote = (newNote) => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
    }
  };

  return (
    <div className="dashboard">
      <Counter 
        count={count} 
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement} 
      />
      <Notes notes={notes} onAddNote={handleAddNote} />
    </div>
  );
}