import React, { Component } from 'react';
import './index.scss'
import {Link} from 'react-router-dom'
import LoginForm from './LoginForm'
import {bindActionCreators} from 'redux'
class Login extends Component {
  render() {
    return (
      <div className="login">
				<header>
					<div className="back">
							<Link to='/'>
							<i className="fa fa-angle-left"></i>
							</Link>
					</div>
				</header>
				<div className="logo"><img alt="logo" src={require('../../../static/logo2.png')}  /></div>
				<LoginForm history={this.props.history}/>
      </div>
    );
  }
}

export default Login;
