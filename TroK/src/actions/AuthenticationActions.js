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

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user => console.log(user))
  .catch(error => console.log(error));

  return {
    type: 'testing'
  }
}
