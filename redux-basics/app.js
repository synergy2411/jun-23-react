// CommonJS Module Pattern
const { createStore } = require("redux");

const initialState = {
  counter: 0,
};

// Reducer
function rootReducer(state = initialState, action) {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
}

// Create Store

const store = createStore(rootReducer);

// Subscribing the store
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatching Action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
