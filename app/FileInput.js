import React from 'react';

export default class FileInput extends React.Component {
	constructor(props) {
		super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
	    alert(
	      `Selected file - ${
	        this.fileInput.files[0].name
	      }`
	    );
	}
	render() {
		return (<form onSubmit={this.handleSubmit}>
			<label>请选择文件
			    <input type="file" ref={input => {this.fileInput = input;}}></input>
			</label>
			<button type="submit">submit</button>
		</form>);
	}
}