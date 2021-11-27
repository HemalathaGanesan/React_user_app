import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import "./Counter.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.show);

  //   const incrementHandler = () => {
  //     dispatch({ type: "INCREMENT" });
  //   };
  //   const decrementHandler = () => {
  //     dispatch({ type: "DECREMENT" });
  //     console.log(counter);
  //   };
  //   const increaseHandler = () => {
  //     dispatch({ type: "INCREASE", number: 5 });
  //   };
  //   const toggleHandler = () => {
  //     dispatch({ type: "TOGGLE" });
  //   };

  //useing reduxtoolkit dispatch action
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className='counter'>
      <h2> Counter</h2>
      {showCounter && <div className='count_val'>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleHandler}>Toggle Count</button>
    </main>
  );
};

export default Counter;
