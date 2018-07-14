import React from "react";
import * as actions from "../actions";
import {connect} from "react-redux";

const Image = ({widget,preview,imgUrlChanged}) => {
    let inputElem
    return (
        <div>
            <div hidden={preview}>
                <input className="form-control" placehlder="Image Url"
                        onChange={()=>imgUrlChanged(widget.id,inputElem.value)}
                        value={widget.src}
                        ref={node => inputElem = node}/>

                <h3>Preview</h3>
            </div>
            <img src={widget.src}/>
        </div>
    )
}

const dispatchToPropsMapper = dispatch => ({
    imgUrlChanged: (widgetId,newUrl) => actions.imgUrlChanged(dispatch, widgetId, newUrl)
})

const stateToPropsMapper = state => ({
    preview: state.preview
})


export const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)