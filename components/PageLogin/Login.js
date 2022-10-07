import styles from "../../styles/Login.module.css";
import React, {useState} from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import { login } from '../../reducers/user';
import { useDispatch, useSelector } from "react-redux";
import {Button, Modal} from 'antd';
import 'antd/dist/antd.css'




function Login() {
  // const { isShowing, toggle } = useModal();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [signUpUsername, setSignUpUsername] =useState('')
  const [signUpname, setSignUpname] =useState('')
  const [signUpPassword, setSignUpPassword] =useState('')
  const dispatch = useDispatch()

  const showModal = () => {
    console.log('ca marche')
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: signUpname,
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("frgrdgdrg", data);
        if (data.result) {
          dispatch(
            login({
              name: signUpname,
              username: signUpUsername,
              token: data.token,
            })
          );
          setSignUpname("");
          setSignUpUsername("");
          setSignUpPassword("");
          window.location.href = "/home";
        }
      });
  };

  console.log('ismodal', isModalOpen)
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftContainer}>
          <img className={styles.grosLogo} src="amin2.png" />
        </div>
        <div className={styles.rightContainer}>
          <Link href="/home"> Home page</Link>
          <img className={styles.petitLogo} src="amin2.png" />
          <h1 className={styles.titleHappening}>
            See what's <br />
            happening
          </h1>
          <h2 className={styles.titleJoin}>Join the Aminators today!</h2>

          <Button type="primary" onClick={showModal} className={styles.signUp}>
            Sign up
          </Button>

          <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className={styles.testdiv}>
        <img src="logo.png" className={styles.logo} />
        <p>Create your Aminator account</p>
        <input placeholder="name" className={styles.input} onChange={(e) => setSignUpname(e.target.value)} value={signUpname}></input>
        <input placeholder="Username" className={styles.input} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}></input>
        <input placeholder="Password" className={styles.input} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} ></input>
        <button className={styles.signupbuttonmodal} onClick={() => handleRegister()} >Sign Up</button>
      </div>

          </Modal>

          <h3 className={styles.alreadyAccount}>Already a fan ? </h3>



          <Button type="primary" onClick={showModal} className={styles.signIn}>
            Sign in
          </Button>
        
        </div>
      </main>
    </div>
  );
}

export default Login;
