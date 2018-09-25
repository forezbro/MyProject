<template>
   <div class="detail">
   	  <div class="content">
					<div class="nav">
						<i class="fa fa-chevron-left" @click="goBack"></i>
						<div class="logo1" ><img :src="arrList.title"></div>
						<div class="names">
							<p>{{arrList.name}}</p>
							<span>{{arrList.time}}</span>
						</div>
						<span class="gz">关注</span>
					</div>
					<div class="swiper-container gallery-top">
					<div class="swiper-wrapper">
						<div class="swiper-slide top"><img :src="arrList.title"></div>
						<div class="swiper-slide top" v-for="i in arrList.tp"  ><img :src="i"></div>
					</div>
				</div>
				<div class="swiper-container gallery-thumbs">
					<div class="swiper-wrapper">
						<div class="swiper-slide top"><img :src="arrList.title"></div>
						<div class="swiper-slide bottom" v-for="i in arrList.tp" ><img :src="i"></div>
					</div>
				</div>
				<p class="speack">{{arrList.speack}}</p>
				<div class="go">
					<i class="fa fa-share-square-o" aria-hidden="true"></i><span
					<i class="fa fa-comment-o" aria-hidden="true"></i><span>{{arrList.pl}}</span>
					<i class="fa fa-heart-o" aria-hidden="true"></i><span>{{arrList.like}}</span>
				</div>
				<p class="all-pl">全部评论</p>
				<div class="people" v-for="item in arrList.allpl">
					<div><img :src="item.logo"></div>
					<div class="concent">
						<p>{{item.names}}</p>
						<p>{{item.talk}}</p>
						<p class="bottom-p"><span>{{item.times}}</span><i class="fa fa-thumbs-o-up" aria-hidden="true"></i><span>{{item.likes}}</span><i class="fa fa-commenting-o" aria-hidden="true"></i></p>
					</div>
				</div>
				<div class="both"></div>
				<div class="last"><input type="text" name="neirong" placeholder="评论..."><i class="fa fa-picture-o" aria-hidden="true"></i><i class="fa fa-comments-o" aria-hidden="true"></i> </div>
   	 </div>
   </div>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.css';
  export default {
       data() {
       	 return {
          arrList:{}
       	 }
       },
       mounted(){
         	var reg=/\/detail\/(\d+)/;
					 var id = this.$route.path.match(reg)[1]
					 this.fetchData(id)
					
       },
	   updated(){
		   var galleryTop = new Swiper('.gallery-top', {
		   spaceBetween: 10,
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
	   },
       methods:{
       	 fetchData(id){
       	 	var _this = this
           this.$http.get('static/data/detail.data')
               .then(function(res){
               	console.log(res.data[id])
               	console.log(res.data)
               	_this.arrList = res.data[id]
               }).catch(function(err){
               	console.log(err)
               })
       	 },
       	 goBack() {
       	 	this.$router.go(-1)
       	 }
       }
			
  }
</script>
<style scoped lang="less">
	.speack{
		margin: 0 auto;
		width: 94%;
		color: black;
	}
	.gallery-top {
		height: 24rem;
		width: 100%;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.gallery-thumbs {
		height: 20%;
		box-sizing: border-box;
		padding: 10px 0;
		 img{
			 width: 100%;
			 height: 100%;
		 }
	}
	.gallery-thumbs .swiper-slide {
		width: 16%;
		height: 16vw;
		opacity: 0.6;
	}
	.gallery-thumbs .swiper-slide-active {
		opacity: 1;
		border: 1px solid red;
	}
	.gallery-thumbs{
		width: 94%;
		margin: 0 auto;
	}
	.bottom{
		margin: 0 0.4rem;
	}

.detail{
	width: 100%;
	position: absolute;
	top:0;
	left:0;
	bottom:0;
	right: 0;
	background: #fff;
	z-index: 999999;
	.nav{
		border-bottom: 1px solid #ccc;
		padding-top: 0.4rem;
		height: 40px;
		i{ 
			vertical-align: middle;
			display: inline-block;
			 padding-left: 10px;
			 font-size:20px;
			 color: #333;
			 top: 0;
		}
		div{
			display: inline-block;
		}
		.logo1{
			margin-left: 0.6rem;
			vertical-align:middle;
			width: 3rem;
			height: 3rem;
			background: black;
			border-radius: 50%;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
				z-index: 10000;
			}
		}
		.names{
			vertical-align: middle;
			margin-left: 0.6rem;
			p{
				font-size: 1.5rem;
			}
			span{
				font-size: 1rem;
				color: #ccc;
			}
		}
		.gz{
			float: right;
			margin: 0.6rem 0.4rem 0 0;
			font-size: 1.4rem;
			color: #7FFFD4;
		}
	}
	.go{
		height: 3rem;
		vertical-align: middle;
		border-bottom: 1px solid #ccc;
	}
	.go i{
		display: inline-block;
		font-size: 2rem;
		line-height: 3rem;
	}
	.go>i:nth-child(1){
		margin-left: 3vw;
	}
	.go>i:nth-child(2){
		margin-left: 4vw;
	}
	.go>i:nth-child(4){
		margin-left: 50vw;
	}
}
.all-pl{
		margin: 4px 0;
		background: #eee;
		height: 2rem;
		line-height: 2rem;
}
.people{
	padding-bottom: 10px;
	border-bottom: 1px solid #ccc;
	margin: 0.4rem 0.4rem;
}
.people>div{
	display: inline-block;
}
.people>div:nth-child(1){
	width: 2.6rem;
	height: 2.6rem;
	vertical-align: top;
	img{
		width: 100%;
		height: 100%;
	}
}
.concent{
	margin-left: 0.4rem;
}
.concent i:nth-child(2){
	margin-left: 40vw;
	font-size: 1.7rem;
}
.concent i:nth-child(4){
	margin-left: 5vw;
	font-size: 1.7rem;
}
.concent p{
	font-size: 1.5rem;
}
.concent>p:nth-child(1){
	color: silver;
	font-size: 1.2rem;
}
.concent>p:nth-child(2){
	margin: 0.6rem 0px;
	font-size: 1.3rem;
}
.footer{
	display: none!important;
}
.bottom-p>span:nth-child(1){
		font-size: 1rem;
		color: silver;
}
.both{
	width: 100%;
	height: 3rem;
	background: white;
}
.last{
	position: fixed;
	bottom: 0;
	left: 0;
	line-height: 3rem;
	width: 100%;
	height: 3rem;
	background: white;
	border-top: 1px solid #ccc;
	input{
		outline: none;
		border: none;
		height: 3rem;
		padding-left: 2rem;
		padding-right: 5rem;
	}
	i{
		display: inline-block;
		font-size: 1.8rem;
		margin: 0px 1rem;
	}
}
</style>