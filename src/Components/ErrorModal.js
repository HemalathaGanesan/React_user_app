import React from "react";
import ReactDOM from "react-dom";

import "./ErrorModel.css";



const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClickProps}></div>;
};

const Modal = (props) => {
  return (
    <div className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>

      <footer className="actions">
        <button onClick={props.onClickProps}>Okay</button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClickProps={props.onClickProps} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onClickProps={props.onClickProps}
        />,
        document.getElementById('model-root')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
