import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Course from './components/Courses'
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UserSignUp from './components/UserSignUp';

const App = () => {

  return (
    <Router>
      <Route exact path="/" component={Course} />
      <Route exact path="/courses/create" component={CreateCourse} />
      <Route path="/courses/:id" component={CourseDetail} />
      <Route path="/signup" component={UserSignUp} />
    </Router>
  );
}

export default App;
