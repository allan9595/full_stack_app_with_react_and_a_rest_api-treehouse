import React, { Component } from 'react'
import axios from 'axios';
class UpdateCourse extends Component {
    state = {
        title: "",
        description: "",
        estimatedTime: "",
        materialsNeeded: ""
    }

    componentDidMount(){
        
        const id = this.props.match.params.id;
        if(id !== 'create'){
            axios.get(`http://localhost:5000/api/courses/${id}`)
                .then((course) => {
                    this.setState({
                        title: course.data.title,
                        description:course.data.description,
                        estimatedTime:course.data.estimatedTime,
                        materialsNeeded:course.data.materialsNeeded
                    })
                }).catch((e) => {
                    console.log(e)
            })
        }
    }
    //submit the form to create a course
    handleSubmit = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const { title , description, estimatedTime, materialsNeeded } = this.state;
        axios.put(`http://localhost:5000/courses/${id}`, {title, description, estimatedTime, materialsNeeded})
            .then(() => {
                this.props.history.push('/') //redirect back to the main courses page
            })
            .catch((e) => {
                console.log(e);
            })

    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    handleCancel = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div>
                <div className="bounds course--detail">
                    <h1>Update Course</h1>
                    <div>
                        <div>
                            <h2 className="validation--errors--label">Validation errors</h2>
                            <div className="validation-errors">
                            <ul>
                                <li>Please provide a value for "Title"</li>
                                <li>Please provide a value for "Description"</li>
                            </ul>
                            </div>
                        </div>
                            <form>
                                <div className="grid-66">
                                    <div className="course--header">
                                        <h4 className="course--label">Course</h4>
                                        <div>
                                            <input 
                                                id="title" 
                                                name="title" 
                                                type="text" 
                                                className="input-title course--title--input" 
                                                placeholder="Course title..."
                                                value={this.state.title}
                                                onChange={this.handleChange} 
                                            />
                                        </div>
                                        <p>By Joe Smith</p>
                                    </div>
                                    <div className="course--description">
                                        <div>
                                            <textarea 
                                                id="description" 
                                                name="description" 
                                                className="" 
                                                placeholder="Course description..."
                                                value={this.state.description}
                                                onChange={this.handleChange}
                                            >
                                            </textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-25 grid-right">
                                    <div className="course--stats">
                                        <ul className="course--stats--list">
                                        <li className="course--stats--list--item">
                                            <h4>Estimated Time</h4>
                                            <div>
                                                <input 
                                                    id="estimatedTime" 
                                                    name="estimatedTime" 
                                                    type="text" 
                                                    className="course--time--input"
                                                    placeholder="Hours" 
                                                    value={this.state.estimatedTime}
                                                    onChange={this.handleChange}
                                                />
                                                </div>
                                        </li>
                                        <li className="course--stats--list--item">
                                            <h4>Materials Needed</h4>
                                            <div>
                                                <textarea 
                                                    id="materialsNeeded" 
                                                    name="materialsNeeded" 
                                                    className="" 
                                                    placeholder="List materials..."
                                                    value={this.state.materialsNeeded}
                                                    onChange={this.handleChange}
                                                >
                                                </textarea>
                                            </div>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid-100 pad-bottom">
                                    <button 
                                        className="button" 
                                        type="submit"
                                        onClick={this.handleSubmit}
                                    >
                                        Create Course
                                    </button>
                                    <button 
                                        className="button button-secondary" 
                                        onClick={this.handleCancel}
                                    >
                                    Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateCourse;
