const INITIAL_STATE = {
  name: '',
  email: 'email@example.com',
  password: 'myPassword'
}

export default (state = INITIAL_STATE, action) => {
  if (action.type === 'change_Email') {
    return { ...state, email: action.payload }
  } else if (action.type === 'change_Password') {
    return { ...state, password: action.payload }
  }
  return state;
}
