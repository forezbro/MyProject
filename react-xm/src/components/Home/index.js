import React, { Component } from 'react';
import './index.scss'
import axios from 'axios'
import Banner from './Banner'
import antd from 'antd'
import {connect} from 'react-redux'
import {changeId,changeShow} from '../../store/deta/action'
import { Spin } from 'antd';
const BoardItem = ({info,toDetail}) => { 
         const linkId =info.enjoy_url.replace(/[^0-9]/ig,"")
         toDetail = toDetail.bind(this, linkId)
          return (
             <li className="itemMin" onClick={toDetail}>
                  <div className="imgbox"><img src={info.url}/></div>
                  <p>{info.title}</p>
                  <h5>{info.desc}</h5>
              </li>
          )
}

    

class Home extends Component {
	constructor(props){
	    super(props)
	    this.state = {
	      homedata: [],
        haveData:true
	    }
   }
   toDetail=(id)=>{
       this.props.history.push(`/detail/${id}`);
   }
   getData=()=>{
     const dataid =this.props.deta.dataId;
	   axios.get(`/enjoy/hub/home/v1/web/week_choice.json?city_id=${dataid}&page=0`)
	        .then( res => {
	         this.setState({
	           homedata:res.data,
             haveData:false
         	})
       })
    }
    componentWillMount(){
      this.getData();   
    }
    componentDidMount(){
        
    }
    onClick =({ key})=>{
      const changeId=this.props.changeId;
      changeId(key)
      this.getData();
    }
  render() {
        
  	let {homedata}= this.state;
    return (
      this.state.haveData ?  <div className="loading"><Spin size="large" /></div>:
      <div className="Home">
      <header>
      		<div className="header">
      			<i className={'fa fa-th'}></i>
      			<img alt="logo" src={require('../../static/logo1.png')} />
      	</div>
      </header>
      	
        <div className="homeBanner"><Banner/></div>	
      		<div className="content">
      			{
      			homedata.map((i,index)=>{
      				return (
      				<div className="itemBox" key={index}>
      					<h3>{i.group_section.title}</h3>
      					<h5>{i.group_section.desc}</h5>
      					<ul>
      						{
      						i.tabs.map(item=>{
      							 return <BoardItem toDetail = {this.toDetail} info = { item } key = {item.id}/>
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

export default connect(
        state=>state,
        {changeId,changeShow}
  )(Home);
