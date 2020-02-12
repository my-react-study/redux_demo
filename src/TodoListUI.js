import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
const TodoListUI = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button
                    type="primary"
                    onClick={props.addItem}
                >增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    //关键代码-----------start
                    dataSource={props.list}
                    //关键代码-----------end
                    renderItem={(item, index) => (<List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>)}
                />
            </div>
        </div>
    );
}
export default TodoListUI;