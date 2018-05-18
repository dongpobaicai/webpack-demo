import React from 'react';
import css from './content.less'

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ['酸奶','果汁'],
		};
		this.changeSelect = this.changeSelect.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	changeSelect(event) {
		const { value = [] } = this.state;
		const _value = event.target.value;
		const index = value.indexOf(_value);
		if (index > -1) {
			value.splice(index, 1);
		} else {
		    value.push(_value);
		}
		this.setState({ value });
	}
	handleSubmit(event) {
		event.preventDefault();
		alert('qi favorite flavor is' + this.state.value);
	}
	render() {
		return (<form onSubmit={this.handleSubmit}>
			<label>
				pick your favorite La Croix flavor
				<select multiple={true} value={this.state.value} onChange={this.changeSelect}>
					<option>酸奶</option>
					<option>果汁</option>
					<option>泡面</option>
				</select>
			</label>
			<input type="submit" value="submit"/>
		</form>);
	}
}

export default Content;