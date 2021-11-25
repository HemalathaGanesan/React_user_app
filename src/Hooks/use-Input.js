import { useReducer } from "react";

//used with useState hook....
// const useInput = (valueValidate) => {
//   const [enteredValue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   const enteredValueIsValid = valueValidate(enteredValue);
//   const hasError = !enteredValueIsValid && isTouched;

//   const valueChangeHandler = (event) => {
//     setEnteredValue(event.target.value);
//   };

//   const valueBlurHandler = (event) => {
//     setIsTouched(true);
//   };

//   const reset = () => {
//     setEnteredValue("");
//     setIsTouched(false);
//   };

//   return {
//     enteredValue,
//     isValid: enteredValueIsValid,
//     hasError,
//     valueChangeHandler,
//     valueBlurHandler,
//     reset,
//   };
// };

/// used with useReducer() hook.....

const initialInputState = {
  inputVal: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { inputVal: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, inputVal: state.inputVal };
  }
  if (action.type === "RESET") {
    return { isTouched: false, inputVal: "" };
  }
  return inputStateReducer;
};

const useInput = (valueValidate) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const enteredValueIsValid = valueValidate(inputState.inputVal);
  const hasError = !enteredValueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const valueBlurHandler = (event) => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    enteredValue: inputState.inputVal,
    isValid: enteredValueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
