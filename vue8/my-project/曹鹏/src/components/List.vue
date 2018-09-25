<template>
	<div class="list">
		<div>
			<router-link  :to="{path:'/all'}"> 
				<div class="camera " ><i class="fa fa-outdent" aria-hidden="true"></i></div>
			</router-link>
		</div>
		<div class="search"><i class="fa fa-search" aria-hidden="true"></i><input type="search" name='seh' placeholder="搜索用户/物品/话题/咨询"/></div>
		<router-link  :to="{path:'/car'}"> 
			<div class="faa" ><i class="fa fa-cart-plus" aria-hidden="true"></i></div>
		</router-link>
		<swipe1></swipe1>
		<ul class="more">
			<li><img src="../assets/imgas/xz1.png"></li> 
			<li><img src="../assets/imgas/xz2.png"></li>
			<li><img src="../assets/imgas/xz3.png"></li> 
			<li><img src="../assets/imgas/xz4.png"></li> 
			<li><img src="../assets/imgas/xz5.png"></li> 
			<li><img src="../assets/imgas/xz6.png"></li>
			<li><img src="../assets/imgas/xz7.png"></li> 
			<router-link  :to="{path:'/all'}"> 
			<li><img src="../assets/imgas/xz8.png"></li> 
			</router-link>
		</ul>
		<ul class="more">
			<li><img src="../assets/imgas/fl4.png"></li> 
			<li><img src="../assets/imgas/fl3.png"></li> 
			<li><img src="../assets/imgas/fl2.png"></li> 
			<li><img src="../assets/imgas/fl1.png"></li> 
		</ul>
		<p class="title"><i class="fa fa-gitlab" aria-hidden="true"></i>人气单品</p>
		<ul   class="section">
			<li v-for="(item,index) in arrList">
				<router-link :to="'/Section/'+item.id">
					<div class="concent">
						<div><img :src="item.logo"></div>
						<p>{{item.title}}</p>
						<p><span>{{item.mach}}</span><a>{{item.people}}</a></p>
					</div>
				</router-link>
			</li> 
		</ul>
		<Footer></Footer>
	</div>
</template>

<script>
	import Swipe1 from './base/Swipe1'
	import Car from './Car'
	import Footer from './base/Footer'
export default {
 components:{
 	Swipe1,
	Footer
 },
 data() {
 	return {
 		arrList:[]
 	}
 },
 mounted () {
 	this.fetchData()
 },
methods: {
		fetchData () {
					var _this = this
			this.$http.get('static/data/article.data').then(function(res){
				 _this.arrList = res.data
			}).catch(function(err){
				console.log(err)
			})
		}
	 }
  }
</script>


<style scoped="scoped" lang="less">
.search{
		background: #eee;
		display: inline-block;
		font-size: 1.4rem;
		width: 18rem;
		height: 2rem;
		line-height: 2rem;
		border-radius: 0.6rem;
		margin-top: 0.4rem;
		margin-left: 2rem;
		input{
			border: none;
			outline: none;
			background: #eee;
			padding-left: 1rem;
		}
	}
	.camera{
		float: left;
		margin-top: 0.4rem;
		padding-left: 1rem;
		font-size: 1.8rem;
		line-height: 2rem;
		color: #444;
	}
	.more{
		margin: 3vw 0;
	}
	.more li{
		display: inline-block;
		width: 23vw;
		height: 22vw;
		margin: 0px 0.4vw;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.title{
		text-align: center;
		font-size: 1.4rem;
		background: #eee;
		padding:1.5vw 0;
	}
	.concent{
		float: left;
		width: 100%;
		background: white;
		img{
			width: 100%;
			height: 100%;
		}
		}
	.concent>div:nth-child(1){
		text-align:center;
		img{
			width: 90%;
			height: 9rem;
			display: inline-block;
		}
	}
	.concent>p:nth-child(2){
		color: #444;
		font-size: 1.4rem;
		margin-top: 0.4rem;
		margin: 0 auto;
		width: 90%;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2; 
	}
	.concent>p:nth-child(3){
		margin: 0 auto;
		width: 90%;
		padding: 1rem 0;
		overflow: hidden;
		span{
			color: #444;
			font-size: 1.2rem;
			font-weight: bold;
			display: inline-block;
			float: left;
		}
		a{
			font-size: 1.1rem;
			color: #ccc;
			float: right;
		}
	}
.section{
		background: #eee;
		text-align: center;
		li{
			width: 48%;
			margin: 0.1rem;
			overflow: hidden;
			display: inline-block;
		}
	}
	.faa{
		position: absolute;
		right: 1rem;
		top: 0.4rem;
		font-size: 1.8rem;
		line-height: 2rem;
		color: #444;
	}
</style>