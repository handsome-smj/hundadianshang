
import React from "react";

import {hashHistory} from "react-router";


import './../scss/login.scss';

export default class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			tip:""
		}
	}
	
	
	goback(){
		
		window.history.go(-1);  //返回上一页
		
		
	}
	toRegisterFn(){
		hashHistory.push("/Register");
	}
	
	
	
	login(){
		
		var that=this;
		
		console.log($('#userID').val());
		
		console.log($('#password').val());
		
		var userID= $('#userID').val();
		
		var password = $('#password').val();
		
		
		
//		console.log(JSON.parse(localStorage.getItem("userinfo")));
		
		
		if(userID=="" && password==""){
			
			console.log("请先填写用户名和密码");
			that.setState({
						
						tip:"请先填写用户名和密码"
					})
			
		}else if(userID==""){
			
			console.log("请先填写用户名");
			that.setState({
						
						tip:"请先填写用户名"
					})
			
			
		}else if(password==""){
			
			console.log("请填写密码");
			that.setState({
						
						tip:"请填写密码"
					})
			
			
		}else{
			
			
			var usign="";
		
			
			var userObj = {
				
				userID:userID,
				password:password
				
			}
			
			if(JSON.parse(localStorage.getItem("userinfo"))){
				
				
					for(var i in JSON.parse(localStorage.getItem("userinfo"))){
					//一开始就判断用户存在与否
					
					
					
					if(userObj.userID==JSON.parse(localStorage.getItem("userinfo"))[i].userID){
						
						
						
						if(userObj.password ==JSON.parse(localStorage.getItem("userinfo"))[i].password){
							
							console.log("登录成功");
							that.setState({
							
								tip:"登录成功"
							})
							
							usign="1";
							
							sessionStorage.setItem("username",userObj.userID);
							
							
							if(sessionStorage.loginpoint){
								
								hashHistory.push("/"+sessionStorage.loginpoint+"");
								
								
								
							}else{
								
								hashHistory.push("/user");
								
								
							}
							
							
							
							
								
							
							
							
						}else{
							
							
							console.log("密码错误");
							that.setState({
								
								tip:"密码错误"
							})
							usign="1";
						}
						
							
							break;
						
						
						
					}else{
						
						usign="0";
						
						
						
					}
					
					
				
	//				
					
					
					
					
				}

				
				
				
				
			}else{
				usign="0";
				
			}
			
		
						
			if(usign=="0"){
				
				console.log("用户不存在请先去注册");
				that.setState({
						
						tip:"用户不存在请先去注册"
					})
			}
	
			
			
			
			
			
			
			
			
			
			
		
			
			
							
							
			
							
							
							
			
			
			
			
		}
		
		
		
		
		
		
		
		
		
	}
	
	render(){
		
		
		if(this.state.tip){
			
			
			$('.tip').css("display","block");
			
			
			setTimeout(function(){
				
				$('.tip').css("display","none");
				
				
				
			},2000)
			
		}
		
		return (
			<div id = "container">
				<div className = "type">
					<header id="header">
						<div id = "back" onClick = {this.goback.bind(this)}>返回</div>
						
						<div id = "title">用户登录</div>
						
						<div id = "register" onClick = {this.toRegisterFn.bind(this)}>注册</div>
					
					
					
					</header>
					<div id="content">
						<div id="loginContent">
					
							<input type="text" name="userID" id="userID" placeholder="用户名"/>
							<input type="password" name="password" id="password"  placeholder="密码"/>
							
							<input type="button" name="btn" id="btn" value="登录" onClick={this.login.bind(this)}/>
							
							<div className="tip">
								<p>{this.state.tip}</p>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}
