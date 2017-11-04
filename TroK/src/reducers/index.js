import { combineReducers } from 'redux';
//import todos from './todos';
import AuthenticationReducer from './AuthenticationReducer';

export default combineReducers({
  AuthenticationReducer: AuthenticationReducer,
});
