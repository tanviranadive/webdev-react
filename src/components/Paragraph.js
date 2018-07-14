import React from "react";
import * as actions from "../actions";
import {connect} from "react-redux";

const Paragraph = ({widget,preview,paragraphTextChanged}) => {
    let inputElem
    return (
        <div>
            <div hidden={preview}>
                <textarea className="form-control"
                          rows="10" cols="40"
                          placeholder="Paragraph Text"
                            onChange={() => paragraphTextChanged(widget.id,inputElem.value)}
                            value={widget.text}
                            ref={node => inputElem = node}/>
                <h3>Preview</h3>
            </div>
            <p>{widget.text}</p>
        </div>
    )
}

const dispatchToPropsMapper = dispatch => ({

    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),

})

const stateToPropsMapper = state => ({
    preview: state.preview
})

export const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)