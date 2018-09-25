import React, { Component } from 'react';
import Swiper from 'swiper'

import axios from 'axios'
import './index.scss'
import 'swiper/dist/css/swiper.min.css'

class List1 extends Component {
	componentDidMount() {
		 var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

}
  render() {
    return (
      <div className="List1">
      	<div className="swiper-container gallery-top">
					<div className="swiper-wrapper">
									<div className="swiper-slide"><img alt="logo" src={require('../../static/food1.png')}/></div>
									<div className="swiper-slide"><img alt="logo" src={require('../../static/food2.png')}/></div>
									<div className="swiper-slide"><img alt="logo" src={require('../../static/food3.png')}/></div>
									<div className="swiper-slide"><img alt="logo" src={require('../../static/food4.png')}/></div>
					</div>
					</div>
					<div className="swiper-container gallery-thumbs">
						<div className="swiper-wrapper">
									<div className="swiper-slide"><img alt="logo" src={require('../../static/food1.png')}/></div>
									<div className="swiper-slide"><img alt="logo" src={require('../../static/food2.png')}/></div>
									<div className="swiper-slide"><img alt="logo" src={require('../../static/food3.png')}/></div>
									<div className="swiper-slide"><img alt="logo" src={require('../../static/food4.png')}/></div>
					</div>
			</div>

      </div>
    );
  }
}

export default List1;
