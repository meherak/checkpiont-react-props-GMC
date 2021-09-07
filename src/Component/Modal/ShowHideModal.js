import React from "react";
import Modal from "./Modal";
import useModal from "./useModal";

const ShowHideModal = ({ handleDataFromModal }) => {
  const { isShowing, toggle } = useModal();

  return (
    <div>
      <div className="Modal-button">
        <button className="button-default" onClick={toggle}>
          Add a movie
        </button>
        <Modal
          isShowing={isShowing}
          hide={toggle}
          handleDataFromModal={handleDataFromModal}
        />
      </div>
    </div>
  );
};

export default ShowHideModal;
