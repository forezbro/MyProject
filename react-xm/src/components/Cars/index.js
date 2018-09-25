import React, { Component } from 'react';
import './index.scss'
import axios from 'axios'
class Cars extends Component {
	state={
		cars:[]
	}
	getData(){
		  axios.get('/enjoy/product/info/product_detail.json?product_id=1024432&sub_product_id=5049374')
		  .then (res => {
		  	console.log(res.data.modules[5].data.recommend
)
	  		 this.setState({
         	 cars:res.data.modules[5].data.recommend			
        });
      })

	}
	componentDidMount(){
		this.getData();
	}
	 tohome=()=>{
		 	this.props.history.go(-1)
	 }
	 togglecars=()=>{
	 	const myCars=this.refs.myCars;
	 	const cars=this.refs.cars;
	 	const hots=this.refs.hots;
	 	myCars.style.marginLeft="0";
	 	cars.classList.add("active")
	 	hots.classList.remove("active")
	 }
	 togglehots=()=>{
	 	const myCars=this.refs.myCars;
	 	const cars=this.refs.cars;
	 	const hots=this.refs.hots;
	 	cars.classList.remove("active")
	 	hots.classList.add("active")
	 	myCars.style.marginLeft="-100vw";
	 }
  render() {
  	const {cars} =this.state;
    return (
      <div className="Cars clear">
      	<div className="tabs lt">
  			<i className="iconfont icon-xiangzuo2 lt" onClick={this.tohome}></i>
      		<span className="tabcars active" onClick={this.togglecars} ref="cars">购物车</span>
      		<span className="tabhot" onClick={this.togglehots} ref="hots">今日推荐</span>
      	</div>
      	<div className="carscon clear">
      		<div className="myCars lt" ref="myCars">
	      		<p>好像里面什么都没有~~~</p>
	      	</div>
	      	<div className="myclose lt" ref="myclose">
				<ul>
					{
						cars.map((i,index)=>{
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
      </div>
    );
  }
}

export default Cars;
