
import React from "react";
import {Link, hashHistory} from "react-router";

import MyAjax from "./MyAjax.js";


import './../scss/cart.scss';

export default class Cart extends React.Component{
	constructor(props){
		super(props);
		
		this.state={
			
			thing:[],
		
			cartthing:[]
		}
		
		
		
	}
	
	toHome(){
		hashHistory.push("/");
		
		
	}
	
	componentWillMount(){
		
		var that = this;
		
		
  			if(sessionStorage.addcartpro){
  				
  				console.log(JSON.parse(sessionStorage.addcartpro));
  				
  				
  				
  				for(var i in JSON.parse(sessionStorage.addcartpro)){
  					
  					
  					this.state.thing.push(<div id="cartContent2" key={i}>
  				
  				
  										
		  									<img src={JSON.parse(sessionStorage.addcartpro)[i].addimg} className="cartimg"/>
		  									<div className="cartdetail">
		  										<p>{JSON.parse(sessionStorage.addcartpro)[i].addproname}</p>
		  										<div className="cartpro">
		  											<div className="pronum"></div>
		  											<span>单价:{JSON.parse(sessionStorage.addcartpro)[i].addpricesign}{JSON.parse(sessionStorage.addcartpro)[i].addprice}</span>
		  										</div>
		  									</div>
  				
  				
  									</div>);
  					
  					
  					
  					
  					
  				}
  				
  				
  				
  				
  				
  				
  				
  			}else{
  				
  				this.state.thing.push(<div id="cartContent" key={0}>
					
						<p>购物车还是空的哦</p>
						<button onClick={this.toHome.bind(this)}>去逛逛</button>
						
					
					</div>);
  				
  				
  				
  				
  				
  				
  			}
	
		
		      
						
						
						
		
		
		that.setState({
			
			cartthing:this.state.thing
			
			
		})
		
		
		
		
		
	}
	
	
	render(){
		
		
		
		
		return (
			<div className = "type">
				<header id="header">购物车</header>
				<div id="content">
					
					
					{this.state.cartthing}
					
					
					
					<div className="cartfooter">
					
						
					</div>
				
				
				</div>
			</div>
		)
	}
}
