
import React from "react";

import {hashHistory} from "react-router";


import MyAjax from "./MyAjax.js";


import './../scss/searchcontent.scss';

export default class searchcontent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			proList : []
			
			
			
			
			
		}
		
	}
	
	toDetail(iid){
		
		
		console.log(iid);
		
		hashHistory.push({
			pathname:"/detail",
			query:{
				iid:iid
			}
		})
		
	}
	toup(){
		
		var that = this;
		
		console.log(this.state.proList.docs);
		
		
		var test = {};
		
		console.log(test);
		
//		
		for(var i in this.state.proList.docs){
			
			
			for(var j=parseInt(i)+1; j<this.state.proList.docs.length; j++){
				
//				console.log(j)
				
					if(this.state.proList.docs[i].price>this.state.proList.docs[j].price){
						
						test=this.state.proList.docs[j];
						this.state.proList.docs[j]=this.state.proList.docs[i];
						
						this.state.proList.docs[i] = test;
						
						
						
					}
				
				
				
				
				
				
			}
			
		
		
			
			
			
			
			
		}
		
		console.log(this.state.proList);
		
		that.setState({
				
				proList:this.state.proList
				
			})
		
		
		
		
	}
	
	todown(){
		var that = this;
		
		console.log(this.state.proList.docs);
		
		
		var test = {};
		
		console.log(test);
		
//		
		for(var i in this.state.proList.docs){
			
			
			for(var j=parseInt(i)+1; j<this.state.proList.docs.length; j++){
				
//				console.log(j)
				
					if(this.state.proList.docs[i].price<this.state.proList.docs[j].price){
						
						test=this.state.proList.docs[j];
						this.state.proList.docs[j]=this.state.proList.docs[i];
						
						this.state.proList.docs[i] = test;
						
						
						
					}
				
				
				
				
				
				
			}
			
		
		
			
			
			
			
			
		}
		
		console.log(this.state.proList);
		
		that.setState({
				
				proList:this.state.proList
				
			})
		
		
		
		
	}
	
		
	componentWillMount(){
		
		var that = this;
		
		
		
		var url = "http://list.mogujie.com/search?_version=61&ratio=3%3A4&q="+sessionStorage.searchkey+"&cKey=46&minPrice=&_mgjuuid=c83492af-8806-46d3-bb12-2dd4c1a86017&ppath=&page=1&maxPrice=&sort=pop&userId=&cpc_offset=&priceList=&_=1502437153554";
		
		MyAjax.fetchJsonp(url,function(data){
			
//			console.log(data);
			
			
			that.setState({
				
				proList:data.result.wall
				
			})
			
			
			
		},function(err){
			console.log(err)
		})
		
		
		
		
		
		
	}
		
		
		
	
	
	render(){
		
		var that =this;
		
		
		var proList = this.state.proList;
		
	
//		console.log(proList)
	
		
		var proarr=[];
		
		for(var i in proList.docs){
			
			var propsarr = [];
			
			for(var j in proList.docs[i].props){
				
				propsarr.push(<span key={j}>{proList.docs[i].props[j]}</span>)
				
				
				
			}
			
			proarr.push(<a key={i} onClick = {that.toDetail.bind(that,proList.docs[i].iid)}>
								
								<img src={proList.docs[i].img}/>
								
								<div className="tag">
							
									{propsarr}
								
									
								</div>
								
								<div className="price-hot">
									<p>¥{Math.round(proList.docs[i].price)}</p>
									<p>{proList.docs[i].cfav}</p>
								</div>
							</a>)
			
			
			
			
		}
		
	
		
		return (
			<div id = "container">
				<div className = "type">
				
					<div className="searchhome">
						
						<div className="priceup" onClick={this.toup.bind(this)}>价格有小到大</div>
						<div className="pricedown" onClick={this.todown.bind(this)}>价格由大到小</div>
					</div>
					<div className = "Homepro">
						
						<ul id="proList">
							{proarr}
			
						
						
						</ul>
						
					</div>
				</div>
			</div>
		)
	}
}
