import React from 'react';
import Masonry from 'react-masonry-css';
import TakeNote from './TakeNote';

const Home = ({ state, styles, ...actions }) => {
  return (
    <div>
      <TakeNote state={state} {...actions} />
      <div
        className="popup"
        style={state.showPopUp ? styles.inputStyle : styles.inputStyle1}
      >
        <p className="text">
          <span className="edit-title">
            <input
              value={state.edited_note.title}
              onChange={(e) =>
                actions.handleChangeNote(e.target.value, "title", "edited_note")
              }
            />
          </span>
          <input
            value={state.edited_note.input}
            onChange={(e) =>
              actions.handleChangeNote(e.target.value, "input", "edited_note")
            }
            className="edit-input"
          />
          <button
            onClick={(e) => actions.updateNote(state.popUp_id)}
            className="close"
          >
            Save
          </button>
        </p>
      </div>
      {state.notes_list?.length || state.search_list?.length ? (
        <ul>
          <Masonry
            breakpointCols={4}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {(!state.search ? state.notes_list : state.search_list)
              .filter((n) => {
                return n.id !== state.pinned_id && n.id !== state.popUp_id;
              })
              .map((item, index) => (
                <li key={index} className="list-item">
                  <span className="span1">{item.title} </span>
                  <span className="span2">{item.input}</span>
                  <button
                    className="list-button"
                    onClick={(e) => actions.showNote(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="list-button"
                    onClick={(e) => actions.removeFromNotes(index, item.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </Masonry>
        </ul>
      ) : (
        <p>Records not found!</p>
      )}
    </div>
  );
};

export default Home;