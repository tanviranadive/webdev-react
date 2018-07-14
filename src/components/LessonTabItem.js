import React from 'react';
import {Link} from 'react-router-dom';

export default class LessonTabItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props);
        return (
            <li className="nav-item btn bg-light">
                <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>
                    {this.props.lesson.title}
                </Link>
                <div className="pull-right">
                    <button className="btn bg-transparent" onClick={() => {
                        this.props.delete(this.props.lesson.id)}}>
                        <i className="fa fa-times"></i></button>
                </div>
            </li>
        )
    }
}