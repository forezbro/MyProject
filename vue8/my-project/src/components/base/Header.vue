<template>
   <div class="header">
   	 <slot></slot>
   	 <i class="fa fa-angle-left" v-show="show" @click="goBack"></i>
   </div>
</template>

<script>
  export default {
     props:{
     	show:{
     		type:Boolean,
     		default:false
     	}
     },
     methods: {
      goBack() {
        this.$router.go(-1);
      }
     }
  }
</script>


<style scoped lang="less">
 .header{
 	position: fixed;
 	top:0;
 	left: 0;
 	width:100%;
 	height:3rem;
 	background:skyblue;
 	text-align:center;
 	line-height: 3rem;
 	font-weight: bold;
 	i{
 		position: absolute;
 		left:1rem;
 		
 		font-size: 3rem;
 		
 	}
 }

</style>