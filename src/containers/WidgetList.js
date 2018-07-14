import React from 'react';
import {Component} from "react";
import * as actions from "../actions";
import {connect} from "react-redux";
import {WidgetContainer} from '../components/Widget'
import ToggleButton from 'react-toggle-button'

class WidgetList extends Component {
    constructor(props){
        super(props);
        //this.props.findAllWidgets()
    }

    componentDidMount(){}

    componentWillReceiveProps(newProps){
        if (newProps.lessonId !== this.props.lessonId) {
            this.props.findAllWidgetsForLesson(newProps.lessonId);
        }
    }
    render(){
        return (
            <div>
                <div className="row">
                    <button className="btn btn-primary" hidden={this.props.previewMode}
                            onClick={()=> this.props.save(this.props.lessonId)}>
                        Save</button>
                    &nbsp; &nbsp;
                    <ToggleButton value={this.props.previewMode}
                                  onToggle={this.props.preview}>Preview</ToggleButton>
                    &nbsp; &nbsp;
                    <h4>Preview</h4>
                </div>
                <br/>
                <br/>
                <div className="container-fluid">
                    {this.props.widgets.sort((widget1,widget2)=>
                    widget1.widgetOrder > widget2.widgetOrder).map(widget =>
                        <WidgetContainer key={widget.id}
                                         widget={widget}
                                         widgetsLength={this.props.widgets.length}
                                         />
                    )}
                </div>
                <br/>
                <button className="btn btn-primary" onClick={this.props.addWidget}>Add Widget</button>
            </div>
        )
    }
}

const stateToPropertiesMapper = (state) => (
    {
        widgets: state.widgets,
        previewMode: state.preview
    }
)

const dispatcherToPropsMapper = dispatch => ({
    findAllWidgets: () => actions.findAllWidgets(dispatch),
    addWidget: () => actions.addWidget(dispatch),
    save: (lessonId) => actions.save(dispatch, lessonId),
    preview: () => actions.preview(dispatch),
    findAllWidgetsForLesson: (lessonId) => actions.findAllWidgetsForLesson(dispatch, lessonId)
})

export const App = connect(stateToPropertiesMapper,
    dispatcherToPropsMapper)( WidgetList)