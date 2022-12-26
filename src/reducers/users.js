import { SET_USERS } from '../constants';

const initialState = {
  users: [],
  newText: '',
  fromDate: '',
  toDate: '',
  appType: '',
  actionType:''
};

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
        newText: action.data
      }
    case 'SET_FROM_DATE':
      return {
        ...state,
        fromDate: action.data
      }
    case 'SET_TO_DATE':
      return {
        ...state,
        toDate: action.data
      }
      case 'SET_APP_TYPE':
        console.log(action.data,'ired');
        return {
          ...state,
          appType: action.data
        }
      case 'SET_ACTION_TYPE':
        return {
          ...state,
          actionType: action.data
        }
    default:
      return state;
  }
}
