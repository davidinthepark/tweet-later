import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from '@mui/icons-material/Edit';
import TwitterIcon from '@mui/icons-material/Twitter';

function Note({ id, text, deleteNote }) {
  const textParsed = encodeURIComponent(text.trim());
  const twitterURL = "https://twitter.com/intent/tweet?url=&text=" + textParsed + "&via=";
  
  const shareTweet = () => {
    window.open(twitterURL, '_blank').focus();
  }
  
  return (
    <div className="note">
      <div className="note__body" id="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        {/* <EditIcon
            className="note__delete"
            onClick={() => editNote(id)}
            aria-hidden="true"
          ></EditIcon> */}

        <DeleteForeverOutlinedIcon
            className="note__delete"
            onClick={() => deleteNote(id)}
            aria-hidden="true"
          ></DeleteForeverOutlinedIcon>
        <TwitterIcon
          className="note__share"
          onClick={() => shareTweet()}
          aria-hidden="true"
        ></TwitterIcon>
      </div>
    </div>
  );
}
export default Note;