const addBlog = ({
  id = Date.now(),
  title = '',
  postedAt = Date.now(),
  body = '',
  uId = ''
} = {}) => ({
  type: 'ADD_BLOG',
  blog: { id, title, body, postedAt, uId }
});

export const startAddBlog = blog => {
  return (dispatch, getState) => {
    return dispatch(addBlog(blog));
  };
};

const editBlog = (id, { title, body }) => ({
  type: 'EDIT_BLOG',
  id,
  updates: { title, body }
});

export const startEditBlog = (id, { title, body }) => {
  return (dispatch, getState) => {
    return dispatch(editBlog(id, { title, body }));
  };
};

const deleteBlog = id => ({ type: 'DELETE_BLOG', id });

export const startDeleteBlog = id => {
  return (dispatch, getState) => {
    return dispatch(deleteBlog(id));
  };
};
