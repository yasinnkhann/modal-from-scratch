import React, { useEffect } from "react";

export default function Modal(props) {
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        props.close();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div id="Modal">
      <div className="overlay">
        <div className="content">
          <h2>MODAL</h2>
          <br />
          <button onClick={() => props.close()}>Close</button>
        </div>
      </div>
    </div>
  );
}
