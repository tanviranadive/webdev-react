import React from 'react'
import ReactDOM from 'react-dom'
import CourseManager from './containers/CourseManager'
import CourseCard from './components/CourseCard'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Hello from './components/Hello'
import ModuleListItem from "./components/ModuleListItem";
import ModuleList from "./containers/ModuleList"
import App from "./examples/App"

ReactDOM.render(
    /*{<div className="container-fluid">
        <App/>
        <ModuleList/>
        <Hello message="hello there"/>
    </div>,}*/
    <CourseManager/>,
    document.getElementById('root')
);
