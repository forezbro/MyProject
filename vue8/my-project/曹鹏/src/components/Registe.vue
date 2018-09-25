<template>
	<div class="Registe">
		<div class="camera " ><i class="fa fa-chevron-left" @click="goBack"></i></div>
		<div class="both"></div>
		<div class="logo"><img src="../../static/imgas/logo.png"></div>
		<div class="section">
			<div class="go"><span>+86</span><input v-model="username" type="tel" name="phone" placeholder="输入手机号"></div>
			<div class="go"><span>密码</span><input v-model="password" type="password" name="pass" placeholder="输入密码"></div>
		</div>
		<div class="aside">
			<button @click="login">登录</button>
			<p><span>短信验证码登陆</span><a>忘记密码？</a></p>
		</div>
		<div class="last">
			更多
		</div>
	</div>
</template>
<style lang="less" scoped="scoped">
	.camera{
		float: left;
		margin-top: 0.4rem;
		padding-left: 1rem;
		font-size: 1.8rem;
		line-height: 2rem;
		color: #444;
	}
	.both{
		clear: both;
	}
	.logo{
		margin: 3rem auto;
		width: 5rem;
		height: 5rem;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.section{
		width: 86%;
		margin: 0 auto;
	}
	.go{
		border-bottom: 1px solid #ccc;
		padding: 1rem 0;
		width: 100%;
		input{
			font-size: 1.3rem;
			padding-left: 2rem;
			outline: none;
			border: none;
		}
		span{
			font-size: 1.3rem;
		}
	}
	.aside{
		width: 86%;
		margin: 0 auto;
		margin-top: 3rem;
		button{
			width: 100%;
			height: 40px;
			background: #42B983;
			border: none;
			border-radius: 4px;
			line-height: 40px;
			color:white;
			font-size: 1.6rem;
			outline: none;
		}
		p{
			margin-top: 3rem;
			span{
				display: inline-block;
				float: left;
				font-size: 1.3rem;
				color: #42B983;
			}
			a{
				display: inline-block;
				float: right;
				font-size: 1.3rem;
				color: #42B983;
			}
		}
	}
	.last{
		text-align: center;
		margin-top: 16rem;
		color: #42B983;
		font-size: 1.3rem;
	}
</style>
<script>
	export default{
		name:'Registe',
		data() {
			return {
				username:'',
				password:''
			}
		},
		computed:{
			users(){
					return this.$store.state.users
			}
		},
		mounted () {
		},
		methods:{
			goBack() {
			this.$router.go(-1)
			},
			login(){
				var that = this ;
				var flag = false;
					this.users.forEach(function(user){
							if(user.username == that.username && user.password == that.password){
										that.$store.commit('setName',that.username);
										window.location.href='/#/home';
										flag=true
										return
							}
					});
					if(!flag){
							alert('用户名或密码')
					}
			}  
		}
	}
</script>