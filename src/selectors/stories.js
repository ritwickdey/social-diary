export const getMyStories = (blogs = [], uid) =>
  blogs.filter(blog => blog.uId === uid);
