
import React from "react";
import {hashHistory} from "react-router";


import MyAjax from "./MyAjax.js";

import './../scss/search.scss';

export default class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hotList:[],
			
			hisword:[]
			
		}
	}
	
	goback(){
		
		window.history.go(-1);  //返回上一页
		
		
	}
	
	gored(){
		
		$('#searchPro').css('border-color','red');
		
		
		
	}
	
	gohui(){
		
		$('#searchPro').css('border-color','#AAAAAA');
		
	}
	
	toSearch(){
		
	
//		console.log($('#searchPro').val());



		sessionStorage.setItem('searchkey',$('#searchPro').val());
	
		
		this.state.hisword.push($('#searchPro').val());
		
		sessionStorage.setItem('key',this.state.hisword);
		
//		
		
		
		hashHistory.push("/searchcontent");
		
		
		

		
		
		
		
		
		
		
		
		
		
		
		
	}
	
	huiche(event){
		
		if(event.keyCode == '13'){
			
			sessionStorage.setItem('searchkey',$('#searchPro').val());
			
			
			
			
			this.state.hisword.push($('#searchPro').val());
		
			sessionStorage.setItem('key',this.state.hisword);
			
			hashHistory.push("/searchcontent");
			
			
			
		}
		
		
		
		
		
		
	}
	
	deleteData(){
		
		sessionStorage.removeItem('key');
		
		$('.HistoryContent').html('暂无历史搜索');
		
		
	}
	
	
	componentWillMount(){
		
		var that=this;
		
		var url = "http://list.mogujie.com/module/mget?code=sketch%2ChotWord";
		
		
		MyAjax.fetchJsonp(url,function(data){
			
//			console.log(data.data.hotWord.data);
			
			
			var hotwordarr=[];
			
			for(var i in data.data.hotWord.data){
				
				hotwordarr.push(data.data.hotWord.data[i])
				
				
				
				
			}
//			console.log(hotwordarr);
			
			
			that.setState({
				
				hotList:hotwordarr
				
				
			})
			
			
			
			
		})
		
		
		
	}
	
	render(){
		
		var hotdata  = this.state.hotList;
		
		var hotarr = [];
		
		for(var i in hotdata){
			
			
			
			if (hotdata[i].color) {
				
				
				hotarr.push(<span key={i} className="red">{hotdata[i].query}</span>)
				
			} else{
				
				hotarr.push(<span key={i}>{hotdata[i].query}</span>)
				
			}
			
			
		}
		
//		console.log(sessionStorage.getItem('key'));
		
		var historyParr =sessionStorage.getItem('key');
			
			
			
			
			
			
			if(historyParr!=null){
				
				historyParr = historyParr.split(",");
				
			 	var Parr = [];
				for(var i in historyParr){
					
					Parr.push(<p key={i}>{historyParr[i]}</p>)
					
					
				}
				
				
				
			}else{
				
				$('.HistoryContent').html('暂无历史搜索');
				
				
				
			}
		
		
		
		
		
		
		
		
		return (
			<div id = "container">
				<div className = "type">
					
					<div id="content">
						<div id="sousuo">
							<div id = "back" onClick = {this.goback.bind(this)} className="iconfont">&#xe67f;</div>
						
							<input placeholder="搜索商品名称" id="searchPro" onFocus = {this.gored.bind(this)} onBlur = {this.gohui.bind(this)} onKeyDown = {this.huiche.bind(this)}/>
							
							<div id = "sousuo1" onClick = {this.toSearch.bind(this)}>搜索</div>
							
						
						
						
						</div>
						
						<div id="searchContent">
						
							<div className="searchHistory">
							
								<div className="HistoryHeader">
									<div className="title">历史搜索</div>
									<button onClick = {this.deleteData.bind(this)}>删除</button>
								</div>
								<div className="HistoryContent">
									{Parr}
								</div>
							
							
							</div>
							
							<div className="hotsearch">
								<div className="hottitle">热门搜索</div>
								
								<div className="hotcontent">
								
									{hotarr}
								
									
								</div>
							
							
							</div>
						
						
						</div>
					
						
						
					</div>
				</div>
			</div>
		)
	}
}
