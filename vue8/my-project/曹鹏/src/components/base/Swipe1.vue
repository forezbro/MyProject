<template> 
  <div class="swipe1">
     <swipe class="my-swipe">
          <swipe-item class="slide1">
            <img src="../../assets/imgas/fy1.jpg"/>
          </swipe-item>
          <swipe-item class="slide2">
             <img src="../../assets/imgas/fy2.jpg"/>
          </swipe-item>
          <swipe-item class="slide3">
             <img src="../../assets/imgas/fy3.jpg"/>
          </swipe-item>
			<swipe-item class="slide4">
				<img src="../../assets/imgas/fy4.jpg"/>
			</swipe-item>
			<swipe-item class="slide5">
				<img src="../../assets/imgas/fy5.jpg"/>
			</swipe-item>
     </swipe>
  </div>
</template>
<script>
	
</script>
<style lang="less" scoped>
/* 引入内部样式*/
@import 'vue-swipe/dist/vue-swipe.css'; 
 .my-swipe{
	 
	
	 
 	 height:9rem;
	 margin-top: 6px;
 	/* height: 40vw; */
 	width: 100%;
 	img {
 	  width:100%;
	  height:100%;
 	}
 	
}
</style>
