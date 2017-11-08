const INITIAL_STATE = {
  name: '',
  email: 'email@example.com',
  password: 'myPassword',
  errorRegister: ''
}

export default (state = INITIAL_STATE, action) => {
  if (action.type === 'change_Email') {
    return { ...state, email: action.payload }
  } else if (action.type === 'change_Password') {
    return { ...state, password: action.payload }
  } else if (action.type === 'failure_Registered') {
    return { ...state, errorRegister: action.payload }
  }
  return state;
}
