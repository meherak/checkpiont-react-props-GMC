import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import SelectMovieType from "./SelectMovieType";
import ReactStars from "react-rating-stars-component";
import DateSelect from "./DateSelect";

const Modal = ({ isShowing, hide, handleDataFromModal }) => {
  let addMovieData = {};

  const ratingChanged = (newRating) => {
    addMovieData.rating = newRating;
    console.log(addMovieData);
  };

  const getMovieType = (selectedMovie) => {
    let str = selectedMovie.reduce((a, e) => (a = a + ` ${e.value} |`), "");
    if (str[str.length - 1] === "|") {
      addMovieData.type = str.slice(0, -1);
    } else {
      addMovieData.type = str;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMovieData.name = event.target.name.value;
    addMovieData.description = event.target.description.value;
    addMovieData.image = event.target.image.value;
    addMovieData.date = event.target[2].value;
    addMovieData.id = Math.random();

    handleDataFromModal(addMovieData);
  };

  let result;
  if (isShowing) {
    result = ReactDOM.createPortal(
      <React.Fragment>
        <div className="modal-overlay-custom" />
        <div
          className="modal-wrapper-custom form"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-custom">
            <div className="modal-header-custom">
              <div className="title">Add a movie</div>
              <button
                type="button"
                className="modal-close-button-custom"
                data-dismiss="modal-custom"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <form
              className="movie-form"
              onSubmit={(e) => {
                handleSubmit(e);
                hide();
              }}
            >
              <div className="input-container ic1">
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="input"
                  placeholder=" "
                />
                <div className="cut" />
                <label className="placeholder">Name</label>
              </div>

              <div className="input-container ic2">
                <textarea
                  name="description"
                  rows="4"
                  cols="50"
                  className="input"
                  placeholder=" "
                />
                <div className="cut" />
                <label className="placeholder">Description </label>
              </div>
              <div className="input-container ic2">
                <input
                  type="text"
                  name="image"
                  className="input"
                  placeholder=" "
                />
                <div className="cut" />
                <label className="placeholder">Image url</label>
              </div>
              <div className="input-container ic2">
                <label className="placeholder">type</label>
                <SelectMovieType getMovieType={getMovieType} />
              </div>
              <div className="input-container ic2">
                <label className="placeholder">Date</label>
                <DateSelect />
              </div>

              <div className="input-container ic2">
                <label className="placeholder">Rating</label>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
              <input type="submit" className="submit" />
            </form>
          </div>
        </div>
      </React.Fragment>,
      document.body
    );
  } else {
    result = null;
  }
  return result;
};

export default Modal;
