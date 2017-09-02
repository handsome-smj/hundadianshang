
import React from "react";
import {hashHistory} from "react-router";

import "./../scss/user.scss";

export default class User extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
			username:"未知",
			login:"登录"
			
		}
	}
	
	toLoginFn(){
		hashHistory.push("/login");
	}
	
	toRegisterFn(){
		hashHistory.push("/register");
	}
	
	toExit(){
		
		var that=this;
		
		sessionStorage.removeItem("username");
		
		sessionStorage.removeItem("addcartpro");
		
		that.setState({
			
			login:"登录",
			username:"未知"
			
		})
		
		
		
	}
	
	componentWillMount(){
		
		var that = this;
		
		if(sessionStorage.getItem("username")){
			
			
			
			
			
			
			
			that.setState({
				
				username:sessionStorage.getItem("username"),
				login:"已登录"
				
				
			})
		}
		
		
		
		
		
	}
	
	render(){
		
		
		
		if(this.state.login == "已登录"){
			
			$('#loginBtn').attr("disabled","disabled");
			
			$('#loginBtn').css("background","silver");
			
			
			$('#exitBtn').css("display","block");
			
		}
		
		console.log(this.state.login);
		if(this.state.login == "登录"){
			$('#loginBtn').removeAttr("disabled");
			
			
			$('#loginBtn').css("background","#02A8FC");
			
			$('#exitBtn').css("display","none");
			
		}
		
		
		
		
		return (
			<div className = "type">
				<header id="header">我的</header>
				<div id="content">
					<div id = "userInfo">
					
						<div id = "userImg">
						
						
						</div>
						
						<div id = "userName">
							昵称:<span id = "name">{this.state.username}</span>
						
						</div>
						
					
					
					</div>
					
					<button onClick = {this.toLoginFn.bind(this)} id = "loginBtn">{this.state.login}</button>
					<button onClick = {this.toRegisterFn.bind(this)} id = "registerBtn">注册</button>
					
					<button onClick = {this.toExit.bind(this)} id = "exitBtn">退出登录</button>
					
					
				</div>
			</div>
		)
	}
	
	componentDidMount(){
		
		
		
		
		
		
		
	}
}
