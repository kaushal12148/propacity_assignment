import React, { useEffect, useState } from "react";
import styles from "./styleSheet/card.module.css";
import styles2 from "./styleSheet/peopleCard.module.css";

const PeopleCard = ({ details,labels,labels2 }) => {
  
  return (
    <div className={styles.card} >
        {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered`}>
          <div className={`modal-content ${styles.modalContent}`}>
            <img src="./ficon.png" className={styles.ficon}></img>
            <div>
              <h2>Caution!</h2>
              <span>Are you sure want to delete this film</span>
            </div>

            <div className={styles.btnGroup}>
              <button
                type="button"
                className={`btn btn-secondary ${styles.cancel}`}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`btn btn-secondary ${styles.yes}`}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    {/* ============================== */}
      <div className={styles.movieImgDiv}>
        <img src="./welcome.png" className={styles.movieImg}></img>
      </div>
      <div className={styles2.peopleDetails}>
    
          <span>{labels[0]} : {details[labels2[0]]}</span>
          <span>{labels[1]} : {details[labels2[1]]}</span>
          <span>{labels[2]}: {details[labels2[2]]}</span>
        </div>
      </div>
    
  );
};

export default PeopleCard;
