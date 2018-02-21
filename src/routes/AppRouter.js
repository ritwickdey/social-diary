import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MyBlogPage } from '../components/myBlogPage';
import { NotFoundPage } from '../components/NotFoundPage';
import  DashboardPage  from '../components/DashboardPage';
import LoginPage from '../components/LoginPage';
import EditBlogPage from '../components/EditBlogPage';
import AddBlogPage from '../components/AddBlogPage';
import Header from '../components/Header';

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/create" component={AddBlogPage} />
        <Route path="/edit/:id" component={EditBlogPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/myBlogs" component={MyBlogPage} />
        <Route component={NotFoundPage} />
        <Route />
      </Switch>
    </div>
  </BrowserRouter>
);
