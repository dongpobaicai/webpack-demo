import React from 'react';
import PropTypes from 'prop-types';

export default class Item extends React.Component {
    render() {
        const { name, age } = this.props;
        return (<li className="todo">姓名：<span>{name}</span>，年龄：<span>{age}</span></li>);
    }
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}