const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'LOGIN') {
    // TODO: JWT в localStorage.authToken
    // TODO: расшифровуем JWT
    // TODO: информацию из JWT в Store
  }
  if (action.type === 'LOGOUT') {
    // TODO: JWT удаляем из localStorage.authToken
    // TODO: JWT информацию удаляем из Store  
  }
  return state;
}

export default userReducer;