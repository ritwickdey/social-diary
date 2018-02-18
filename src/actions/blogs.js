export const addBlog = ({
  id = 0,
  title = '',
  postedAt = Date.now(),
  body = ''
} = {}) => ({
  type: 'ADD_BLOG',
  blog: { id, title, body, postedAt }
});

export const editBlog = (id, { title, body }) => ({
  type: 'EDIT_BLOG',
  id,
  updates: { title, body }
});

export const deleteBlog = id => ({ type: 'DELETE_BLOG', id });
