import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Course from './components/Courses'
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';

const App = () => {

  return (
    <Router>
      <Route exact path="/" component={Course} />
      <Route  path="/courses/:id" component={CourseDetail} />
      <Route  path="/courses/create" component={CreateCourse} />
    </Router>
  );
}

export default App;
