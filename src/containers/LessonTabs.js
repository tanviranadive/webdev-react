import React from 'react';
import TopicPills from './TopicPills';
import LessonService from '../services/LessonService';
import LessonTabItem from '../components/LessonTabItem';

export default class LessonTabs
    extends React.Component {
    constructor(props){
        super(props);

        this.state={
            moduleId: '',
            courseId:'',
            lesson:{title:''},
            lessons:[]
        }

        this.lessonService = LessonService.instance;

        this.setModuleId =
            this.setModuleId.bind(this);
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setLessonTitle =
            this.setLessonTitle.bind(this);
        this.createLesson =
            this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setLessonTitle(event) {
        this.setState({
            lesson: {title: event.target.value}
        })
    }

    createLesson(){
        this.lessonService
            .createLesson(this.state.courseId,this.state.moduleId,this.state.lesson)
            .then(()=>{
                this.findAllLessonsForModule(this.state.courseId,this.state.moduleId);
                })

    }

    deleteLesson(lessonId) {
        this.lessonService
            .deleteLesson(lessonId)
            .then(() => {
                this.findAllLessonsForModule
                (this.state.courseId,this.state.moduleId)
            });
    }

    findAllLessonsForModule(courseId, moduleId){
        this.lessonService
            .findAllLessonsForModule(courseId,moduleId)
            .then((lessons)=>{
                this.setLessons(lessons)
            })
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }

    componentDidMount(){
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps){
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.findAllLessonsForModule(newProps.courseId,newProps.moduleId)
    }

    renderLessons(){
        console.log(this.props)
        let lessons = this.state.lessons.map((lesson)=>{
            return(
                <LessonTabItem key={lesson.id}
                            lesson={lesson}
                            moduleId={this.props.moduleId}
                            courseId={this.props.courseId}
                            delete={this.deleteLesson}/>
            )
        })

        return (
            <nav>
                <ul className="nav nav-pills nav-justified">
                    {lessons}
                </ul>
            </nav>
        )
    }

    render() {
        console.log(this.state)
        return(
        <div className="container-fluid">
            <table className="table">
                <tbody>
                <tr>
                    <td>
                        <input value={this.state.lesson.title} className="form-control"
                                placeholder="New Lesson" onChange={this.setLessonTitle}/>
                    </td>
                    <td>
                        <button onClick={this.createLesson} className="btn btn-primary">Create</button>
                    </td>
                </tr>
                </tbody>
            </table>
            {this.renderLessons()}
        </div>
    );}}
