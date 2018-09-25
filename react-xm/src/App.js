import React, { Component } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom'
import {Home,Cars,List,Mine,Detail} from './components'
import AppFooter from './components/AppFooter/index.js'
class App extends Component {
      // 把参数绑定到  构造函数的state里面
  renderRoute(){
		var routeArr=['/mine/login',`/detail/${id}`];
		var routeArr1=['/mine/login','/mine/user','/mine/login'];
    let pathname=this.props.location.pathname;
    let arr=pathname.split("/")
    let id=arr[arr.length-1];
    
    if(!routeArr.includes(pathname)) return <AppFooter/>;
    if(routeArr1.includes(pathname)){
      var btn = this.refs.backbtn;
      if(btn){
        btn.style.display="none";
      }
    }
    else{
      if(btn){
        btn.style.display="block";
      }
    }
  }
  backtop=()=>{
      window.scrollBy(0,-50); 
      var timer = setTimeout(this.backtop,1);
      if(document.documentElement.scrollTop===0) clearTimeout(timer);
      
  }
  componentDidMount(){
    var btn=this.refs.backbtn;
    window.onscroll=function(){     
      document.documentElement.scrollTop<"200"?
      btn.style.display="none" :btn.style.display="block";
    }
  }
  
  render() {
     
    const {componentsArr}=this.props;
    return (
      <div className="App">
      <Switch>
        {
         componentsArr.map(item => {
           return <Route path={item.path} component={item.component} key={item.id}/>
         })
        }
        <Redirect to='/home'/>
      </Switch>
        {this.renderRoute()}
        <div className="backtop" onClick={this.backtop} ref="backbtn">
          <i className="iconfont icon-huidaodingbu"></i>
        </div>
      </div>

    );
  }
}
App.defaultProps={
  componentsArr:[
  {id:1,path:"/home",component:Home,tit:"home"},
  {id:2,path:"/list",component:List,tit:"list"},
  {id:3,path:"/cars",component:Cars,tit:"cars"},
  {id:4,path:"/mine",component:Mine,tit:"mine"},
  {id:5,path:'/detail/:id',component: Detail}
  ]
}
export default withRouter(App);
