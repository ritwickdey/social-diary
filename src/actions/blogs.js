export const addBlog = ({
  id = Date.now(),
  title = '',
  postedAt = Date.now(),
  body = '',
  uId = ''
} = {}) => ({
  type: 'ADD_BLOG',
  blog: { id, title, body, postedAt, uId }
});

export const editBlog = (id, { title, body }) => ({
  type: 'EDIT_BLOG',
  id,
  updates: { title, body }
});

export const deleteBlog = id => ({ type: 'DELETE_BLOG', id });
