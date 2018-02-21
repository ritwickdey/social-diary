export const loginUser = userDetails => ({
  type: 'LOGIN',
  user: {
    uid: userDetails.uid,
    name: userDetails.displayName || userDetails.email || 'User'
  }
});

export const logoutUser = userDetails => ({
  type: 'LOGOUT'
});
