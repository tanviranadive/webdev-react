import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

const Heading = ({widget, preview, headingSizeChanged, headingTextChanged}) => {
    let selectElem
    let inputElem
    return (
        <div>
            <div className="form-group" hidden={preview}>
                <input className="form-control"
                       onChange={() => headingTextChanged(widget.id,inputElem.value)}
                       value={widget.text}
                       placeholder="Heading Text"
                       ref={node => inputElem = node}/>
                <br/>
                <select className="form-control"
                        onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <br/>
                <h3>Preview</h3>
            </div>
            {widget.size == 1 && <h1>{widget.text}</h1>}
            {widget.size == 2 && <h2>{widget.text}</h2>}
            {widget.size == 3 && <h3>{widget.text}</h3>}
        </div>)
}

const dispatchToPropsMapper = dispatch => ({
    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),

    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize)
})

const stateToPropsMapper = state => ({
    preview: state.preview
})

export const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)