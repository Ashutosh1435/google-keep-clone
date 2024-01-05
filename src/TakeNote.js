import React from 'react';
const colors = ["red", "yellow", "blue", "white", "green"];
const TakeNote = ({ state, ...actions }) => {
  return (
    <div>
      {state.visible === false ? (
        <div className="take-notes1">
          <input
            type="text"
            placeholder="Add a note..."
            onClick={actions.handleClick}
            className="initial"
            value={state.notes.title}
            onChange={() => null}
          />
        </div>
      ) : (
        <div className="take-notes2">
          <input
            type="text"
            value={state.notes.title}
            placeholder="Title"
            className="title"
            onChange={(e) => actions.handleChangeNote(e.target.value, "title")}
          />
          {/* <br></br> */}
          <input
            type="text"
            value={state.notes.input}
            placeholder="Add a note..."
            onChange={(e) => actions.handleChangeNote(e.target.value, "input")}
            className="take-note"
            autoFocus="autofocus "
          />
          <div className="color-block-container">
            {colors.map((color, idx) => (
              <div
                key={idx}
                style={{ background: color }}
                className="color-block"
                onClick={() => {
                  if (state.notes.color !== color) {
                    actions.handleChangeColor(color, "color");
                  }
                }}
              >
                {state.notes.color === color ? (
                  <img
                    className="selected-icon"
                    src="./checkmark-icon.png"
                    alt=""
                  />
                ) : null}
              </div>
            ))}
          </div>
          <button onClick={actions.addToNotes}>
            {state.notes.title || state.notes.input ? "Save" : "Cancel"}
          </button>
        </div>
      )}
    </div>
  );
};

export default TakeNote;