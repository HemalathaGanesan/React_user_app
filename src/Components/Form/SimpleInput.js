import useInput from "../../Hooks/use-Input";

const SimpleInput = (props) => {
  const name = (value) => value.trim() !== "";
  const {
    enteredValue: enteredName,
    isValid: enteredNamesIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameblurChangeHandler,
    reset: resetName,
  } = useInput(name);

  const {
    enteredValue: enteredlastName,
    isValid: enteredlastNamesIsValid,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastnameChangeHandler,
    valueBlurHandler: lastnameblurChangeHandler,
    reset: resetlastName,
  } = useInput(name);

  const {
    enteredValue: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailblurChangeHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let isFormValid = false;

  if (enteredNamesIsValid && enteredEmailIsValid && enteredlastNamesIsValid)
    isFormValid = true;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    resetName();
    resetlastName();
    resetEmail();
  };

  const nameInputClass = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastnameInputClass = lastnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='FirstName'>First Name</label>
        <input
          type='text'
          id='firstName'
          value={enteredName}
          onBlur={nameblurChangeHandler}
          onChange={nameChangeHandler}
        ></input>
        {nameInputHasError && (
          <p className='error-text'>Name should not be empty..</p>
        )}
      </div>
      <div className={lastnameInputClass}>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          id='lastName'
          value={enteredlastName}
          onBlur={lastnameblurChangeHandler}
          onChange={lastnameChangeHandler}
        ></input>
        {lastnameInputHasError && (
          <p className='error-text'> Last Name should not be empty..</p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='text'
          id='email'
          value={enteredEmail}
          onBlur={emailblurChangeHandler}
          onChange={emailChangeHandler}
        ></input>
        {emailInputHasError && (
          <p className='error-text'>
            Email should not be empty and must include..
          </p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
