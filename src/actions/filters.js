export const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

export const setAscOrder = () => ({
  type: 'SET_ASC_ORDER_BY'
});

export const setDescOrder = () => ({
  type: 'SET_DESC_ORDER_BY'
});

export const setFilterText = filterText => ({
  type: 'SET_FILTER_TEXT',
  filterText
});

export const setSortByDate = () => ({
  type: 'SET_SORT_BY_DATE'
});

export const setSortByTitle = () => ({
  type: 'SET_SORT_BY_TITLE'
});
