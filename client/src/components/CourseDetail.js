import React , { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ReactMarkdown = require('react-markdown');

class CourseDetail extends Component {
    state = {
        course: [],
        errors:""
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        if(id !== 'create'){
            axios.get(`http://localhost:5000/api/courses/${id}`)
                .then((course) => {
                    this.setState({
                        course: course.data
                    })
                    if(!course){
                        
                    }
                    
                }).catch((e) => {
                    if(e){
                        this.props.history.push('/notfound')
                    }
            })
        }
    }

    deleteCourse = () => {
        const id = this.props.match.params.id;
        const context = this.props.context;

        const axiosInstance = axios.create({
            baseURL:`http://localhost:5000`,
            headers: {
                "Authorization": `Basic ${context.encodedCredentials}`,
                "Content-Type": "application/json"
            }
        });
        axiosInstance.delete(`/api/courses/${id}`)
            .then(() => {
                this.props.history.push('/')
            })
            .catch((e) => {
                this.setState({
                    errors: e.response.data.errors //catch the err in the response object
                })
                //if unaut, then forbidden to access the resources
                if(e.response.status === 401){
                    this.props.history.push('/forbidden')
                }
        })
    }
    render(){
        if (!this.state.course.User) {
            return null;
        } //if the data hasn't been async into state yet, return null to prevent error throwing
        const id = this.props.match.params.id;
        const context = this.props.context;
      
        return(
        
        <div className="bounds course--detail">
            <div className="grid-66">
                <div className="course--header">
                {(context.authUser 
                && 
                (context.authUser.id === this.state.course.User.id)) ? (
                     <div className="actions--bar">
                     <div className="bounds">
                         <div className="grid-100">
                             <span>
                                 <Link to={`/courses/${id}/update`} className="button a1" >
                                     Update Course
                                 </Link>
                                 
                                 <button 
                                     className="button" 
                                     onClick={this.deleteCourse}
                                 >
                                     Delete Course
                                 </button>
                                 <Link to={`/`} className="button button-secondary a1" >
                                     Return to List
                                 </Link>
                             </span>
                         </div>
                         </div>
                     </div>
                ): null
            }
               
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