import React from "react";
import * as actions from "../actions";
import {connect} from "react-redux";

const List = ({widget, preview, listItemChanged, listTypeChanged}) => {
    let inputElem
    let selectElem
    return (
        <div>
            <div hidden={preview}>
                <textarea rows="10" column="50" className="form-control"
                          onChange={() => listItemChanged(widget.id, inputElem.value)}
                          value={widget.listItem}
                          ref={node => inputElem = node}/>
                <br/>

                <select className="form-control" onChange={() => listTypeChanged(widget.id, selectElem.value)}
                        value={widget.listType}
                        ref={node => selectElem = node}>
                    <option>Unordered List</option>
                    <option>Ordered List</option>
                </select>
                <h3>Preview</h3>
            </div>
            {widget.listType === 'Unordered List' && <UnorderedList listItem={widget.listItem}/>}
            {widget.listType === 'Ordered List' && <OrderedList listItem={widget.listItem}/>}
        </div>
    )
}

const UnorderedList = ({listItem}) => {
    let lineNum = 0
    return (
        <div>
            <ul>
                {listItem.split("\n").map((item) => (
                    <li key={++lineNum}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

const OrderedList = ({listItem}) => {
    let linenumber = 0
    return (
        <div>
            <ol>
                {listItem.split("\n").map((item) => (
                    <li key={++linenumber}>{item}</li>
                ))}
            </ol>
        </div>)
}

const dispatchToPropsMapper = dispatch => ({

    listItemChanged: (widgetId, newText) =>
        actions.listItemChanged(dispatch, widgetId, newText),
    listTypeChanged: (widgetId, newText) =>
        actions.listTypeChanged(dispatch, widgetId, newText),

})

const stateToPropsMapper = state => ({
    preview: state.preview
})
export const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List)