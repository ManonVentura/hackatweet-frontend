import styles from "../../styles/Login.module.css";
import Modal from '../modals/modalup'
import Link from 'next/link'
import useModal from "../modals/useModal";




function Login() {
    const {isShowing, toggle} = useModal();



  return (
    <div><main className={styles.main}>
    <div className={styles.leftContainer}>
      <img className={styles.grosLogo}src="logo5.png" />
    </div>
    <div className={styles.rightContainer}>
      <Link href='/home'> Home page</Link>
    <img className={styles.petitLogo}src="logo5.png" />
      <h1 className={styles.titleHappening}>See what's <br/>happening</h1>
      <h2 className={styles.titleJoin}>Join the Aminators today!</h2>
      <button onClick={toggle} className={styles.signUp}>Sign up</button>
      <h3 className={styles.alreadyAccount}>Already a fan ? </h3>
      <button className={styles.signIn}>Sign in</button>
      <Modal isShowing={isShowing} hide={toggle}/>
    </div>
  </main></div>
  )
  
}

export default Login;