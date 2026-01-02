import React, { useState } from "react";

export default function About() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleStyle = () => setDarkMode(!darkMode);

  const myStyle = {
    color: darkMode ? "#fff" : "#121212",
    backgroundColor: darkMode ? "#121212" : "#f5f5f5",
    borderRadius: "8px",
    padding: "1rem",
    transition: "all 0.3s ease",
  };

  const accordionButtonStyle = {
    ...myStyle,
    border: darkMode ? "1px solid #444" : "1px solid #ddd",
    marginBottom: "0.5rem",
    cursor: "pointer",
  };

  const btnText = darkMode ? "Enable Light Mode" : "Enable Dark Mode";

  return (
    <div className="container my-5" style={{ transition: "all 0.3s ease" }}>
      <h2 className="mb-4" style={{ color: myStyle.color }}>
        About Us
      </h2>

      <div className="accordion" id="accordionExample">
        {[1, 2, 3].map((item) => (
          <div className="accordion-item" key={item}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${item !== 1 ? "collapsed" : ""}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item}`}
                aria-expanded={item === 1 ? "true" : "false"}
                aria-controls={`collapse${item}`}
                style={accordionButtonStyle}
              >
                Accordion Item #{item}
              </button>
            </h2>
            <div
              id={`collapse${item}`}
              className={`accordion-collapse collapse ${
                item === 1 ? "show" : ""
              }`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>
                  This is the{" "}
                  {item === 1 ? "first" : item === 2 ? "second" : "third"}{" "}
                  item’s accordion body.
                </strong>{" "}
                It is {item === 1 ? "shown" : "hidden"} by default, until the
                collapse plugin adds the appropriate classes. You can customize
                this content as needed.
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-4">
        <button
          type="button"
          className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
          onClick={toggleStyle}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
