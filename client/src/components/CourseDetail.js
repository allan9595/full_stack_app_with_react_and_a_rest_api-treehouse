import React , { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const ReactMarkdown = require('react-markdown');

class CourseDetail extends Component {
    state = {
        course: []
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        if(id !== 'create'){
            axios.get(`http://localhost:5000/api/courses/${id}`)
                .then((course) => {
                    this.setState({
                        course: course.data
                    })
                }).catch((e) => {
                    console.log(e)
            })
        }
    }

    deleteCourse = () => {

    }
    render(){
        if (!this.state.course.User) {
            return null;
        } //if the data hasn't been async into state yet, return null to prevent error throwing
        const id = this.props.match.params.id;
        return(
        
        <div className="bounds course--detail">
            <div className="grid-66">
                <div className="course--header">
                <div className="actions--bar">
                    <div className="bounds">
                        <div className="grid-100">
                            <span>
                                <Link to={`/courses/${id}/update`} className="button a1" >
                                    Update Course
                                </Link>
                                
                                {this.deleteCourse()}
                                <Link to={`/`} className="button button-secondary a1" >
                                    Return to List
                                </Link>
                            </span>
                        </div>
                        </div>
                    </div>
                    <h4 className="course--label">Course</h4>
                    <h3 className="course--title">{this.state.course.title}</h3>
                    <p>By {this.state.course.User.firstName} {this.state.course.User.lastName}</p>
                </div>
                <div className="course--description">
                    <ReactMarkdown source={this.state.course.description} />
                </div>
            </div>
            <div className="grid-25 grid-right">
                <div className="course--stats">
                <ul className="course--stats--list">
                    <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <h3>{this.state.course.estimatedTime}</h3>
                    </li>
                    <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <ul>
                        <li>
                            <ReactMarkdown source={this.state.course.materialsNeeded} />
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
          </div>
        )
    }
}

export default CourseDetail;