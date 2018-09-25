<template>
	<div class="home">
		<Swipe></Swipe>
		<h1>多重鉴别,超凡体验</h1>
		<!-- <div class="logo"><img src="../assets/imgas/logo.png"></div> -->
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from './base/Footer'
import Swipe from './base/Swipe'
export default {
	
	 components:{
	  Footer,
	 	Swipe
	 }
	
  }
</script>



<style scoped lang="less" scoped>
// 	.logo{
// 		position: absolute;
// 		left: 1rem;
// 		top: 1rem;
// 		width: 4rem;
// 		height: 4rem;
// 	}
// 	.logo img{
// 		width: 100%;
// 		height: 100%;
// 	}
	h1{
		position: absolute;
		z-index: 100;
		font-size: 3rem;
		left: 2rem;
		top: 6rem;
		color: white;
		font-family: 宋体;
	}
  .home{
  	 
  	 .newList h3{
  		color:pink;
  		font-size:1.4rem;
  	}
  }
</style>