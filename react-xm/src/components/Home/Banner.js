import React, { Component } from 'react';
import './index.scss'
import Swiper from 'swiper'
import axios from 'axios'
import 'swiper/dist/css/swiper.min.css'
const BoardItem = ({info}) => {
     return (
              <div className="swiper-slide">
               <div className="img-box">
                      <img src={info.url} width="100%"/>
                 </div>
              </div>
        )
}


class Banner extends Component {
   constructor(props){
    super(props)
    this.state = {
      boadList: []
    }
   }
  getBoardList=()=>{
   axios.get('/enjoy/hub/home/v1/web/week_choice.json?city_id=140&page=0')
        .then( res => {
         this.setState({
           boadList:res.data[0].tabs
         })
       })
    }
   
  componentWillMount () {
     this.getBoardList()
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
    let {boadList} = this.state
    return (
       <div ref={el => this.el = el} className="swiper-container banner banner-box">
        <div className="swiper-wrapper">
           {
            boadList.map(item => {
              return <BoardItem key={item.id} info={item}/>
            })
           }
         </div>
         <div className="swiper-pagination"></div>
      </div>
    );
  }
  
}

export default Banner;
