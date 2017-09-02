
import React from "react";
import {Link,IndexLink,hashHistory} from "react-router";

import MyAjax from "./MyAjax.js";

import './../scss/detail.scss';


export default class App extends React.Component{
	constructor(props){
		super(props)
//		console.log(this.props.location.query.tradeItemId)
		this.state = {
			tradeItemId : this.props.location.query.tradeItemId,
			topImages:[],
			proTitle:[],
			addcart:[],
			iid : this.props.location.query.iid,
			price:[],
			pricesign:[]
		}
	}
	
	
	
	toaddcart(){
		
		
		
		if(sessionStorage.username){
			
			
			console.log("继续操作");
			
			var addobj={
				
				addimg:this.state.topImages[0],
				addproname:this.state.proTitle,
				addnum:1,
				addprice:this.state.price,
				addpricesign:this.state.pricesign
				
				
				
				
				
			}
			
			  
////			console.log(this.state.addcart);

  			if(sessionStorage.addcartpro){
  				
  				this.state.addcart.push(JSON.parse(sessionStorage.addcartpro)[0]);
  				
  				this.state.addcart.push(addobj);
  				
  				alert("加入购物车成功")
  				
  			}else{
  				
  				
  				this.state.addcart.push(addobj);
  				
  				alert("加入购物车成功")
  				
  				
  			}
			
			   
			
			
				
				
				sessionStorage.addcartpro = JSON.stringify(this.state.addcart);
				
//				console.log(typeof JSON.parse(sessionStorage.addcartpro)[0].addnum);
				
		
				
			
			console.log(sessionStorage.addcartpro);
			
			
			
			
			
			
		}else{
			
			if(this.state.tradeItemId){
				
				
				sessionStorage.loginpoint="detail?tradeItemId="+this.state.tradeItemId+"";
			
				hashHistory.push("/login");
				
				
			}else if(this.state.iid){
				
				sessionStorage.loginpoint="detail?iid="+this.state.iid+"";
			
				hashHistory.push("/login");
				
				
				
				
			}
			
			
			
			//传商品ID；
			
		}
		
		
		
		
		
	}
	
	componentWillMount(){
		
		var that = this;
		
		var url = "http://m.mogujie.com/jsonp/detail.api/v1?iid="+this.state.tradeItemId+"&template=1-2-detail_normal-1.0.0&appPlat=";
		
		MyAjax.fetchJsonp(url,function(data){
			
			console.log(data);
			
//			console.log(data.data.itemInfo.title);
			
			
			
			
			
			var topImg=[];
			for(var i in data.data.topImages){
				
				topImg.push(data.data.topImages[i]);
				
			}
			
			
			
			
			that.setState({
				
				topImages:topImg,
				proTitle:data.data.itemInfo.title,
				price:data.data.normalPrice.nowPrice,
				pricesign:data.data.normalPrice.currency
				
				
				
				
			})
			
			
			
			
		})
		
		
		
		
		var url1 = "http://m.mogujie.com/jsonp/detail.api/v1?iid="+this.state.iid+"&template=1-2-detail_normal-1.0.0&appPlat=";
		
		MyAjax.fetchJsonp(url1,function(data){
			
			console.log(data);
			
			console.log(data.data.normalPrice.nowPrice);
			
			
			
			
			
			var topImg=[];
			for(var i in data.data.topImages){
				
				topImg.push(data.data.topImages[i]);
				
			}
			
			
			
			
			that.setState({
				
				topImages:topImg,
				proTitle:data.data.itemInfo.title,
				price:data.data.normalPrice.nowPrice,
				pricesign:data.data.normalPrice.currency
				
				
				
			})
			
			
			
			
		})
		
		
		
		
	}
	
	render(){
		
        		
		var proTitle = this.state.proTitle;
		
		
		var topImgdata = this.state.topImages;
		var topimgarr = [];
		for(var i in topImgdata){
			topimgarr.push(<div className="swiper-slide" key = {i}>
					<img src={topImgdata[i]}/>
			</div>)
		}
		
		return (
			<div id="container">
				<div className = "type">
					
					<div id="content">
						<div className="bannerContent">
							<div className="swiper-container">
								 <div className="swiper-wrapper">
								    {topimgarr}
								 </div>
								 <div className="swiper-pagination"></div>
							    
							</div>
						
						</div>
						
						<div className="proTitle">
								{proTitle}
						
						</div>
						
						
						
						
						
						
					</div>
					
					<div id="detailFooter">
						<ul className="small">
						
							<li>客服</li>
							<li>收藏</li>
							<li>小店</li>
							<li onClick={this.toaddcart.bind(this)}>加入购物车</li>
							<li>立即购买</li>
							
							
						
						</ul>
							
					
								
					</div>
					
				</div>
				
			</div>
		)
	}
	
	componentDidMount(){
//		$("#footer").find("li").eq(0).find("a").addClass("active")
//		var mySwiper = new Swiper("#detailBox",{
//			onSlideChangeEnd:function(swiper){
//				var index = swiper.activeIndex;
//				$("#footer").find("li").find("a").removeClass("active");
//				$("#footer").find("li").eq(index).find("a").addClass("active")
//			}
//		})
//		$("#footer").find("li").on("tap",function(){
//			var index = $(this).index();
//			mySwiper.slideTo(index,300)
//		})
	}
	
	
	
	componentDidUpdate(){
	
		if(this.state.topImages!=''){
		
			var swiper = new Swiper('.swiper-container', {
		      
				
		        pagination: '.swiper-pagination',
		        
		        paginationClickable: true,
		        
		        
		        
		        autoplayDisableOnInteraction: false

       			
	
			    
			    
	    		
		        
		    })
		}
	}
}
