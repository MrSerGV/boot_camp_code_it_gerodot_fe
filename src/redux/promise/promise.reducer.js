const INITIAL_STATE = {};

const promiseReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'PROMISE') {
    const { type, name, ...newState } = action;
    return { ...state, [name]: newState };
  }

  if (action.type === 'CLEAR') {
    if (!state.hasOwnProperty(action.name)) return state;
    const newState = { ...state };
    delete newState[action.name];
    return newState;
  }

  return state;
}

export default promiseReducer;