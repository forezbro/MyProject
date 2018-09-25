import React, { Component } from 'react';
import './index.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import action from '../../../store/user/action'


class User  extends Component {
  render() {
    return (
      <div className="mine-user page-footer ">
					<div className = "bg-box">
						<div>
							 <div className="tx"><img alt="logo" src={require('../../../static/tx.png')}/></div>
							 <p>人很话多社会GAI</p>
						</div>
					</div>
					<div className = "info-box">
							<div className="box-1">
								<div>
									<p>会员权益<span>去开通</span></p>
									<span>开通会员每月平均多帮你赚 2046 元</span>
								</div>
								<ul>
									<li>
										<div className="active"><img alt="logo" src={require('../../../static/active1.png')}/></div>
										<p>会员大礼包</p>
									</li>
									<li>
										<div className="active"><img alt="logo" src={require('../../../static/active2.png')}/></div>
										<p>会员专享价</p>
									</li>
									<li>
										<div className="active"><img alt="logo" src={require('../../../static/active3.png')}/></div>
										<p>会员特权日</p>
									</li>
									<li>
										<div className="active"><img alt="logo" src={require('../../../static/active4.png')}/></div>
										<p>专属客服</p>
									</li>
								</ul>
							</div>
							<div className="box-2">
								<p>我的订单<span>></span></p>
							</div>
							<div className="box-2">
								<p>我的优惠卷<span>></span></p>
							</div>
							<div className="box-2">
								<p>地址管理<span>></span></p>
							</div>
							<button onClick={this.props.exit}>退出登录</button>      
							<div className="bj"></div>
					</div>
      </div>
    );
  }
}

export default connect(state => state,
                        dispatch => {
                       	 return bindActionCreators(action,dispatch)
                       }
	            )(User);
