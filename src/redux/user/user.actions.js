import GerodotServices from '../../utils/gerodot-services';

import { actionPromise, actionClear } from '../promise/promise.actions';

const authLogout = () => ({ type: authTypes.LOGOUT });
const actionRegistration = userData => dispatch => {
  const res = await dispatch(actionPromise('registration', GerodotServices.postRegistration(userData)));
  // TODO: return res.id?
}

export const authLogin = token => ({ type: 'LOGIN', token });

export const actionLogin = (login, password) => async dispatch => {
  const res = await dispatch(actionPromise('login', GerodotServices.postLogin(login, password)));
  // TODO: dispatch(authLogin(res.token?)) 
}

export const actionRegistrationAndLogin = userData => async dispathc => {
  const { login, password } = userData;
  const regRes = await dispathc(actionRegistration(userData));
  // TODO: if(regRes.id?);
  // TODO: dispatch(actionLogin(login, password));
}

export const actionLogout = () => async dispatch => {
  await dispatch(actionClear('login'));
  dispatch(authLogout);
}