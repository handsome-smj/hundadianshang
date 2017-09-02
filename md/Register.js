
import React from "react";
import {hashHistory} from "react-router";



import './../scss/register.scss';

export default class Register extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
			userObjarr:[],
			tip:""
			
		}
	}
	
	goback(){
		
		window.history.go(-1);  //返回上一页
		
		
	}
	toLoginFn(){
		hashHistory.push("/login");
	}
	
	
	
	register(){
//		console.log(localStorage.getItem("userInfo"));
//		
//		console.log(JSON.parse(localStorage.getItem("userInfo")).userID);
		
		
//		console.log($('#userID').val());
		
//		console.log($('#password').val());
		
		var that = this;
		
		var userID= $('#userID').val();
	    
		var password= $('#password').val();
		
		
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
			
			console.log("ok");
			
			var userObj = {
				
				userID:userID,
				password:password
				
			}
			
//			console.log(userObj);

			var sign = 0;

			for(var i in JSON.parse(localStorage.getItem("userinfo"))){
				
				if(userObj.userID == JSON.parse(localStorage.getItem("userinfo"))[i].userID){
					
					console.log("用户已经存在");
					
					that.setState({
						
						tip:"用户已经存在"
					})
					
					sign = 1;
					
				}
			}
			
			
			if(sign==0){
				
				
				this.state.userObjarr.push(userObj);
			
			

			
			    localStorage.setItem("userinfo",JSON.stringify(this.state.userObjarr));
			    
			    
			    that.setState({
						
						tip:"注册成功"
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
						
						<div id = "title">用户注册</div>
						
						<div id = "login" onClick = {this.toLoginFn.bind(this)}>登录</div>
						
					
					</header>
					<div id="content">
						<div id="registerContent">
							<input type="text" name="userID" id="userID"  placeholder="用户名"/>
							<input type="password" name="password" id="password"  placeholder="密码"/>
							{/*<div className="checkbox">
								<input type="checkbox" name="checkbox" id="checkbox" value="" />
								<span>请先同意用户协议</span>
						</div>*/}
							<input type="button" name="btn" id="btn" value="注册" onClick={this.register.bind(this)}/>
							
							<div className="tip">
								<p>{this.state.tip}</p>
							</div>
							
						</div>
					
					
						
					</div>
				</div>
			</div>
		)
	}
	
	componentDidUpdate(){
		
		
		
		
		
		
		
		
	}
	
	
	
}
