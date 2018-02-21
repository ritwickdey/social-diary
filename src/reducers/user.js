export const userReducers = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...action.user };
      break;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
