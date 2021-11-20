import { useRef, useState } from "react";
import "./MealItemForm.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [isVaildAmount, setIsValidAmount] = useState(false);
  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 8
    ) {
      setIsValidAmount(true);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className='form' onSubmit={SubmitHandler}>
      <Input
        ref={amountRef}
        label='Amount'
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "8",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {isVaildAmount && <p>please enter a valid amount (1-8)</p>}
    </form>
  );
};

export default MealItemForm;
