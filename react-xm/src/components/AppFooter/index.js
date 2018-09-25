import React, { Component } from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';

class AppFooter extends Component {
  renderNavs () {
 	let {navs} = this.props
   return navs.map(item => (
            <NavLink to={{pathname:item.path}} key={item.id} exact={item.exact} className="actived">
              <i className={`fa fa-${item.icon}`}></i>
            </NavLink>
   	))
 }
  render() {
    return (
      <div className="AppFooter">
      	{this.renderNavs()}
      </div>
    );
  }
}

AppFooter.defaultProps={
	navs:[
	 {id:1,path:"/home",icon:"home"},
	 {id:2,path:"/list",icon:"th"},
	 {id:4,path:"/cars",icon:"shopping-cart"},
   {id:3,path:"/mine",icon:"globe"}
	]
}
export default AppFooter;
