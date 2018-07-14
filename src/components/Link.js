import React from "react";
import * as actions from "../actions";
import {connect} from "react-redux";

const Link = ({widget, preview, hrefChanged, linkTextChanged}) => {
    let inputElem
    let linkElem
    return (
        <div>
            <div hidden={preview}>
                <input className="form-control" placeholder="Link Url"
                       onChange={() => hrefChanged(widget.id, inputElem.value)}
                       value={widget.href}
                       ref={node => inputElem = node}/>
                <br/>
                <input className="form-control" placeholder="Link Text"
                       onChange={() => linkTextChanged(widget.id, linkElem.value)}
                       value={widget.text}
                       ref={node => linkElem = node}/>

                <h3>Preview</h3>
            </div>
            <a href={widget.href}>{widget.text}</a>
        </div>

    )
}

const dispatchToPropsMapper = dispatch => ({

    hrefChanged: (widgetId, newText) =>
        actions.hrefChanged(dispatch, widgetId, newText),
    linkTextChanged: (widgetId, newText) =>
        actions.linkTextChanged(dispatch, widgetId, newText)

})

const stateToPropsMapper = state => ({
    preview: state.preview
})

export const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)