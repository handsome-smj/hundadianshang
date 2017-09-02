
import React from "react";
import {Link, IndexLink} from "react-router";

export default class App extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		
		return (
			<div id="container">
				{this.props.type}
				<footer id="footer">
					<ul>
						<li>
							<IndexLink to = "/" activeClassName="active">首页</IndexLink>
						</li>
						<li>
							<Link to = "/kind" activeClassName="active">分类</Link>
						</li>
						<li>
							<Link to = "/cart" activeClassName="active">购物车</Link>
						</li>
						<li>
							<Link to = "/user" activeClassName="active">我的</Link>
						</li>
						
					</ul>
				</footer>
				
			</div>
		)
	}
}
