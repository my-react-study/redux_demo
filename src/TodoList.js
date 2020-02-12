import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getItemListAction } from "./store/actionCreators";
import TodoListUI from './TodoListUI';
import axios from "axios";


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange) //订阅Redux的状态
    }

    componentDidMount() {
        axios.get('http://localhost:7300/mock/5e43f751ab15b50026da987b/hongzhuang/getItemList').then((res) => {
            const data = res.data
            const action = getItemListAction(data)
            store.dispatch(action)
        });
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                list={this.state.list}
                deleteItem={this.deleteItem}
            />
        );
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    addItem() {
        const action = addItemAction()
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }

}
export default TodoList;
