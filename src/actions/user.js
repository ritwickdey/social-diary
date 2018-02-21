import firebase, { googleProvider } from '../firebase/firestore';

export const loginUser = userDetails => ({
  type: 'LOGIN',
  user: {
    uid: userDetails.uid,
    name: userDetails.displayName || userDetails.email || 'User'
  }
});

export const startLogin = () => {
  return dispatch =>
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(result => dispatch(loginUser(result.user)));
};

export const logoutUser = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return dispatch =>
    firebase
      .auth()
      .signOut()
      .then(() => logoutUser());
};
