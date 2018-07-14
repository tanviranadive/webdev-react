import React from 'react';
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';
import ModuleEditor from '../containers/ModuleEditor';
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default class ModuleList
    extends React.Component {
    constructor(props) { super(props);
        this.state = {
            courseId: '',
            module: { title: '' },
            modules: []
        };
        this.moduleService = ModuleService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.deleteModule = this.deleteModule.bind(this);

    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }

    setModules(modules) {
        this.setState({modules: modules})
    }

    titleChanged(event) {
        console.log(event.target.value);
        this.setState({module: {title: event.target.value}});
    }

    createModule() {
        console.log(this.state.module);
        this.moduleService
            .createModule(this.props.courseId, this.state.module)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId);
            })
    }

    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    renderListOfModules(){
        let modules = this.state.modules.map((module)=>{
            return <ModuleListItem module={module} key={module.id}
                                   courseId={this.state.courseId}
                                   delete={this.deleteModule}/>
        })
        return <ul className="list-group">{modules}</ul>;
    }

    render() { return (
        <Router>
            <div className="row">
                <div className="col-4 bg-light">
                    <br/>
                    <h4>Modules for courseId: {this.state.courseId}</h4>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>
                                <input className="form-control"
                                       onChange={this.titleChanged}
                                       value={this.state.module.title}
                                       placeholder="title"/>
                            </td>
                            <td>
                            <button className="btn btn-primary btn-block"
                                    onClick={this.createModule}>
                                <i className="fa fa-plus"></i>
                            </button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    {this.renderListOfModules()}
                <br/>
                </div>
                <div className="col-8">
                    <Route path="/course/:courseId/module/:moduleId"
                           component={ModuleEditor}/>
                </div>
            </div>
        </Router>
    );}}
