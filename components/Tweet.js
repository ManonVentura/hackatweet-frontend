	
import styles from "../styles/Tweet.module.css";
import React, {useState} from 'react'
// import {useDispatch, useSelector} from 'react redux'


function Tweet (){
const [characterCount, setCharacterCount] = useState(0)




  function handlenewTweetClick() {
    // fetch la route tweet post data.tweet push tweet 

    fetch('http://localhost:3000/')
  }
    return (
      <div><main className={styles.main}>
        <h2 className={styles.homeTitle}>Home</h2>
        <input className={styles.inputTweet} onChange={(e) => setCharacterCount(e.target.value.length)} maxlength="280" placeholder="whats'up?"></input> 
        <div className={styles.counterButtonContainer}>
          <span className={styles.counter}> {characterCount}<span className={styles.counter}>/280</span>
            </span>
          <button className={styles.button}>Tweet</button>
        </div>
      </main></div>
    );
  }

export default Tweet;