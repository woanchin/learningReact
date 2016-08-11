import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { query } = this.props.location;
		const { params } = this.props;
		const { article } = params;
		const { date, filter } = query;

		const Articles = [
				"Some Article changed",
				"Some other articles",
				"Some Article",
				"Some other article",
				"yet another article",
				"still more",
		].map((title, i) => <Article key={i} title={title}/> );
			
		return (			
			<div>
				<h1>Archives</h1>
				article: {article}, date: {date}, filter: {filter}
				<div class="row">{Articles}</div>
			</div>
		);
	}
}