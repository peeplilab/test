import { GET_USERS_SAGA, SET_USERS,  } 
from '../constants';

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

export function getUsersSaga() {
  return {
    type: GET_USERS_SAGA
  };
}

export function setText(newText) {
  return {
    type: 'SET_NEW_TEXT',
    newText
  };
}