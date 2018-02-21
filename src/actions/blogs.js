import { db } from '../firebase/firestore';

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
    blog.uId = getState().user.uid;
    db
      .collection('/blogs')
      .add(blog)
      .then(result => {
        blog.id = result.id;
        return dispatch(addBlog(blog));
      });
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

const setBlogs = blogs => ({ type: 'SET_BLOGS', blogs });

export const startSetBlogs = () => {
  return dispatch =>
    db
      .collection('/blogs')
      .get()
      .then(results => {
        const blogs = [];
        results.forEach(e => blogs.push({ ...e.data(), id: e.id }));
        return dispatch(setBlogs(blogs));
      });
};
