export const blogReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [...state, action.blog];
    case 'DELETE_BLOG':
      return state.filter(e => e.id !== action.id);
    case 'EDIT_BLOG':
      return state.map(
        e =>
          e.id !== action.id ? e : { ...e, ...action.updates, id: action.id }
      );
    case 'SET_BLOGS':
      return [...action.blogs];

    default:
      return [...state];
  }
};
