import Image from "next/image";
import styles from "../styles/Signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {login} from '../reducers/user'
import { useDispatch } from 'react-redux';

function Signup() {

  const dispatch = useDispatch();

  const [signUpname, setSignUpname] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname: signUpname, username: signUpUsername, password: signUpPassword }),
    }).then(response => response.json())
        .then(data => {
    console.log('frgrdgdrg',data)
            if (data.result) {
                dispatch(login({ firstname: signUpname, username: signUpUsername, token: data.token }));
                setSignUpname('')
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
        <p>Create your Sons of Tweet account</p>
        <input placeholder="name" className={styles.input} onChange={(e) => setSignUpname(e.target.value)} value={signUpname}></input>
        <input placeholder="Username" className={styles.input} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}></input>
        <input placeholder="Password" className={styles.input} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} ></input>
        <button className={styles.signupbuttonmodal} onClick={() => handleRegister()} >Sign Up</button>
      </div>
    </>
  );
}

export default Signup;