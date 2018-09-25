import React, { Component } from 'react';
import './index.scss'
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { Spin } from 'antd';
import {Link} from 'react-router-dom'

const BoardItem = ({info}) => {
     return (
              <div className="swiper-slide">
               <div className="img-box">
                      <img src={info.img_url} width="100%"/>
                 </div>
              </div>
        )
}
class Detail extends Component {
	constructor(props){
		super(props);
		this.state={
			detailPage:{},
			haveData:false
		}
	}
	getData(){
		 const {id} = this.props.match.params;
		 var id1=id.slice(0,7);
		 var id2=id.slice(7)
		  axios.get(`/enjoy/product/info/product_detail.json?product_id=${id1}&sub_product_id=${id2}`)
		  .then (res => {
	  		 this.setState({
         	detailPage:res.data			
        });
	  		 this.setState({
         	 haveData:true			
        });
      })

	}
	componentDidMount(){
		this.getData();
	}
	 componentDidUpdate () {
	   var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 1,
	      spaceBetween: 0,
	      loop: true,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	      },
	      autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	      }
	    });
 	}
  render() {
  	let {detailPage}=this.state

    return (
    	!this.state.haveData ?  <div className="loading"><Spin size="large" /></div>:(//判断数据获取成功后 渲染页面
    		 <div className="Detail">
		       	 <div ref={el => this.el = el} className="swiper-container banner">
			        <div className="swiper-wrapper">
			           {
			            detailPage.basic.product_images.map((item,index) => {
			              return <BoardItem key={index} info={item}/>
			            })
			           }
			         </div>
			         <div className="swiper-pagination"></div>
		  		</div>
		  		<div className="delbasic">
					<h2>{detailPage.basic.name}</h2>
					<p>{detailPage.basic.description}</p>
					<div>
						<span className="nowprice">{(detailPage.basic.price+'').slice(0,-2)} 元 /</span>
						<span className="count"> {(detailPage.basic.show_entity_name)}</span>
						<s className="oldprice"> ￥{(detailPage.basic.origin_price+'').slice(0,-2)}</s>
						 &nbsp;&nbsp;&nbsp;&nbsp;随时退
					</div>
		  		</div>
		  		<div className="detailcontent">
		  			<div className="empty"></div>
					<div className="ShopInfo maxbox">
						<h3>商户信息</h3>
						<h4>{detailPage.modules[0].data.restaurants[0].restaurant_name}</h4>
						<p>
						<i className="iconfont icon-weizhi "></i>
						<span>{detailPage.modules[0].data.restaurants[0].restaurant_address}</span>
						<i className="iconfont icon-xiaotuziCduan_1 rt"></i>
						</p>
						<p>
						<i className="iconfont icon-dianhua"></i>
						<span>{detailPage.modules[0].data.restaurants[0].restaurant_phone_numbers[0]}</span>
						<i className="iconfont icon-xiaotuziCduan_1 rt"></i>
						</p>
					</div>
					<div className="empty"></div>
					<div className="usercompent maxbox">
						<h3>用户评价</h3>
						<div className="useinfo">
							<span className="imgbox"><img src={detailPage.modules[1].data.avatar} alt=""/></span>
							<span className="username">{detailPage.modules[1].data.nick_name}</span>
						</div>
						<p className="compoentext">
							{
								detailPage.modules[1].data.scores.map((i)=>{
									return <span key={i.id}> {i.name+" "+ i.score} |</span>
								})
							}
						</p>
						<p className="compoenttag">
							{
								detailPage.modules[1].data.tags.map((i)=>{
									return <span key={i.id}>{i.name}</span>
								})
							}
						</p>
						<p className="usertext">{detailPage.modules[1].data.text}</p>
						<div className="comimg">
							{
								detailPage.modules[1].data.images.map((i,index)=>{
									return <div className="itembox" key={index}>
												<img src={i} alt=""/>
									</div>
								})
							}
						</div>
						<p className="checkall">查看全部评价 <i className="iconfont icon-xiaotuziCduan_1 rt"></i></p>
					</div>
					<div className="empty"></div>
					<div className="menu maxbox">
						<h3>MENU</h3>
						<ul>
							{
								detailPage.modules[2].data.contents.map((i,index)=>{
									return <li key={index}>
											<h4><span>{i.sub_title}</span></h4>
											<ul>
												{
													i.text.map((sub_i,ind)=>{
														return <li key={ind}>{sub_i}</li>
													})
												}
											</ul>
									</li>
								})
							}
						</ul>
					</div>
					<div className="empty"></div>
					<div className="light maxbox">
						<h3>亮点</h3>
						<ul>
							{
								detailPage.modules[3].data.lights.map((i,index)=>{
									return <li key={index}>
										<div className="lights-img"><img src={i.img_url} alt=""/></div>
										<h3>{i.title}</h3>
										<p>{i.content}</p>
									</li>
								})
							}
						</ul>
					</div>
					<div className="empty"></div>
					<div className="usetip maxbox">
						<h3>使用提示</h3>
							{
								detailPage.modules[4].data.contents.map((i,index)=>{
									return <p key={index}><span className="dots"></span>{i.text}</p>
								})
							}
							<button><i className="iconfont icon-zaixiankefu"> </i> 联系客服</button>
					</div>
					<div className="empty"></div>
					<div className="gesslove maxbox">
						<h3>猜你喜欢</h3>
						<Link className="link" to='/'>
						<i className="fa fa-angle-left"></i>
						</Link>
						<ul>
							{
								detailPage.modules[5].data.recommend.map((i,index)=>{
									return <li key={index} className="clear">
										<div className="itemimg lt"><img src={i.product_image_url} alt=""/></div>
										<div className="lt descript">
											<p>{i.product_name}</p>
											<h5><span>{(i.price+"").slice(0,-2)}元/</span><span>{i.show_entity_name}</span></h5>
										</div>
									</li>
								})
							}
						</ul>
					</div>
		  		</div>
		  		<div className="delfoot">

		  		</div>
		      </div>
    		)    
    );
  }
}

export default Detail;
