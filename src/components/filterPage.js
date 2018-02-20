import React from 'react';
import { connect } from 'react-redux';

const FilterPage = () => {
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
    </div>
  );
};

export default connect()(FilterPage);
