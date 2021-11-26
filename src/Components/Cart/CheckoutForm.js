import { useRef, useState } from "react";
import "./CheckoutForm.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const CheckoutForm = (props) => {
  //we can use custom hook with useState() or  useReducer() to work with this form validation.
  const [formInputValid, setFormInputValidation] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameRef = useRef("");
  const streetRef = useRef("");
  const cityRef = useRef("");
  const postalRef = useRef("");

  const checkoutFormSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredPostal = postalRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const postalIsValid = isFiveChars(enteredPostal);

    setFormInputValidation({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postalCode: postalIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalIsValid;
    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostal,
    });
  };
  return (
    <form onSubmit={checkoutFormSubmitHandler} className='checkoutForm'>
      <div className='Checkut_control'>
        <label>Your Name</label>
        <input type='text' id='name' ref={nameRef} />
        {!formInputValid.name && (
          <p className='invalid'>Enter the name field</p>
        )}
      </div>
      <div className='Checkut_control'>
        <label>Street</label>
        <input type='text' id='street' ref={streetRef} />
        {!formInputValid.street && (
          <p className='invalid'>Enter the street field</p>
        )}
      </div>
      <div className='Checkut_control'>
        <label>Postal Code</label>
        <input type='text' id='postal' ref={postalRef} />
        {!formInputValid.postalCode && (
          <p className='invalid'>Enter the postl code field</p>
        )}
      </div>
      <div className='Checkut_control'>
        <label>City</label>
        <input type='text' id='city' ref={cityRef} />
        {!formInputValid.city && (
          <p className='invalid'>Enter the city field</p>
        )}
      </div>
      <div className='actions'>
        <button>Confirm</button>
        <button type='button' onClick={props.close}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
