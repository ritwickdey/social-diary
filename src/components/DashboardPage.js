import React from 'react';
import BlogList from './BlogList';
import FilterPage from './filterPage';

export class DashboardPage extends React.Component {
  render() {
    return (
      <div>
        <FilterPage />
        <BlogList />
      </div>
    );
  }
}
