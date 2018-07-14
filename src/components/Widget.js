import React from 'react';
import {connect} from "react-redux";
import * as constants from "../constants";
import * as actions from '../actions';
import {HeadingContainer} from "./Heading";
import {ParagraphContainer} from "./Paragraph";
import {ImageContainer} from "./Image";
import {LinkContainer} from "./Link";
import {ListContainer} from "./List";

const Widget = ({widget,widgetsLength,preview,dispatch}) => {
    let inputElement
    let selectElement
    return(
        <div>
            <div className="container-fluid">
                <div hidden={preview}>
                    <h3>{widget.widgetType} &nbsp;</h3>
                    <br/>
                    <div className="pull-left">
                        <select className="form-control" value={widget.widgetType}
                                onChange={e => dispatch({
                            type:'SELECT_WIDGET_TYPE',
                            id:widget.id,
                            widgetType: selectElement.value
                        })} ref={node=> selectElement = node}>
                            <option>Heading</option>
                            <option>Paragraph</option>
                            <option>List</option>
                            <option>Image</option>
                            <option>Link</option>
                        </select>
                        &nbsp;
                    </div>
                    <div className="pull-right">
                        <button className="btn btn-danger" onClick={e => (
                            dispatch({type: constants.DELETE_WIDGET,
                                id:widget.id,
                                widgetOrder: widget.widgetOrder})
                        )}>Delete</button>
                            &nbsp;

                        <button style={{backgroundColor: "#ffcc00"}} disabled={widget.widgetOrder === 1} onClick={
                            e => (dispatch({type: constants.MOVE_UP, id: widget.id, widgetOrder: widget.widgetOrder}))}>
                            <i className="fa fa-caret-up"></i>
                        </button>
                        &nbsp;

                        <button style={{backgroundColor: "#ffcc00"}} disabled={widget.widgetOrder === widgetsLength}
                                onClick={
                                    e => (dispatch({
                                        type: constants.MOVE_DOWN,
                                        id: widget.id,
                                        widgetOrder: widget.widgetOrder
                                    }))}>
                            <i className="fa fa-caret-down"></i>
                        </button>

                    </div>
                    <br/>
                    <input className="form-control" placeholder="Widget Name"
                           value={widget.name}
                           onChange={e =>
                               dispatch({
                                   type: constants.WIDGET_NAME_CHANGED,
                                   id: widget.id,
                                   name: inputElement.value
                               })} ref={node => inputElement = node}/>
                </div>
                <br/>
                <div>
                    {widget.widgetType === 'Heading' && <HeadingContainer widget={widget}/>}
                    {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}/>}
                    {widget.widgetType === 'List' && <ListContainer widget={widget}/>}
                    {widget.widgetType === 'Link' && <LinkContainer widget={widget}/>}
                    {widget.widgetType === 'Image' && <ImageContainer widget={widget}/>}
                </div>
            </div>
        </div>
    )
}

export const WidgetContainer = connect(state => ({
    preview: state.preview
}))(Widget);
