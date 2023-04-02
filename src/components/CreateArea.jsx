import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    // to prevent default behaviour of button
    // on click to refresh page
    event.preventDefault();
    props.pushNote(note);
    setNote({
      title: "",
      content: "",
    });
    setExpand(false);
  }

  function handleInputClick() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          type={!isExpanded && "hidden"}
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          onChange={handleChange}
          value={note.content}
          onClick={handleInputClick}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
