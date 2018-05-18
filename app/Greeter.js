import React from 'react';
import config from './config.json';
// import Content from './content.js';
import FileInput from './FileInput.js';
import styles from './Greeter.css';

class Greeter extends React.Component {
	render() {
		return (<div className={styles.root}>
			<h4>{config.title}</h4>
			<div className={styles.content}>{config.greetText}</div>
			<FileInput />
		</div>);
	}
}
export default Greeter;
