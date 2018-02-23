export const blogReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_STORY':
      return [...state, action.blog];
    case 'DELETE_STORY':
      return state.filter(e => e.id !== action.id);
    case 'EDIT_STORY':
      return state.map(
        e =>
          e.id !== action.id ? e : { ...e, ...action.updates, id: action.id }
      );
    case 'SET_STORY':
      return [...action.blogs];

    default:
      return [...state];
  }
};
