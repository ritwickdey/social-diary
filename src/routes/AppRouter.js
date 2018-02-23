import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import NotFoundPage from '../components/NotFoundPage';
import MyStoryPage from '../components/MyStoryPage';
import DashboardPage from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import EditStoryPage from '../components/EditStoryPage';
import AddStoryPage from '../components/AddStoryPage';
import Header from '../components/Header';
import ReadStoryPage from '../components/ReadStoryPage';
import PrivateRoute from './PrivateRoute';
import AnonymousRoute from './AnonymousRoute';

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" component={DashboardPage} />
        <AnonymousRoute path="/login" component={LoginPage} />
        <Route path="/read/:id" component={ReadStoryPage} />
        <PrivateRoute path="/create" component={AddStoryPage} />
        <PrivateRoute path="/edit/:id" component={EditStoryPage} />
        <PrivateRoute path="/myStory" component={MyStoryPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
