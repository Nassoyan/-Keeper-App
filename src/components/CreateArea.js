import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@material-ui/core/Fab";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [text, setText] = useState({
    title: "",
    content: "",
  });
  const [show, setShow] = useState(false);

  function handleChange(e) {
    const { value, name } = e.target;
    setText((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function expand() {
    setShow(true);
  }

  function handleClick(event) {
    event.preventDefault();
    if (!text.title || !text.content) {
      return false;
    }
    props.onAdd(text);
    setText({
      title: "",
      content: "",
    });
  }
  return (
    <div>
      <form className="create-note">
        {show ? (
          <input
            value={text.title}
            onChange={handleChange}
            name="title"
            placeholder="Title"
            style={{ display: !show ? "none" : "block" }}
          />
        ) : null}
        <textarea
          onClick={expand}
          value={text.content}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={`${show ? 3 : 1}`}
        />
        <Zoom in={show}>
          <Fab onClick={handleClick} variant="text">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
