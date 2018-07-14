import * as constants from "../constants";
const WIDGET_API_URL1 = 'http://localhost:8080/api/widgets';
const WIDGET_API_URL2 ='http://localhost:8080/api/lesson/LID/widgets'

//const WIDGET_API_URL1 = 'https://tanvi-webdev-react.herokuapp.com/api/widgets';
//const WIDGET_API_URL2 = 'https://tanvi-webdev-react.herokuapp.com/api/lesson/LID/widgets'

export const headingSizeChanged = (dispatch, widgetId, newSize) => (
    dispatch({
        type:constants.HEADING_SIZE_CHANGED,
        id:widgetId,
        size:newSize})
)
export const headingTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type:constants.HEADING_TEXT_CHANGED,
        id:widgetId,
        text:newText})
)

export const imgUrlChanged = (dispatch, widgetId, newUrl) => (
    dispatch({
        type:constants.IMG_URL_CHANGED,
        id:widgetId,
        text:newUrl
    })
)

export const paragraphTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.PARAGRAPH_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

export const hrefChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.HREF_CHANGED,
        id: widgetId,
        text: newText})
)

export const listItemChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LIST_ITEM_CHANGED,
        id: widgetId,
        text: newText})
)

export const listTypeChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LIST_TYPE_CHANGED,
        id: widgetId,
        text: newText})
)

export const linkTextChanged = (dispatch, widgetId, newText) => (
    dispatch({
        type: constants.LINK_TEXT_CHANGED,
        id: widgetId,
        text: newText})
)

export const findAllWidgets = dispatch => {
    fetch(WIDGET_API_URL1)
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets}))
}

export const findAllWidgetsForLesson = (dispatch, lessonId) => {
    fetch(WIDGET_API_URL2.replace('LID',lessonId))
        .then(response => (response.json()))
        .then(widgets => dispatch({
            type: constants.FIND_ALL_WIDGETS_FOR_LESSON,
            widgets: widgets }))
}

export const addWidget = dispatch =>{
    dispatch({type: constants.ADD_WIDGET})
}

export const save = (dispatch, lessonId) =>{
    dispatch({type: constants.SAVE, lessonId:lessonId})
}

export const preview = dispatch => (
    dispatch({type: constants.PREVIEW})
)
