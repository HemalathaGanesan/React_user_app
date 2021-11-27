//using redux tool kit ......
import { createSlice, configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counter";
import AuthReducer from "./auth";

const store = configureStore({
  reducer: { counter: CounterReducer, auth: AuthReducer },
});

export default store;

// import { createStore } from "redux";

// const initState = {
//   counter: 0,
//   show: true,
// };

// const counterReducer = (state = initState, action) => {
//   if (action.type === "INCREMENT") {
//     return { counter: state.counter + 1, show: state.show };
//   }
//   if (action.type === "DECREMENT") {
//     return { counter: state.counter - 1, show: state.show };
//   }
//   if (action.type === "INCREASE") {
//     return { counter: state.counter + action.number, show: state.show };
//   }
//   if (action.type === "TOGGLE") {
//     return { counter: state.counter, show: !state.show };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// export default store;
