const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  errorRegister: '',
  errorLogin: ''
}

export default (state = INITIAL_STATE, action) => {
  if (action.type === 'change_Email') {
    return { ...state, email: action.payload }
  } else if (action.type === 'change_Password') {
    return { ...state, password: action.payload }
  } else if (action.type === 'change_Name') {
    return { ...state, name: action.payload }
  } else if (action.type === 'failure_Registered') {
    return { ...state, errorRegister: action.payload }
  } else if (action.type === 'successfully_Registered') {
    return { ...state, password: '' }
  } else if (action.type === 'failure_Login') {
    return { ...state, errorLogin: action.payload }
  }
  return state;
}
