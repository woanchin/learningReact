import React from "react";

import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "meow",
		};
	}
	
	changeTitle(title) {
		this.setState({title}); //ES6 title = title == {title}
	}

	render() {
		return (
			<div>
				<Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
				<Footer />
			</div>
		);
	}
}