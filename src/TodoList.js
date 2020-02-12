import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction } from "./store/actionCreators";
import TodoListUI from './TodoListUI';



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
