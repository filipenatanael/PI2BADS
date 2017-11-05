export const changeEmail = (p) => {
  console.log(p);
  return {
    type: 'change_email',
    payload: p
  }
}
