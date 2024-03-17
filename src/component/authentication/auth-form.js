import { useState, useRef } from 'react';
import classes from '../../styles/auth-form.module.css';
import {signIn,signOut} from "next-auth/react"
import styles from "../../styles/page.module.css";
import dashboardStyles from "../../styles/dashboard.module.css"
import { useRouter } from 'next/router';
function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const emailInputRef = useRef();
  const passwordRef = useRef();
  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function createUser(email,password){
    const response = await fetch("/api/auth/signup",{
      method : "POST",
      body : JSON.stringify({email,password}),
      headers: {
        'Content-Type' : 'application/json'
      }
    });
    
   
    const data = await response.json();
    if(!response.ok){
      throw new Error(data.message || 'Something went wrong! ')
    }
    return data;
  }

  async function submitHandler(evt){
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordRef.current.value;
    evt.preventDefault();
    
    if(isLogin){
      const result = await signIn('credentials',{redirect : false,email:enteredEmail,password:enteredPassword})

      if(!(result.error)){
        router.push(`/dashboard`);
      }else{
        alert("Wrong crendentials please re enter");
      }
     
    }
    else{
      try{
        const result = await createUser(enteredEmail,enteredPassword)
       
      }catch(errr){
        console.log("error occurred",errr)
      }
      
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button className={`${styles.btn} ${classes.toggle} ${styles.loginBtnColor} ${dashboardStyles.btnCustomStyles} ${dashboardStyles.marginLeft}`}>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={`${styles.btn} ${classes.toggle} ${styles.newBtnStyles} ${dashboardStyles.btnCustomStyles} ${dashboardStyles.marginLeft}`}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
