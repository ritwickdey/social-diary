export const getMyBlogs = (blogs = [], uid) =>
  blogs.filter(blog => blog.uId === uid);
