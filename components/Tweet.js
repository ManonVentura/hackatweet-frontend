	
import styles from "../styles/Tweet.module.css";

function Tweet (){

  function handlenewTweetClick() {
    // fetch la route tweet post data.tweet push tweet
  }
    return (
      <div><main className={styles.main}>
        {/* <input className={style.inputTweet}   ...   maxlength="280" placeholder="whats'up?"></input>  */}
        <div>
          <span className={styles.counter}>280</span>
          <button className={styles.button}></button>
        </div>
      </main></div>
    );
  }

export default Tweet;