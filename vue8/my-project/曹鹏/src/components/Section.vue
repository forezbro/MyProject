<template>
	<div class="Section">
		<div class="content">
			<div class="nav">
				<i class="fa fa-chevron-left" @click="goBack"></i>
				<div class="head"><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-share-square-o" aria-hidden="true"></i></div>
			</div>
			<swipe class ="my-swipe">
				  <swipe-item class ="slide1" v-for="item in arrList.logos"><img :src="item"></swipe-item>
			</swipe>
			<div class="wz">
				<p>{{arrList.title}}</p>
				<p>{{arrList.mach}}</p>
				</div>
			<div class="sala">
				<p><span>优惠</span><a>{{arrList.yh}}</a></p>
				<p><span>选择尺码</span><a>请选择尺码</a><i class="fa fa-angle-right" aria-hidden="true"></i></p>
			</div>
			<div class="lasr">
				<button>收藏</button>
				<button>立即购买</button>
			</div>
			<ul class="sj">
				<li><div><img src="../assets/imgas/sj1.png"></div><p>商品保证</p></li>
				<li><div><img src="../assets/imgas/sj2.png"></div><p>平台鉴别</p></li>
				<li><div><img src="../assets/imgas/sj3.png"></div><p>交易流程</p></li>
				<li><div><img src="../assets/imgas/sj4.png"></div><p>售后权益</p></li>
			</ul>
			<ul class="detail">
				<li>配送 &nbsp;顺丰速运</li>
				<li>发售日期 &nbsp;2018.08.03</li>
				<li>配色 &nbsp;白</li>
				<li>发售价格 &nbsp;￥1099 仅供参考</li>
				<li>货号 &nbsp;AA3830-100</li>
				<li>不支持7天无理由退换货</li>
			</ul>
			<div class="snaker">
				<p>相关商品</p>
				<ul>
					<li v-for="j in arrList.xgsp">
						<img :src="j.logo1">
						<p>{{j.titles}}</p>
						<p>{{j.machs}}</p>
					</li>
				</ul>
			</div>
			<div class="time">最近购买 ({{arrList.people}})</div>
			<div class="good">
				<p>穿搭精选</p>
				<ul><li  v-for="i in arrList.details"><img :src="i"></li></ul>
			</div>
			</div>
	</div>
</template>
<script>
  export default {
       data() {
       	 return {
          arrList:{}
       	 }
       },
       mounted(){
         	var reg=/\/Section\/(\d+)/;
					 var id = this.$route.path.match(reg)[1]
						this.fetchData(id)
       },
       methods:{
       	 fetchData(id){
       	 	var _this = this
           this.$http.get('static/data/follow.data')
               .then(function(res){
               	console.log(res.data[id])
               	_this.arrList = res.data[id]
               }).catch(function(err){
               })
       	 },
       	 goBack() {
       	 	this.$router.go(-1)
       	 }
       }
			
  }
</script>
<style scoped="scoped" lang="less">
	@import 'vue-swipe/dist/vue-swipe.css';
	.nav{
		padding-top: 0.4rem;
		height: 30px;
		i{ 
			vertical-align: middle;
			display:inline-block;
			padding-left: 10px;
			font-size:20px;
			color: #333;
			top: 0;
		}
	}
	.head{
		display: inline-block;
		float: right;
		font-size: 1.4rem;
	}
	.my-swipe{
		height: 20rem;
		color:#fff;
		font-size:30px;
		text-align:center;
	}
	.slide1{
		color:#fff;
		img{
			width: 80%;
			height: 100%;
		}
	}
	.wz{
		margin: 0 auto;
		width: 80%;
		text-align: center;
	}
	.wz>p:nth-child(1){
		font-size: 2rem;
		color: #333;
	}
	.wz>p:nth-child(2){
		font-size: 2rem;
		color: #000;
		font-weight: bold;
	}
	.lasr{
		bottom: 0;
		left: 0;
		width: 100%;
		position: fixed;
		height: 50px;
		line-height: 50px;
		background: #EEEEEE;
	}
	.lasr>button:nth-child(1){
		padding:0.7rem 1.4rem ;
		background: white;
		border: 1px solid #ccc;
		outline: none;
		font-size: 1.4rem;
		margin-left: 1rem;
	}
	.lasr>button:nth-child(2){
		padding:0.7rem 6.4rem ;
		background: white;
		border: 1px solid #ccc;
		outline: none;
		font-size: 1.4rem;
		margin-left: 1rem;
		background: #42B983;
		color: white;
		border: none;
		border-radius: 2px;
	}
	.sala{
		margin-left: 0.4rem;
		margin-top: 1rem;
	}
	.sala>p:nth-child(1){
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
			span{
				display: inline-block;
				width: 6rem;
				font-size: 1.2rem;
				color: silver;
				padding: 0.6rem;
		}
		a{
			color: red;
			font-size: 1.2rem;
		}
	}
	.sala>p:nth-child(2){
			span{
				display: inline-block;
				width: 6rem;
				font-size: 1.2rem;
				color: silver;
				padding: 0.6rem;
		}
		a{
			font-size: 1.2rem;
		}
		i{
			float: right;
			line-height: 2.4rem;
			font-size: 1.4rem;
			margin-right: 10px;
		}
	}
	.sj{
		text-align: center;
		border-top: 8px solid #eee;
		border-bottom: 8px solid #eee;
		padding: 0.6rem 0;
		li{
			display: inline-block;
			margin: 0 1rem;
			div{
				height: 3rem;
				width: 4rem;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.detail{
		padding: 0.6rem 0;
		border-bottom: 8px solid #eee;
		padding-left: 0.4rem;
		li{
			display: inline-block;
			width: 48%;
			line-height: 26px;
			color: slategrey;
		}
	}
	.time{
		padding: 0.6rem 0.4rem;
		border-bottom: 8px solid #eee;
	}
	.good{
		padding-bottom: 70px;
		p{
			padding: 0.6rem 0.4rem;
		}ul{
			li{
				width: 32%;
				height: 8rem;
				display: inline-block;
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.snaker{
		border-bottom: 8px solid #eee;
		padding-bottom: 1rem;
		p{
			padding: 0.6rem 0.4rem;
			border-bottom: 8px solid #eee;
		}
		ul{
			text-align: center;
			p{
				border: none;
			}
			li{
				width: 33%;
				display: inline-block;
				img{
					width: 100%;
				}
				p{
					overflow:hidden; 
					text-overflow:ellipsis;
					display:-webkit-box; 
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2; 
					padding: 0;
				}
			}
			li p:nth-child(3){
				font-weight: bold;
			}
			}
	}
</style>