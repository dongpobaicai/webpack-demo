import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { addNewTodo } from '../actions';


class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
        };
    }
    render() {
        console.log('this props', this.props);
        const { name, age } = this.state;
        return (<div className="newTodo">
            <ul>
                <li>
                    <span>姓名：</span>
                    <input name="name" value={name} placeholder="请输入姓名" onChange={this.changeName.bind(this)}/>
                </li>
                <li>
                    <span>年龄：</span>
                    <input type="number" name="age" value={age} placeholder="请输入年龄" onChange={this.changeAge.bind(this)}/>
                </li>
                <li>
                    <button type="button" onClick={this.submitInfo.bind(this)}>提交</button>
                </li>
            </ul>
        </div>);
    }
    changeName(e) {
        this.setState({
            name: e.target.value,
        });
    }
    changeAge(e) {
        this.setState({
            age: e.target.value,
        });
    }
    submitInfo() {
        const { addNewTodo, history } = this.props;
        const { name, age } = this.state;
        if (!name || !age) {
            window.alert('请填充信息');
            return false;
        }
        // 这里需要发送一个action，并跳转到首页
        addNewTodo({
            name,
            age: Number(age),
        });
        history.push('/home');
    }
}

export default withRouter(connect(null,  { addNewTodo })(NewTodo))
  