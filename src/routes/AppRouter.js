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

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/create" component={AddStoryPage} />
        <Route path="/edit/:id" component={EditStoryPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/myStory" component={MyStoryPage} />
        <Route path="/read/:id" component={ReadStoryPage} />
        <Route component={NotFoundPage} />
        <Route />
      </Switch>
    </div>
  </BrowserRouter>
);
