

// Initial state of the counter
const initialState = {
    value: 0
  };

  // Reducer function to handle actions
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'counter/increment':
        return { ...state, value: state.value + 1 };
      case 'counter/decrement':
        return { ...state, value: state.value - 1 };
      default:
        return state;
    }
  };

  // Action creators
export const increment = () => ({ type: 'counter/increment' });
export const decrement = () => ({ type: 'counter/decrement' });