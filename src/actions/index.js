import { GET_USERS_SAGA, SET_USERS, GET_POST_COMPONENT_DATA } 
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

export function getPostComponentData(title, body) {
  return {
    type: GET_POST_COMPONENT_DATA,
    title,
    body
  };
}
export function setText(newText) {
  return {
    type: 'SET_NEW_TEXT',
    newText
  };
}