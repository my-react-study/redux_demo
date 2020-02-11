import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes'



class TodoList extends Component {
    constructor(props) {
        super(props)
        //关键代码-----------start
        this.state = store.getState();
        //关键代码-----------end
        this.changeInputValue = this.changeInputValue.bind(this)
        //----------关键代码-----------start
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
        //----------关键代码-----------end
        this.addItem = this.addItem.bind(this)
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>

                    <Input
                        placeholder={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button
                        type="primary"
                        onClick={this.addItem}
                    >增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        //关键代码-----------start
                        dataSource={this.state.list}
                        //关键代码-----------end
                        renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }

    changeInputValue(e) {
        const action = {
            type: CHANGE_INPUT,
            value: e.target.value
        }
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }

    addItem() {
        const action = {
            type: ADD_ITEM
        }
        store.dispatch(action)
    }

    deleteItem(index) {
        const action = {
            type: DELETE_ITEM,
            index
        }
        store.dispatch(action)
    }

}
export default TodoList;
