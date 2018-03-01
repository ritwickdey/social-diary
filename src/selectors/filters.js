import moment from 'moment';

export const filterStories = (stories = [], filters = {}) => {
  return stories
    .filter(story => {
      const isStartDateMatched = !filters.startDate
        ? true
        : moment(story.postedAt).isSameOrAfter(
            moment(filters.startDate),
            'day'
          );

      const isEndDateMatched = !filters.endDate
        ? true
        : moment(story.postedAt).isSameOrBefore(moment(filters.endDate), 'day');

      const isTextMatched = !filters.filterText
        ? true
        : story.title.toLowerCase().includes(filters.filterText.toLowerCase());

      return isStartDateMatched && isEndDateMatched && isTextMatched;
    })
    .sort((story1, story2) => {
      const orderBy = filters.orderBy === 'asc' ? 1 : -1;
      if (filters.sortBy === 'title') {
        return story1.title.toLowerCase() > story2.title.toLowerCase()
          ? orderBy
          : -orderBy;
      } else {
        return moment(story1.postedAt).isAfter(moment(story2.postedAt))
          ? orderBy
          : -orderBy;
      }
    });
};
