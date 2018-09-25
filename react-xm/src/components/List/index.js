import React, { Component } from 'react';
import './index.scss'
import {connect} from 'react-redux'
import {changeId} from '../../store/deta/action'
import axios from 'axios'
import { Spin } from 'antd';
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
class List extends Component {
	state={
		listData:[],
		haveData:true
	}
	getData=()=>{
	   const dataid =this.props.deta.dataId;
	   axios.get(`/enjoy/hub/home/v1/web/explore.json?city_id=${dataid}`)
	        .then( res => {
	         this.setState({
	           listData:res.data,
	           haveData:false
         	})
       })
	}
	componentDidMount(){
		this.getData()
		
	}
	componentDidUpdate () {
	   var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 1,
	      spaceBetween: 10,
	      loop: true,
	      autoplay: {
	        delay: 2500,
	        disableOnInteraction: false,
	      }
	    });
	   var swiper1 = new Swiper('.swiper-container1', {
	      slidesPerView: 2.2,
	      spaceBetween: 9,
	      loop: true
	    });
	 }
	 tohome=()=>{
	 	this.props.history.go(-1)
	 }
  render() {
  	const {listData} =this.state;
    return (
      this.state.haveData? <div className="loading"><Spin size="large" /></div>:
      <div className="List">
      	<div className="header">
			<span className="iconfont icon-xiangzuo2 lt" onClick={this.tohome}></span>
			<img alt="logo" src={require('../../static/logo1.png')} />
      	</div>
				
  			<div className="subitem sub1">
				<h3>{listData[0].data.group_section.title}</h3>
				<h5>{listData[0].data.group_section.desc}</h5>
				<div className="swiper-container banner">
					<div className="swiper-wrapper">
						{	
							listData[0].data.tabs.map((i,index)=>{
								return <div className="swiper-slide mid1" key={index}>
											<div className="imgbox">
												<img alt="" src={i.url}/>
											</div>
											<h5>{i.tag}</h5>
											<h3>{i.title}</h3>
											<p>{i.desc}</p>
									</div>
							})
						}
					</div>
				</div>
  			</div>
  			<div className="subitem sub2">				
				<div className="swiper-container1 banner">
					<div className="swiper-wrapper">
						{
							listData[1].data.tabs.map((i,index)=>{			
								return <div className="midbox swiper-slide"  key={index}>
									<div className="layer">
										<img alt="" src={require(`../../static/images/layeri${index}.png`)}/>
									</div>
									<div className="content">
										<p>{i.title}</p>
										<h5>{i.desc}</h5>
									</div>						
								</div>
							})
						}
					</div>	
				</div>	
  			</div>
  			<div className="subitem sub3">
				<div className="subimg">
					<img alt="" src={listData[2].data.tabs[0].url}/>
				</div>
				<p>{listData[2].data.tabs[0].title}</p>
				<h3>{listData[2].data.tabs[0].desc}</h3>
  			</div>
  			<div className="subitem sub4 more">
  				<div className="subTop">
  					<p>
	  					<span>{listData[3].data.group_section.title}</span>
	  					<small className="rt">{listData[3].data.group_section.enjoy_url_text}</small>
  					</p>
					<h5>{listData[3].data.group_section.desc}</h5>
  				</div>
  				<ul className="clear">
					{
						listData[3].data.tabs.map((i,index)=>{
							return <li key={index} className="lt"><img alt="" src={i.url}/></li>
						})
					}
  				</ul>
  			</div>
  			<div className="subitem sub5 more">
  				<div className="subTop">
  					<p><span>{listData[4].data.group_section.title}</span>
  					<small className="rt">{listData[4].data.group_section.enjoy_url_text
						}</small></p>
					<h5>{listData[4].data.group_section.desc}</h5>
  				</div>
  				<ul className="clear">
					{
						listData[4].data.tabs.map((i,index)=>{
							return <li key={index} className="lt"><img alt="" src={i.url}/></li>
						})
					}
  				</ul>
  			</div>
  			<div className="subitem sub6 more">
  				<div className="subTop">
  					<p><span>{listData[5].data.group_section.title}</span>
  					<small className="rt">{listData[5].data.group_section.enjoy_url_text
						}</small></p>
					<h5>{listData[5].data.group_section.desc}</h5>
  				</div>
  				<ul className="clear">
					{
						listData[5].data.tabs.map((i,index)=>{
							return <li key={index} className="lt"><img alt="" src={i.url}/></li>
						})
					}
  				</ul>
  			</div>
      </div>
    );
  }
}

export default  connect(state => state,
						{changeId}
	            )(List);
