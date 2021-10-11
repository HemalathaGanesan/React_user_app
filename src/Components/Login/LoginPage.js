import { useState, useEffect, useReducer } from "react";
import "./LoginPage.css";

const emailReducer = (state, action) => {
  if (action.type === "input_email") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
};

const passwordReducer = (state, action) => {
  if (action.type === "input_password") {
    return { value: action.val, isValid: action.val.trim().length > 5 };
  }
};

const LoginPage = (props) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  //using UseEffect hook -1 ..........................................................
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("inside timeout function....!");
      setIsFormValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log(identifier);
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  //using UseReducer hook - 2 ................................................................

  const emailHandler = (event) => {
    //UseEffect
    //setEmail(event.target.value);
    // normal state set
    // setIsFormValid(
    //   event.target.value.includes("@") && password.trim().length > 5
    // );

    //UseReducer
    dispatchEmail({ type: "input_email", val: event.target.value });
    //setIsFormValid(event.target.value.includes("@") && passwordState.isValid);
  };
  const passwordHandler = (event) => {
    //UseEffect
    //setPassword(event.target.value);
    //Normal set method
    // setIsFormValid(event.target.value.trim().length > 5 && email.includes("@"));

    //UseReducer
    dispatchPassword({ type: "input_password", val: event.target.value });
    //setIsFormValid(emailState.isValid && event.target.value.trim().length > 5);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // props.onLogin({ email: email, password: password });
    props.onLogin({ email: emailState.value, password: passwordState.value });

    // setPassword("");
    // setEmail("");
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
            <input
              type='email'
              value={emailState.value}
              onChange={emailHandler}
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='passwordinput'>Password</label>
            <input
              type='password'
              value={passwordState.value}
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
