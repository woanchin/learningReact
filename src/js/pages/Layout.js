import React from "react";
import { Link }from "react-router";

class Layout extends React.Component {
	navigate() {
		this.context.router.push("/");
	}
	
	render() {
		return (
			<div>
				<h1>Getting React Router right (versions 2.6.1)</h1>
				{this.props.children}
				<Link to="archives" activeClassName="test"><button class="btn btn-danger">archives</button></Link>
				<Link to="settings"><button class="btn btn-success">settings</button></Link>
				<button onClick={this.navigate.bind(this)}>featured</button>
			</div>
		);
	}
}

Layout.contextTypes = {
	router: React.PropTypes.func.isRequired
};

export default Layout;