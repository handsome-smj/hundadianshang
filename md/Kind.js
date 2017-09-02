
import React from "react";

import MyAjax from "./MyAjax.js";

import {Link, IndexLink,hashHistory} from "react-router";

import './../scss/kind.scss';


export default class Kind extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
			RCdata:[],
			fid:10062603,
			popdata:[],
			Rbtitle:[]
		
			
			
			
		}
	}
	
	
	toliTab(index,pid,fid){
		
		$('.kindLeft').find('li').removeClass('kindactive');
		
		console.log(index)
		$('.kindLeft').find('li').eq(index).addClass('kindactive');
		
		
		$('.titleList').find('li').removeClass('titleactive');
		
		$('.titleList').find('li').eq(0).addClass('titleactive');
		
		
		
		console.log(pid)
		var that = this;
		
		var url = "http://mce.mogujie.com/jsonp/makeup/3?pid="+pid+"";
		
		MyAjax.fetchJsonp(url,function(data){
			
//			console.log(data.data.categoryNavigation.list);
			
			
			var RCdata = [];
			
			for(var i in data.data.categoryNavigation.list){
				
				RCdata.push(data.data.categoryNavigation.list[i])
				
				
			}
			
			
			that.setState({
				
				
				RCdata:RCdata,
				fid:fid,
				
				
				
			})
			
			
			
		})
		
		
		console.log(fid);
		
		
		
		var url2 = "https://list.mogujie.com/search?cKey=h5-cube&fcid="+fid+"&page=1&_version=1&pid=&q=&cpc_offset=0&sort=pop";
		
		    
		
		MyAjax.fetchJsonp(url2,function(data){
			
			
//			console.log(data);
			
			var popdata=[];
			
			for(var i in data.result.wall.docs){
				popdata.push(data.result.wall.docs[i]);
				
				
			}
			
			that.setState({
				
				popdata:popdata
				
				
				
			})
			
			
			
			
			
			
		})
		
		
		
		
		
		
		
	}
	toTop(){
		var that= this;
	    let RightTopH = window.getComputedStyle(this.refs.RightTop).height; //右边顶部内容的高度
	    
	    
//	    console.log(parseInt(RightTopH));
	    let scrollTop  = this.refs.bodyBox.scrollTop;  //滚动条滚动高度
	    
//	    console.log(scrollTop);
//	    let scrollHeight = this.refs.bodyBox.scrollHeight; //滚动内容高度
	    if(scrollTop>=parseInt(RightTopH)){
	    	
	    	
	    	console.log(1111111);
	    	
	    	$('.titleList').css("position","fixed");
	    	
	    	
	    	$('.titleList').css("width","80%");
	    	
	    	
	    	
	    	
	    	
	    	
	    }else if(scrollTop<parseInt(RightTopH)){
	    	
	    	
	    	$('.titleList').css("position","relative");
	    	
	    	$('.titleList').css("width","100%");
	    	
	    	
	    }
		
		
		
		
		
		
	}
	
	
	togetData(titindex){
		
		console.log(this.state.fid);
		
		
		
		$('.titleList').find('li').removeClass('titleactive');
		
		
		$('.titleList').find('li').eq(titindex).addClass('titleactive');
		
		
		
		
		var that = this;
		
		console.log(typeof titindex);
		
		if(titindex == "0"){
			
			var url3 = "https://list.mogujie.com/search?cKey=h5-cube&fcid="+this.state.fid+"&page=1&_version=1&pid=&q=&cpc_offset=0&sort=pop";
			
			
			
			
			
		}else if(titindex=="1"){
			
			var url3 = "https://list.mogujie.com/search?cKey=h5-cube&fcid="+this.state.fid+"&page=1&_version=1&pid=&q=&cpc_offset=0&sort=sell";
			
			
		}else if(titindex == "2"){
			
			
			var url3 = "https://list.mogujie.com/search?cKey=h5-cube&fcid="+this.state.fid+"&page=1&_version=1&pid=&q=&cpc_offset=0&sort=new";
			
			
			
		}
		
		
		console.log(url3);
		
		MyAjax.fetchJsonp(url3,function(data){
			
		
			
			var popdata=[];
			
			for(var i in data.result.wall.docs){
				popdata.push(data.result.wall.docs[i]);
				
				
			}
			
			that.setState({
				
				
				popdata:popdata
				
			})
			
			
			
			
		})
		
		
		
		
		
		
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
	
	componentWillMount(){
		
		
		
		var that = this;
		
		var url = "http://mce.mogujie.com/jsonp/makeup/3?pid=41888";
		
		MyAjax.fetchJsonp(url,function(data){
			
//			console.log(data.data.categoryNavigation.list);
			
			
			var RCdata = [];
			
			for(var i in data.data.categoryNavigation.list){
				
				RCdata.push(data.data.categoryNavigation.list[i])
				
				
			}
			
			
			that.setState({
				
				
				RCdata:RCdata
				
				
			})
			
			
			
		})
		
		
//		console.log(this.state.fid);
		
		var url1 = "https://list.mogujie.com/search?cKey=h5-cube&fcid="+this.state.fid+"&page=1&_version=1&pid=&q=&cpc_offset=0&sort=pop";
		
		MyAjax.fetchJsonp(url1,function(data){
			
//			console.log(data.result.wall.docs[0].iid);
			
//			console.log(data.result.sortFilter);
			
			
//			console.log(data.result.wall.docs);
			
			
			
			var popdata=[];
			
			for(var i in data.result.wall.docs){
				popdata.push(data.result.wall.docs[i]);
				
				
			}
			
			
			
			var Rbtitle = [];
			
			for(var i in data.result.sortFilter){
				Rbtitle.push(data.result.sortFilter[i].title)
				
				
			}
			
//			console.log(Rbtitle);
			
			
			that.setState({
				
				Rbtitle:Rbtitle,
				
				popdata:popdata
				
				
			})
		})
		
		
		
		
		
		
		
		
		
	}
	
	render(){
		
		var that=this;
		
		
		var RCdata=this.state.RCdata;
		
//		console.log(RCdata);
		
		
		var RCcontent = [];
		
		for(var i in RCdata){
			
			
			RCcontent.push(<div className="RC" key={i}>
								<img src={RCdata[i].image}/>
								<p>{RCdata[i].title}</p>
							
							</div>)
			
			
			
		}
		
		
		
		
		var Rbtitledata = this.state.Rbtitle;
		
		var Rbtitlearr = [];
		
		
		
		for(var i in Rbtitledata){
			
			
				
			
				if(i=="0"){
					
					Rbtitlearr.push(<li onClick={this.togetData.bind(this,i)} key={i} className="titleactive">
									{Rbtitledata[i]}
								</li>)
					
				}else{
					Rbtitlearr.push(<li onClick={this.togetData.bind(this,i)} key={i}>
									{Rbtitledata[i]}
								</li>)
					
					
					
					
				}
			
				
				
				
				
				
			
			
			
			
			
			
		}
		
		
		
		
		var popdata = this.state.popdata;
		
		console.log(popdata);
		
		
		
		
		var popdataarr=[];
		
		for(var i in popdata){
			
			if(popdata[i].img!=null){
				
				popdataarr.push(<li key={i} onClick = {that.toDetail.bind(that,popdata[i].iid)}>
										<img src={popdata[i].img}/>
										
										<p>{popdata[i].title}</p>
										
										<div className="hot">
											<span>{popdata[i].price}</span>
											<span>{popdata[i].cfav}</span>
										
										</div>
									</li>)
				
				
				
				
			}
			
			
			
		}
		
		
		
		
		
		
		return (
			<div className = "type">
				
				<div id="content">
				
					<div className="kindLeft" >
						<li className="kindactive"   onClick={this.toliTab.bind(this,0,41888,10062603)}>
							<p>正在流行</p>
						</li>
						<li  onClick={this.toliTab.bind(this,1,41846,50003)}>
							<p>上衣</p>
						</li>
						<li  onClick={this.toliTab.bind(this,2,41851,50005)}>
							<p>裤子</p>
						</li>
						<li  onClick={this.toliTab.bind(this,3,41860,50004)}>
							<p>裙子</p>
						</li>
						<li onClick={this.toliTab.bind(this,4,41855,50006)}>
							<p>内衣</p>
						</li>
						<li onClick={this.toliTab.bind(this,5,41859,50532)}>
							<p>女鞋</p>
						</li>
						
						
						
						
						<li  onClick={this.toliTab.bind(this,6,41853,51716)}>
							<p>男友</p>
						</li>
						<li  onClick={this.toliTab.bind(this,7,41863,50675)}>
							<p>包包</p>
						</li>
						<li onClick={this.toliTab.bind(this,8,41892,10056587)}>
							<p>运动</p>
						</li>
						<li  onClick={this.toliTab.bind(this,9,41874,50797)}>
							<p>配饰</p>
						</li>
						<li  onClick={this.toliTab.bind(this,10,41875,50010)}>
							<p>美妆</p>
						</li>
						<li  onClick={this.toliTab.bind(this,11,41878,52378)}>
							<p>个护</p>
						</li>
						<li  onClick={this.toliTab.bind(this,12,41879,10057031)}>
							<p>家居</p>
						</li>
						<li  onClick={this.toliTab.bind(this,13,41880,10060232)}>
							<p>百货</p>
						</li>
						
					
					
					</div>
					
					<div className="kindRight" onScroll={this.toTop.bind(this)} ref="bodyBox">
						<div className="RightTop" ref="RightTop">
							
							{RCcontent}
							
							
							
							
						
						
						</div>
						
						<div className="RightBottom">
						
							<ul className="titleList">
								{Rbtitlearr}
								
								
							</ul>
							
							<div className="RBcontent">
								
									{popdataarr}
							
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
