<template> 
  <div class="swipe2">
     <swipe class="my-swipe">
          <swipe-item class="slide1">
            <img src="../../assets/imgas/me1.jpg"/>
          </swipe-item>
          <swipe-item class="slide2">
             <img src="../../assets/imgas/me2.jpg"/>
          </swipe-item>
          <swipe-item class="slide3">
             <img src="../../assets/imgas/me3.jpg"/>
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
	 width: 100%;
	 height: 100%;
	 border-radius: 50%;
 	/* height: 40vw; */
 	width: 100%;
 	img {
 	  width:100%;
	  height:100%;
	  border-radius: 50%;
	  display: inline-block;
 	}
 	
}
</style>
