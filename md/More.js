
import React from "react";

export default class More extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		
		return (
			<div className = "type">
				<header id="header">More头部</header>
				<div id="content">More内容区域</div>
			</div>
		)
	}
}
