
import React from "react";
import {Link, hashHistory} from "react-router";

import "./../scss/home.scss";

import "./../scss/proList.scss";

import MyAjax from "./MyAjax.js";



export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			proList : [],
			
			bannerList:[],
			wraperList:[],
			maskList:[]
			
			
			
		}
	}
	
	toSearch(){
		hashHistory.push("/search");
	}
	
	toDetail(tradeItemId){
		
		console.log(tradeItemId);
		
		hashHistory.push({
			pathname:"/detail",
			query:{
				tradeItemId:tradeItemId
			}
		})
		
	}
//	handleScroll(){
//		
//		var that= this;
//	    let clientHeight = this.refs.bodyBox.clientHeight; //可视区域高度
//	    let scrollTop  = this.refs.bodyBox.scrollTop;  //滚动条滚动高度
//	    let scrollHeight = this.refs.bodyBox.scrollHeight; //滚动内容高度
//	    if((clientHeight+scrollTop)==(scrollHeight)){
//	    	this.state.num++;
//		    	var url = "https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=&sort=pop&page="+this.state.num+"&_version=61&_=1502111707716";
//			
//			MyAjax.fetchJsonp(url,function(data1){
//				
//				console.log(data1);
//				
//				console.log(data1.result.wall.docs.length);
//				
//				
//				
//				that.setState({
//					
//					proList2:data1.result.wall
//					
//				})
//				
//			
//				
//				
//			},function(err){
//				console.log(err)
//			})
//	    	
//	    	
//	    }
//	}
	
	componentWillMount(){
		
		
		var that = this;
		var url = "http://w.lefeng.com/api/neptune/brand/ad/v3?zoneId=943%2C478%2C496%2C693%2C724%2C725%2C726%2C727%2C728&resolution=394x610&appName=lefeng_android&version=4.1.1";
		MyAjax.fetchJsonp(url,function(data){
//			console.log(data.data[478]);
			var bannerImg=[];
			for(var i =0; i<data.data[478].length; i++){
				
				bannerImg.push(data.data[478][i].imgFullPath);
				
			}
			
//			console.log(bannerImg);

			var wraperImg=[];
			for(var i =0; i<data.data[496].length; i++){
				
				wraperImg.push(data.data[496][i].imgFullPath);
				
			}

//			console.log(data.data[496]);


			var maskImg=[];
			for(var i =0; i<data.data[724].length; i++){
				
				maskImg.push(data.data[724][i].imgFullPath);
				
			}



			
			that.setState({
				bannerList : bannerImg,
			
				wraperList : wraperImg,
				maskList   : maskImg
			})
		},function(err){
			console.log(err)
		})
		
		
		
		
		var url = "https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=&sort=pop&page=1&_version=61&_=1502111707716";
		
		MyAjax.fetchJsonp(url,function(data1){
			
			console.log(data1);
			
//			console.log(data1.result.wall.docs[0].tradeItemId);
			
			
			
			that.setState({
				
				proList:data1.result.wall
				
			})
			
		
			
			
		},function(err){
			console.log(err)
		})

	}
	

	
	render(){
		var that = this;
		
		
		
		var bannerdata = this.state.bannerList;
		var bannerarr = [];
		for(var i in bannerdata){
			bannerarr.push(<div className="swiper-slide" key = {i}>
					<img src={bannerdata[i]}/>
			</div>)
		}
		
		
		var wraperdata = this.state.wraperList;
		var wraperarr = [];
		for(var i in wraperdata){
			wraperarr.push(<div className="img-wraper" key = {i}>
					<img src={wraperdata[i]}/>
			</div>)
		}
		
		
		
		var maskdata = this.state.maskList;
		var maskarr = [];
		for(var i in maskdata){
			maskarr.push(<div className="img-mask" key = {i}>
					<img src={maskdata[i]}/>
			</div>)
		}
		
		
	    
		var proList = this.state.proList;
		
	
		
	
		
		var proarr=[];
		
		for(var i in proList.docs){
			
			var propsarr = []
			
			for(var j in proList.docs[i].props){
				
				propsarr.push(<span key={j}>{proList.docs[i].props[j]}</span>)
				
				
				
			}
			
			proarr.push(<a key={i} onClick = {that.toDetail.bind(that,proList.docs[i].tradeItemId)}>
								
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
			<div className = "type">
				<header id="header">首页</header>
				<div id="content" >
					<div className="searchBox">
						<input type="text" id="search" placeholder="搜索商品"  onClick = {this.toSearch.bind(this)}/>
					</div>
					<div className="swiper-container">
						 <div className="swiper-wrapper">
						    {bannerarr}
						 </div>
						 <div className="swiper-pagination"></div>
					    
					</div>
					<div className="wraper">
						{wraperarr}
					</div>
					
					
					<div className="mask">
						<div className="maskBox">
							
							{maskarr}
							
						</div>
					</div>
					<div className = "Homepro">
						<div className="protitle">----·{proList.title}·----</div>
						<ul id="proList">
							{proarr}
			
						
						
						</ul>
						
					</div>
				
					
					
					
				</div>
			</div>
		)
	}
	componentDidUpdate(){
	
		if(this.state.bannerList!=''){
		
			var swiper = new Swiper('.swiper-container', {
		      
				
		        pagination: '.swiper-pagination',
		        
		        paginationClickable: true,
		        
		        loop:true,
		        autoplay: 3000,
		        autoplayDisableOnInteraction: false

		        
		    })
		}
	}
}
