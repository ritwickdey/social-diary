const defaultFilterBlogState = () => ({
  filterText: '',
  startDate: undefined,
  endDate: undefined,
  orderBy: 'asc'
});

export const filterBlogReducers = (
  state = defaultFilterBlogState(),
  action
) => {
  switch (action.type) {
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    case 'SET_ASC_ORDER_BY':
      return { ...state, orderBy: 'asc' };
    case 'SET_DESC_ORDER_BY':
      return { ...state, orderBy: 'desc' };
    case 'SET_FILTER_TEXT':
      return { ...state, filterText: action.filterText };
    default:
      return { ...state };
  }
};
