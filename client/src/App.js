import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Course from './components/Courses'
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import Header from './components/Header';
//import context 
import withContext from './Context';
import PrivateRoute from './components/PrivateRoute';
const UserSignInWithContext = withContext(UserSignIn);
const HeaderContext = withContext(Header);
const App = () => {

  return (
    <Router>
      <HeaderContext />
      <Switch>
        <Route exact path="/" component={Course} />
        <PrivateRoute exact path="/courses/create" component={CreateCourse} />
        <Route path="/courses/:id" component={CourseDetail} />
        <Route path="/signup" component={UserSignUp} />
        <Route path="/signin" component={UserSignInWithContext} />
      </Switch>
    </Router>
  );
}

export default App;
