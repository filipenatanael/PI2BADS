import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

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

export const changeName = (param) => {
  return {
    type: 'change_Name',
    payload: param
  }
}

export const changeTitle = (param) => {
  return {
    type: 'change_Title',
    payload: param
  }
}
export const changeDescription = (param) => {
  return {
    type: 'change_Description',
    payload: param
  }
}

export const changePhoto = (param) => {
  return {
    type: 'change_Photo',
    payload: param
  }
}


export const registerPosts = ({ title, description, photo }) => {
  return dispatch => {
    firebase.database().ref('posts')
    .push().set({ name: title, bio: description, id: photo })
    .then(value => successfullyRegistered22test(dispatch));
  }
}

const successfullyRegistered22test = (dispatch) => {
  dispatch({ type: 'successfully_Registered22test' });
}




export const registerUser = ({ name, email, password }) => {
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      let emailB64 = b64.encode(email);
      firebase.database().ref('/contacts/'+emailB64)
      .push({ name })
      .then(value => successfullyRegistered(dispatch))
    })
    .catch(error => failureRegistered(error, dispatch)); /*Failed to register user*/
  }
}

const successfullyRegistered = (dispatch) => {
  dispatch({ type: 'successfully_Registered' });
  Actions.welcome();
}

const failureRegistered = (error, dispatch) => {
  dispatch({ type: 'failure_Registered', payload: error.message });
}

export const authenticationUser = ({ email, password }) => {
  return dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(value => successfullyLogin(dispatch))
    .catch(error => failureLogin(error, dispatch));
  }
}


const successfullyLogin = (dispatch) => {
  dispatch({
    type: 'successfully_Login'
  });
  Actions.welcome();
}

const failureLogin = (error, dispatch) => {
  dispatch({
    type: 'failure_Login',
    payload: error.message
  });
}
