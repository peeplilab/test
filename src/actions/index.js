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
export function setFromDate(data) {
  return {
    type: 'SET_FROM_DATE',
    data
  }
}
export function setToDate(data) {
  return {
    type: 'SET_TO_DATE',
    data
  }
}
export function handleClickFilter() {
  return {
    type: 'GET_FILTERS_SAGA',
  }
}
export function setApplicationType(data) {
  return {
    type: 'SET_APP_TYPE',
    data
  }
}
export function setActionType(data) {
  return {
    type: 'SET_ACTION_TYPE',
    data
  }
}
