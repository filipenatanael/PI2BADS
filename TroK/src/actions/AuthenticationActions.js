import firebase from 'firebase';

export const changeEmail = (param) => {
  return {
    type: 'change_Email',
    payload: param
  }
}

export const changePassword = (param) => {
  return {
    type: 'change_Password',
    payload: param
  }
}

export const registerUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => successfullyRegistered(dispatch)) /*User successfully registered*/
    .catch(error => failureRegistered(error, dispatch)); /*Failed to register user*/
  }
}

const successfullyRegistered = (dispatch) => {
  dispatch({ type: 'OK' });
}

const failureRegistered = (error, dispatch) => {
  dispatch({ type: 'failure_Registered', payload: error.message });
}
