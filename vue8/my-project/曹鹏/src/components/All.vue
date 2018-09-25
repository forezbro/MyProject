<template>
	<div class="all">
		<div class="top">
			<div class="camera" ><i class="fa fa-chevron-left" @click="goBack"></i></div>
			<div class="search"><i class="fa fa-search" aria-hidden="true"></i><input type="search" name='seh' placeholder="搜索物品"/></div>
		</div>
		<div class="posts">
			<ul class="title">
				<li @click="flag='post_li1'">品牌</li>
				<li @click="flag='post_li2'">系列</li>
				<li @click="flag='post_li3'">篮球鞋</li>
				<li @click="flag='post_li4'">跑鞋</li>
				<li @click="flag='post_li5'">休闲鞋</li>
				<li @click="flag='post_li6'">潮服</li>
				<li @click="flag='post_li7'">手办</li>
				<li @click="flag='post_li8'">配件</li>
				<li @click="flag='post_li9'">手表</li>
				<li @click="flag='post_li10'">其他</li>
			</ul>
			<div class="right">
				<transition enter-active-class="animated slideInRight">
					<component :is="flag"></component>
					</transition>
				<template>
					<ul>
						<li class="lis" v-for="(i,index) in arrList.logos">
							<img :src="i">
						</li>
					</ul>
				</template>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				flag:"post_li1",
				arrList:{}
			}
		},
		mounted () {
			this.fetchData()
		},
		methods:{
			goBack() {
			this.$router.go(-1)
			},
			fetchData () {
						var _this = this
				this.$http.get('static/data/all.data').then(function(res){
					 _this.arrList = res.data
					 console.log(res.data)
				}).catch(function(err){
					console.log(err)
				})
			}
		},
		components:{
			'post_li1':{
				template:`<h3>全部品牌</h3>`,
				data(){
					return{
					}
				}
			},
			'post_li2':{
				template:'<h3>全部篮球鞋</h3>',
				data(){
					return{
					}
				}
			},
			'post_li3':{
				template:'<h3>全部系列</h3>',
				data(){
					return{
					}
				}
			},
			'post_li4':{
				template:'<h3>全部跑鞋</h3>',
				data(){
					return{
					}
				}
			},
			'post_li5':{
				template:'<h3>全部休闲鞋</h3>',
				data(){
					return{
					}
				}
			},
			'post_li6':{
				template:'<h3>全部潮服</h3>',
				data(){
					return{
					}
				}
			},
			'post_li7':{
				template:'<h3>全部手办</h3>',
				data(){
					return{
					}
				}
			},
			'post_li8':{
				template:'<h3>全部配件</h3>',
				data(){
					return{
					}
				}
			},
			'post_li9':{
				template:'<h3>手表</h3>',
				data(){
					return{
					}
				}
			},
			'post_li9':{
				template:'<h3>其他</h3>',
				data(){
					return{
					}
				}
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.right{
		display: inline-block;
		vertical-align:top;
		width: 74vw;
		margin-left: 22vw;
		margin-top: 3rem;
		padding-top: 8px;
		h3{
			text-align: center;
			padding: 0.6rem 4rem;
			border:1px solid #ccc;
			width:40%;
			margin:0 auto;
			font-size: 1.4rem;
		}
	}
	.lis{
		width: 20vw;
		display: inline-block;
		margin: 2vw 2vw;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.search{
			background: #eee;
			display: inline-block;
			font-size: 1.4rem;
			width: 20rem;
			height: 2rem;
			line-height: 2rem;
			border-radius: 0.6rem;
			margin-top: 0.4rem;
			text-align: center;
			margin-left: 2rem;
			input{
				border: none;
				outline: none;
				background: #eee;
				padding-left: 1rem;
				text-align: center;
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
		.title{
			margin-top: 3rem;
			padding-top: 8px;
			width: 20vw;
			display: inline-block;
			position: fixed;
		}
		.top{
			position: fixed;
			background: white;
			width: 100%;
			padding-bottom: 1rem;
			border-bottom: 1px solid #ccc;
		}
		.title li{
			height: 16vw;
			text-align: center;
			display: inline-block;
			background: #eee;
			line-height: 16vw;
			width: 20vw;
			border-bottom: 1px solid white;
		}
</style>
