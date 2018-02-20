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

  render() {
    return (
      <div>
        <input type="text" placeholder="search" />
        <select name="sortBy">
          <option value="name">Name</option>
          <option value="date">Date</option>
        </select>
        <select name="orderBy">
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
