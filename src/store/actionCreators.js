import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM,GET_ITEM_LIST } from './actionTypes'
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})

export const getItemListAction = (data) => ({
    type: GET_ITEM_LIST,
    data
})