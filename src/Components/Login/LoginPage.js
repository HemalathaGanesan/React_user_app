import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./LoginPage.css";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  //using use effect hook
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("inside timeout function....!");
      setIsFormValid(email.includes("@") && password.trim().length > 5);
    }, 1000);

    return () => {
      console.log(identifier);
      clearTimeout(identifier);
    };
  }, [email, password]);

  const emailHandler = (event) => {
    setEmail(event.target.value);
    // setIsFormValid(
    //   event.target.value.includes("@") && password.trim().length > 5
    // );
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
    // setIsFormValid(event.target.value.trim().length > 5 && email.includes("@"));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin({ email: email, password: password });

    setPassword("");
    setEmail("");
  };

  return (
    <div className='container'>
      <div className='header'>
        <h2>A Typical Page</h2>
      </div>
      <div className='login-modal'>
        <form onSubmit={submitHandler}>
          <div className={"form-control"}>
            <label htmlFor='emailInput'>E-Mail</label>
            <input type='email' value={email} onChange={emailHandler}></input>
          </div>
          <div className='form-control'>
            <label htmlFor='passwordinput'>Password</label>
            <input
              type='password'
              value={password}
              onChange={passwordHandler}
            ></input>
          </div>
          <div className='action'>
            <button type='submit' disabled={!isFormValid}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
