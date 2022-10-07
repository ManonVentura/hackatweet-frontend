import styles from "../styles/Home.module.css";
import Login from "./PageLogin/Login";
import Tweet from"./Tweet";
// import LastTweets from "./LastTweets";
// import trends from "./Trends";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.leftContent}>
      <img className={styles.petitLogoblanc}src="logo3.png"/>
      </div>
      <div className={styles.middleContent}>
      <h3 className={styles.titleHome}>Home</h3>
      </div>
      <div className={styles.rightContent}>
      <h3 className={styles.titleTrends}>Trends</h3>
      </div>
    
    </div>
  )
}

export default Home; 