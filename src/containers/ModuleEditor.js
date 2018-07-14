import React from 'react';
import LessonTabs from "./LessonTabs";
import LessonEditor from './LessonEditor';
import {BrowserRouter as Router,Route} from 'react-router-dom';

export default class ModuleEditor
    extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            courseId: '',
            moduleId: ''
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
    }

    componentDidMount(){
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
    }

    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-light bg-light">
                    <h1>Module Editor Course Id: {this.state.courseId} Module Id: {this.state.moduleId}</h1>
                </nav>
                <LessonTabs moduleId={this.state.moduleId} courseId={this.state.courseId}/>
                <div className="tab-content">
                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId" component={LessonEditor}/>
                </div>
            </div>

    )}}
