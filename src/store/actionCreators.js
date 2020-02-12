import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_ITEM_LIST } from './actionTypes'
import axios from "axios";

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

export const getTodoListAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:7300/mock/5e43f751ab15b50026da987b/hongzhuang/getItemList')
            .then((res) => {
                const data = res.data
                const action = getItemListAction(data)
                dispatch(action)
            });
    }
}