import { SET_USERS } from '../constants';

const initialState = { users: [] };

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    case 'SET_NEW_TEXT': 
    return {
      ...state,
      newText:action.newText    
    }
    default:
      return state;
  }
}
