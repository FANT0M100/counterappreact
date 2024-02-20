import { createStore } from "redux";

const initialState = { counter: 0, showCountrer: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "icrement") {
    return {
      counter: state.counter + 1,
      showCountrer: state.showCountrer,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCountrer: state.showCountrer,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.payload,
      showCountrer: state.showCountrer,
    };
  }
  if (action.type === "toggle") {
    return {
      showCountrer: !state.showCountrer,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
