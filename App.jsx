import React, { useState, useEffect } from "react";
import Modal from "./Modal.js";

export default function App(props) {
  const [isModalClosed, setIsModalClosed] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalClosed(true);
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <button onClick={() => handleOpenModal()}>Click me</button>
      {isModalOpen && <Modal close={() => handleCloseModal()} />}
    </div>
  );
}
