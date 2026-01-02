import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const darkMode = props.mode === "dark";

  const containerStyle = {
    backgroundColor: darkMode ? "#121212" : "#f5f5f5",
    color: darkMode ? "#ffffff" : "#121212",
    padding: "1.5rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  const textareaStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#121212",
    border: darkMode ? "1px solid #555" : "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
    padding: "0.75rem",
    transition: "all 0.3s ease",
  };

  // Proper word count ignoring empty strings
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <div className="container my-3" style={containerStyle}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={textareaStyle}
            id="myBox"
            rows="8"
            placeholder="Enter your text here..."
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
      </div>

      <div className="container my-3" style={containerStyle}>
        <h2>Your Text Summary</h2>
        <p>
          {wordCount} words, {text.length} characters
        </p>
        <p>{(0.008 * wordCount).toFixed(2)} Minutes read</p>

        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something to preview it here..."}
        </p>
      </div>
    </>
  );
}
