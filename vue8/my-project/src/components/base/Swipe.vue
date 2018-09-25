<template> 
  <div class="swipe">
     <swipe class="my-swipe">
          <swipe-item class="slide1">
            <img src="../../assets/imgas/sy5.jpg"/>
          </swipe-item>
          <swipe-item class="slide2">
             <img src="../../assets/imgas/sy2.jpg"/>
          </swipe-item>
          <swipe-item class="slide3">
             <img src="../../assets/imgas/sy1.jpg"/>
          </swipe-item>
					<swipe-item class="slide4">
						<img src="../../assets/imgas/sy3.jpg"/>
					</swipe-item>
					<swipe-item class="slide5">
						<img src="../../assets/imgas/sy4.jpg"/>
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
	 position: absolute;
	 top: 0;
	 left: 0;
 	 height:100%;
 	/* height: 40vw; */
 	width: 100%;
 	img {
 	  width:100%;
	  height:100%;
 	}
 	
}
</style>
