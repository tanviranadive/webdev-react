import React, {Component} from 'react'
import CourseCard from "../components/CourseCard";
import CourseEditor from "./CourseEditor";
import CourseList from './CourseList';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import LessonTabs from "./LessonTabs";
import ModuleList from "./ModuleList";

export default class CourseManager extends Component{
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-fixed-top navbar-expand-md navbar-dark bg-dark">
                            <a href="/courses" className="navbar-brand mr-auto" style={{"text-align":"center"}}>Course Manager</a>
                    </nav>
                    <br/>
                    <div class="container-fluid">
                        <Route path="/courses"
                                component={CourseList}>
                        </Route>

                        <Route path="/course/:courseId/edit"
                               component={CourseEditor}>
                        </Route>
                    </div>

                    {/*<br/>
                    <CourseEditor/>
                    <br/>*/}
                    {/*<Route path="/examples">
                        <div>
                        <div className="card-deck">
                            <CourseCard/>
                            <CourseCard/>
                            <CourseCard/>
                            <CourseCard/>
                        </div>
                        <br/>
                        <CourseEditor/>
                        <br/>
                        <LessonTabs/>
                        <ModuleList/>
                        </div>
                    </Route>*/}
                </div>
            </Router>
        )
    }
}