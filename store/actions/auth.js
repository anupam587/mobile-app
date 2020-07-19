import { AsyncStorage } from 'react-native';
import { encode as btoa } from 'base-64'

export const AUTHENTICATE = 'AUTHENTICATE';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

export const setDidTryAL = () => {
    return { type: SET_DID_TRY_AL };
  };

export const authenticate = (userId, token, expiryTime) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};

export const signup = (email, password) => {
  let userId = btoa(email);
  let idToken = btoa(email + password);
  let expiresIn = 1000;

  return async dispatch => {
    dispatch(
      authenticate(
        userId,
        idToken,
        parseInt(expiresIn) * 1000
      )
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(expiresIn) * 1000
    );
    saveDataToStorage(idToken, userId, expirationDate);
  };
};

export const login = (email, password) => {
  let userId = btoa(email);
  let idToken = btoa(email + password);
  let expiresIn = 1000;

  return async dispatch => {
    dispatch(
      authenticate(
        userId,
        idToken,
        parseInt(expiresIn) * 1000
      )
    );
    const expirationDate = new Date(
      new Date().getTime() + parseInt(expiresIn) * 1000
    );
    saveDataToStorage(idToken, userId, expirationDate);
  };
};


const saveDataToStorage = (token, userId, expirationDate) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expirationDate.toISOString()
    })
  );
};
