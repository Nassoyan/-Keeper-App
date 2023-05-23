import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import "./styles.css";

function App() {
  const [notes, setNotes] = useState([]);

  function onAdd(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function onDelete(id) {
    return setNotes((prevNote) => {
      return prevNote.filter((_, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={onAdd} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            id={index}
            onDelete={onDelete}
            key={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
