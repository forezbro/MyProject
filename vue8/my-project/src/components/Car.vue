<template>
	<div class="car">
		<div class="nav">
			<i class="fa fa-chevron-left" @click="goBack"></i>
			<p>我的购物车</p>
		</div>
		<div class="section">
			<div class="sections">
				<div class="logo"><img src="../../build/logo.png"></div>
				<div class="concent">
					<p>asdasdasdasdasd</p>
					<div>
						<span>asde</span>
						<div>
							<button>-</button><a>2</a><button>+</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="lasr">
			<button>付款</button>
			<button>总计：</button>
		</div>
	</div>
</template>
<script>
	import { mapMutations } from 'vuex'
	import { mapGetters } from 'vuex'
 export default {
	 name:'Car',
 		data() {
 			return {
 				arrList:{}
 			}
 		},
 		mounted(){
 		},
 		methods:{
 			goBack() {
 				this.$router.go(-1)
 			},
		...mapMutations(
					["deleteGoods","updateGoods"]
				),
				findPosition(id){
					return this.goodsList.findIndex(item=>{
						return item.id==id
					 })
				},
		
				changeNumber(id,val){
					var i=this.findPosition(id);
					var number=this.goodsList[i].number;
					this.updateGoods({
						  index:i,
						  key:"number",
						  value:number+val<=0?1:number+val
					 })
				},
		
				del(id){
					 var i=this.findPosition(id);
					this.deleteGoods(i);
				},
		
				toggleSelect(id){
					var i=this.findPosition(id);
					 var select=this.goodsList[i].select;
					 this.updateGoods({
						  index:i,
						  key:"select",
						  value:!select
					 })            
				}
 		},
		computed:{
				...mapGetters(
						[ "sum"]
				),   
				goodsList(){
						return this.$store.state.goodsList
				}
		},
		beforeRouteEnter(to,from,next){
				if(!sessionStorage.getItem("token")){
						next({
								path: '/login',
								query: { redirect: to.fullPath }
						})
				}else{
						next();
				}       
		}
 }
</script>
<style lang="less" scoped="scoped">
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
	.nav{
			padding-top: 0.4rem;
			height: 30px;
			text-align: center;
			z-index: 100;
			border-bottom: 1px solid #ccc;
			i{ 
				vertical-align: middle;
				float: left;
				display:inline-block;
				padding-left: 10px;
				font-size:20px;
				color: #333;
				top: 0;
			}
			p{
				display: inline-block;
				font-size: 1.6rem;
			}
		}
		.sections{
			padding: 0.8rem 0.4rem;
			border-bottom: 1px solid #ccc;
			.logo{
				border: 1px solid #ccc;
				width: 16vw;
				padding: 0.4rem;
				height: 16vw;
				img{
					width: 100%;
					height: 100%;
				}
			}
			div{
				vertical-align: top;
				display: inline-block;
			}
		}
		.concent{
			padding-left: 1rem;
			p{
				font-size: 1.4rem;
				
			}
			span{
				font-size: 1.5rem;
				display: inline-block;
				padding-top: 1rem;
				font-weight: bold;
			}
			div{
				div{
					width: 60vw;
					padding-top: 1rem;
					float: right;
					text-align: right;
					display: inline-block;
					a{
						font-size: 1.6rem;
						color: red;

					}
				}
			}
			button{
				margin: 0px 1rem;
				border: none;
				outline: none;
				background: white;
				font-size: 2rem;
			}
	}
</style>