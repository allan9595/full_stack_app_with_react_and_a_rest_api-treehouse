import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Course from './components/Courses'
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';

//import context 
import withContext from './Context';

const UserSignInWithContext = withContext(UserSignIn);

const App = () => {

  return (
    <Router>
      <Route exact path="/" component={Course} />
      <Route exact path="/courses/create" component={CreateCourse} />
      <Route path="/courses/:id" component={CourseDetail} />
      <Route path="/signup" component={UserSignUp} />
      <Route path="/signin" component={UserSignInWithContext} />
    </Router>
  );
}

export default App;
