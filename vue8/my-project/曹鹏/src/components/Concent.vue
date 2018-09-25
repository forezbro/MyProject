<template>
	<div class="concent">
		<div>
			<div class="search"><i class="fa fa-search" aria-hidden="true"></i><input type="search" name='seh' placeholder="搜索用户/物品/话题/咨询"/></div>
			<div class="camera"><i class="fa fa-camera" aria-hidden="true"></i></div>
		</div>
		<swipe1></swipe1>
		<ul class="nav">
			<li class="li"><swipe2></swipe2></li>
			<li>话题</li>
			<li>打卡</li>
			<li>日报</li>
			<li>最新</li>
		</ul>
		<ul   class="section">
			<li v-for="(item,index) in arrList">
				<router-link :to="'/detail/'+item.id">
					<img :src="item.title">
				</router-link>
			</li> 
		</ul>
		<Footer></Footer>
	</div>
	
</template>

<script>
	import Footer from './base/Footer'
// 	loadMore() {
//   this.loading = true;
//   setTimeout(() => {
//     let last = this.list[this.list.length - 1];
//     for (let i = 1; i <= 6; i++) {
//       this.list.push(last + i);
//     }
//     this.loading = false;
//   }, 1000);
// }
	import Swipe1 from './base/Swipe1'
	import Swipe2 from './base/Swipe2'
	export default {
	 components:{
		 Swipe1,
		 Swipe2,
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
			this.$http.get('static/data/index.data').then(function(res){
				 _this.arrList = res.data

			}).catch(function(err){
				console.log(err)
			})
		}
	 }
  }
</script>


<style lang='less' scoped>
	.search{
		background: #eee;
		display: inline-block;
		font-size: 1.4rem;
		width: 18rem;
		height: 2rem;
		line-height: 2rem;
		padding-left: 1rem;
		border-radius: 0.6rem;
		margin-top: 0.4rem;
		input{
			border: none;
			outline: none;
			background: #eee;
			padding-left: 1rem;
		}
	}
	.camera{
		float: right;
		margin-top: 0.4rem;
		padding-right: 1rem;
		font-size: 1.8rem;
		line-height: 2rem;
		color: #444;
	}
	.nav{
		text-align: center;
		padding: 1rem 0;
		li{
			vertical-align: top;
			display: inline-block;
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			margin:0px 0.4rem;
			color: white;
			line-height: 4rem;
			font-size: 1rem;
			overflow: hidden;
			background: rgba(0,0,0,.8);
		}
		.swipe2{
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
		.li{
			border: 1px solid red;
		}
	}
	.section li img{
		width: 100%;
		height: 100%;
	}
	.section{
		text-align: center;
	}
	.section li{
		display: inline-block;
		width: 32%;
		height: 32vw;
		margin: 0.1rem;

	}
</style>