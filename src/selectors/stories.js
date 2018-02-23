export const getMyStories = (stories = [], uid) =>
  stories.filter(story => story.uId === uid);
