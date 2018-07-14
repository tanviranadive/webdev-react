import * as constants from "../constants/index";

const WIDGET_API_URL ='http://localhost:8080/api/lesson/LID/widgets'
//const WIDGET_API_URL = 'https://tanvi-webdev-react.herokuapp.com/api/lesson/LID/widgets'

export const widgetReducer = (state = {widgets: [], preview:false}, action) =>{
    let newState
    switch(action.type){

        case constants.LINK_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.WIDGET_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LIST_TYPE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listType = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.LIST_ITEM_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listItem = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HREF_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.href = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.IMG_URL_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.src = action.text
                    }
                    return Object.assign({}, widget)
                })
            }
        case constants.PARAGRAPH_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.FIND_ALL_WIDGETS_FOR_LESSON:
            console.log(action.widgets)
            return {
                widgets: action.widgets,
                lessonId: action.lessonId
            }

        case constants.PREVIEW:
            newState = Object.assign({},state)
            newState.preview = !state.preview
            return newState

        case constants.HEADING_TEXT_CHANGED:
            return{
                widgets: state.widgets.map(widget => {
                    if(widget.id===action.id){
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.HEADING_SIZE_CHANGED:
            return{
                widgets: state.widgets.map(widget => {
                    if(widget.id===action.id){
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                })
            }

        case constants.SELECT_WIDGET_TYPE:
            let newState = {
                widgets:state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState))

        case constants.SAVE:
            fetch(WIDGET_API_URL.replace('LID', action.lessonId),{
                method:'post',
                body:JSON.stringify(state.widgets),
                headers:{
                    'content-type':'application/json'}
            })
            return state

        case constants.FIND_ALL_WIDGETS:
            console.log(action.widgets)
            return {
                widgets: action.widgets
            }

        case constants.DELETE_WIDGET:
            return {
                widgets:state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }

        case constants.ADD_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length + 1,
                        text: "",
                        widgetType: 'Heading',
                        size: '1',
                        widgetOrder: state.widgets.length + 1,
                        listType: 'Unordered List',
                        listItem: "Put each\nItem on\nSeperate row",
                        name: "Widget Name"

                    }
                ]
            }

        case constants.DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id)).map(widget => {
                    if (widget.widgetOrder > action.widgetOrder)
                        widget.widgetOrder = widget.widgetOrder - 1
                    return widget;
                })
            }
        default: return state

        case constants.MOVE_UP:
            let newState2 = {
                widgets: state.widgets.map(widget => {
                    if (widget.widgetOrder === (action.widgetOrder - 1))
                        widget.widgetOrder = widget.widgetOrder + 1
                    if (widget.id === action.id)
                        widget.widgetOrder = widget.widgetOrder - 1
                    return Object.assign({}, widget)
                })
            }
            return Object.assign({}, newState2)

        case constants.MOVE_DOWN:
            let newState3 = {
                widgets: state.widgets.map(widget => {
                    if (widget.widgetOrder === (action.widgetOrder + 1))
                        widget.widgetOrder = widget.widgetOrder - 1
                    if (widget.id === action.id)
                        widget.widgetOrder = widget.widgetOrder + 1
                    return Object.assign({}, widget)
                })
            }
            return Object.assign({}, newState3)

    }
}

//export default widgetReducer;