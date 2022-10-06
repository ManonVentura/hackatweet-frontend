import React from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/modal.module.css";
import Link from 'next/link'

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={styles.modalOverlay}>
            <div className={styles.modalWrapper}>
              <div className={styles.modal}>
                  <img classname={styles.logo} style={{width:'10%', borderRadius:'50%'}} src='amin2.png'/>
                <div className={styles.modalHeader}>
                  <h4 className={styles.modalTitle} >Create your Aminator account</h4>
                  <button
                    type="button"
                    className={styles.modalCloseButton}
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <input className={styles.input} placeholder='Name'/>
                  <input className={styles.input} placeholder='Username' />
                  <input className={styles.input} placeholder='Password'/>
                  <button className={styles.buttonSignUp}>Signup</button>
                </div>
              </div>
            </div>
          </div>
   
        </>,
        document.body
      )
    : null;

export default Modal;