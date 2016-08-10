import React from "react";

export default class Featured extends React.Component {
	render() {
		return (
			<h1>Featured</h1>
		);
	}
}

Featured.contextTypes = {
	router: React.PropTypes.object.isRequired
};