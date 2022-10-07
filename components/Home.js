import styles from "../styles/Home.module.css";
import Login from "./PageLogin/Login";
import Tweet from"./Tweet";
import LastTweets from './LastTweets'
// import LastTweets from "./LastTweets";
// import trends from "./Trends";

function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.leftContent}>
      <img className={styles.petitLogoblanc}src="amin2.png"/>
      <div className={styles.bottomContainer}> 
      {/* Partie en bas a gauche home page */}
           <div className={styles.userContainer}>
            {/* container specifique juste pour les infos de l'utilisateur */}
              <img className={styles.petitLogoblanc} src="amin2.png"/>
                  <div>@Username </div>
                  <div>Name</div>
            </div>
            {/* bouton dans le bottom container mais séparé des informations de l'utilisateur */}
        <button>Logout</button>
      </div>
      </div>
      <div className={styles.middleContent}>
        <div className={styles.header}>
          <Tweet/>
      {/* <h3 className={styles.titleHome}>Home</h3> */}

        </div>
        <div className={styles.LastTweetsContainer}>
          <LastTweets/>
        </div>
      </div>
      <div className={styles.rightContent}>
      <h3 className={styles.titleTrends}>Trends</h3>
      </div>
    
    </div>
  )
}

export default Home; 