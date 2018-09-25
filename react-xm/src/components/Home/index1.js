import React, { Component } from 'react';
import './index.scss'
import axios from 'axios'
import Banner from './Banner'
import { Menu, Dropdown, Icon } from 'antd';
class Home extends Component {
	constructor(props){
	    super(props)
	    this.state = {
	      homedata: []
	    }
   }
   toDetail=(id)=>{
       this.props.history.push(`/details/${id}`);
   }
   getData=()=>{
	   axios.get('/enjoy/hub/home/v1/web/week_choice.json?city_id=140&page=0')
	        .then( res => {
	         this.setState({
	           homedata:res.data
         	})
       })
    }
    componentWillMount(){
    	this.getData();
    }
  render() {
  	let {homedata}= this.state;
    return (
      <div className="Home">
      	<header>
      		<div className="logo">
      			<img src={require("../../static/images/logo.png")}/>
      		</div>
      	</header>
      		<Banner/>
      		<div className="content">
      			{
      			homedata.map((i,index)=>{
      				return (
      				<div className="itemBox" key={index}>
      					<h3>{i.group_section.title}</h3>
      					<h5>{i.group_section.desc}</h5>
      					<ul>
      						{
      						i.tabs.map(m=>{
      							return (
      							<li className="itemMin" key={m.id} onClick={this.toDetail}>
  									<div className="imgbox"><img src={m.url}/></div>
    									<p>{m.title}</p>
    									<h5>{m.desc}</h5>
      							</li>
      							)
      						})
  						}
      					</ul>
      				</div>
      				)
      			})
      		}
      		</div>
      </div>
    );
  }
}

export default Home;
