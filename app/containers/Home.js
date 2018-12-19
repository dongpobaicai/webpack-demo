import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Item from '../components/Item';
import './home.less'

class Home extends React.Component {
    render() {
        const { todoList } = this.props;
        console.log('todoList', todoList);
        return (<section className="home">
            <h3>人物列表数据</h3>
            {
                todoList.map((listData, index) => <Item key={index} {...listData} />)
            }
            <Link className="add-new" to="/new">新增人物</Link>
        </section>);
    }
}

// 将state传入到组件的props属性
const mapStateToProps = state => ({
    todoList: state.todoList,
})

export default connect(
  mapStateToProps,
)(Home)
