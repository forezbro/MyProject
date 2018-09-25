<template>
   <div class="footer">
   	  <router-link to="/home"> 
   	   <i class="fa  fa-home"></i>
			 <span>首页</span>
	   	  </router-link>
	      <router-link to="/concent">
	      <i class="fa  fa-list"></i>
				<span>发现</span>
	      </router-link>
	      <router-link to="/list"> 
	       <i class="fa  fa-book"></i>
				 <span>分析</span>
	      </router-link>
	      <router-link to="/weare">
	      <i class="fa  fa-user-o"></i>
				<span>我的</span>
	      </router-link>
   </div>
</template>
<script>
  export default {
			
  }
</script>


<style scoped lang="less">
   .footer{
		 z-index: 10;
   	 position: fixed;
   	 left: 0;
   	 bottom: 0;
   	 width: 100%;
   	 height: 4rem;
   	 display: flex;
   	 background: rgba(0,0,0,.5);
     a{
     	display: flex;
     	flex-direction:column;
     	flex:1;
     	align-items:center;
     	justify-content:center;
     	
     }
    
		 
		 .router-link-active>.fa {
			 font-size:2.4rem;
		 }
		 
     .fa{
     	color:white;
     	font-size:2.0rem;
     }
		 span{
		 color:white;
		 font-size:1rem;
		 }
   }
</style>