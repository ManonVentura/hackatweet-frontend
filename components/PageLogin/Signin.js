import { useDispatch, useSelector } from "react-redux";
//import Image from "next/image";
import styles from "../styles/Signin.module.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {login} from '../reducers/user'

function Signin() {

  const dispatch = useDispatch();

  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

const handleConnection = () => {
    fetch('http://localhost:3000/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: signUpname, password: signUpPassword }),
    }).then(response => response.json())
        .then(data => {

            if (data.result) {
                dispatch(login({ username: signUpUsername, password: signUpPassword }));
      setSignUpUsername('');
                setSignUpPassword('');
      window.location.href='/home'
            }
        });
};
  return (
    <>
      <div className={styles.testdiv}>
        <img src="logo.png" className={styles.logo} />
        <p>Connect to Sons of Tweet account</p>
        <input placeholder="Username" className={styles.input} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}></input>
        <input placeholder="Password" className={styles.input} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}></input>
        <button className={styles.signupbuttonmodal} onClick={() => handleConnection()} >Sign In</button>
      </div>
    </>
  );
}

export default Signin;
