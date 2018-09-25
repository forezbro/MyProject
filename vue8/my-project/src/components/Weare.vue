<template>
	<div class="weare">
		<div class="nav">
			<i class="fa fa-chevron-left" @click="goBack"></i>
		</div>
		<div class="logo"><img src="../assets/imgas/go1.jpg"></div>
		<div class="dl">
			<button>微信登陆</button>
			<router-link  :to="{path:'/Registe'}"> 
				<p>其他方式登录</p>
			</router-link>
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
 		},
 		methods:{
 			goBack() {
 				this.$router.go(-1)
 			}
 		}
 }
</script>


<style scoped="scoped" lang="less">
.nav{
		padding-top: 0.4rem;
		height: 30px;
		position: absolute;
		z-index: 100;
		i{ 
			vertical-align: middle;
			display:inline-block;
			padding-left: 10px;
			font-size:20px;
			color: #333;
			top: 0;
		}
	}
	.logo{
		width: 100%;
		height: 100%;
		position: absolute;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.dl{
		z-index: 1000;
		position: absolute;
		width: 100%;
		bottom:3rem;
		text-align: center;
		button{
			font-size: 1.6rem;
			line-height: 40px;
			width: 92%;
			height: 40px;
			margin: 0 auto;
			display: block;
			border: none;
			background: skyblue;
			border-radius: 2px;
			color: white;
			outline: none;
		}
		p{
			margin-top: 1.2rem;
			color:skyblue ;
			font-size: 1.4rem;
			background: transparent;
		}
	}
</style>