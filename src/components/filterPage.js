import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import {
  setAscOrder,
  setDescOrder,
  setEndDate,
  setFilterText,
  setSortByDate,
  setSortByTitle,
  setStartDate
} from '../actions/filters';

class FilterPage extends Component {
  state = {
    calenderFocus: null
  };
  onDateChangeHandle = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onCalenderFocusChange = calenderFocus => this.setState({ calenderFocus });

  onSearchTextChange = e => {
    const text = e.target.value || '';
    const trimmedText = text.trim();
    if (trimmedText) this.props.setFilterText(text);
    else this.props.setFilterText('');
  };

  onSortByChanges = e => {
    if (e.target.value === 'title') this.props.setSortByTitle();
    else this.props.setSortByDate();
  };

  onOrderByChange = e => {
    if (e.target.value === 'desc') this.props.setDescOrder();
    else this.props.setAscOrder();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.filterText}
          onChange={this.onSearchTextChange}
          placeholder="search"
        />
        <select
          onChange={this.onSortByChanges}
          value={this.props.filters.sortBy}
          name="sortBy"
        >
          <option value="date">Date</option>
          <option value="title">Title</option>
        </select>
        <select
          onChange={this.onOrderByChange}
          value={this.props.filters.orderBy}
          name="orderBy"
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="filterStartDateId"
          endDate={this.props.filters.endDate}
          endDateId="filterEndDateId"
          onDatesChange={this.onDateChangeHandle}
          isOutsideRange={() => false}
          numberOfMonths={1}
          focusedInput={this.state.calenderFocus}
          onFocusChange={this.onCalenderFocusChange}
          displayFormat="DD/MM/YYYY"
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProp = state => ({
  filters: state.filters
});

const mapDispatchToProp = dispatch => ({
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  setFilterText: filterText => dispatch(setFilterText(filterText)),
  setAscOrder: () => dispatch(setAscOrder()),
  setDescOrder: () => dispatch(setDescOrder()),
  setSortByDate: () => dispatch(setSortByDate()),
  setSortByTitle: () => dispatch(setSortByTitle())
});

export default connect(mapStateToProp, mapDispatchToProp)(FilterPage);
