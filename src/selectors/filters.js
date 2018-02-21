import moment from 'moment';

export const filterBlogs = (blogs = [], filters = {}) => {
  return blogs
    .filter(blog => {
      const isStartDateMatched = !filters.startDate
        ? true
        : moment(blog.postedAt).isSameOrAfter(moment(filters.startDate));

      const isEndDateMatched = !filters.endDate
        ? true
        : moment(blog.postedAt).isSameOrBefore(moment(filters.endDate));

      const isTextMatched = !filters.filterText
        ? true
        : blog.title.toLowerCase().includes(filters.filterText.toLowerCase());

      return isStartDateMatched && isEndDateMatched && isTextMatched;
    })
    .sort((blog1, blog2) => {
      const orderBy = filters.orderBy === 'asc' ? 1 : -1;
      if (filters.sortBy === 'title') {
        return blog1.title.toLowerCase() > blog2.title.toLowerCase()
          ? orderBy
          : -orderBy;
      } else {
        return moment(blog1.postedAt).isAfter(moment(blog2.postedAt))
          ? orderBy
          : -orderBy;
      }
    });
};
