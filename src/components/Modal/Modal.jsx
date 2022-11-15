import React from "react";
import "./modal.css";
import exit from "../../assets/exit.png";
import wallet1 from "../../assets/wallet_img_1.png";
import wallet2 from "../../assets/wallet_img_2.png";
import arrow_out from "../../assets/arrow_out.png";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <>
      <div onClick={props.onClose} className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="modal__container">
          <div className="modal_header">
            <h1>Connect Wallet</h1>
            <img onClick={props.onClose} src={exit} alt="exit" />
          </div>
          <hr />
          <div className="modal_body">
            <p>Choose your preferred wallet:</p>
            <div className="wallet">
              <div className="wallet_details">
                <img src={wallet1} alt="metamask" className="wallet-img" />
                <h3>Metamask</h3>
              </div>
              <img src={arrow_out} alt="arrow_out" />
            </div>
            <div className="wallet">
              <div className="wallet_details">
                <img
                  src={wallet2}
                  alt="wallet connect"
                  className="wallet-img"
                />
                <h3>WalletConnect</h3>
              </div>
              <img src={arrow_out} alt="arrow_out" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
