import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Course from './components/Courses'
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import Header from './components/Header';
import UpdateCourse from './components/UpdateCourse';
//import context 
import withContext from './Context';
import PrivateRoute from './components/PrivateRoute';
const UserSignInWithContext = withContext(UserSignIn);
const HeaderContext = withContext(Header);
const UserSignOutWithConext = withContext(UserSignOut);
const UpdateCourseWithContext = withContext(UpdateCourse);

const App = () => {

  return (
    <Router>
      <HeaderContext />
      <Switch>
        <Route exact path="/" component={Course} />
        <Route path="/signup" component={UserSignUp} />
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signout" component={UserSignOutWithConext} />
        <PrivateRoute exact path="/courses/create" component={CreateCourse} />
        <Route exact path= "/courses/:id" component={CourseDetail} />
        <PrivateRoute path="/courses/:id/update" component={UpdateCourseWithContext} />
      </Switch>
    </Router>
  );
}

export default App;
