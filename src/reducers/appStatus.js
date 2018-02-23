export const appStatusReducers = (state = { showLoading: false }, action) => {
  switch (action.type) {
    case 'SHOW_LOADER':
      return { showLoading: true };
    case 'HIDE_LOADER':
      return { showLoading: false };
    default:
      return { ...state };
  }
};
