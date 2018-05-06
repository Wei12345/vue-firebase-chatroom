<template>
	<div class="modal">
		<section class="modal-dialog">
			<header class="modal-dialog-header">
				<h4 class="modal-dialog-header-title">請輸入暱稱</h4>
				<p class="modal-dialog-header-description">請輸入你的暱稱</p>
			</header>
			<input type="text" class="modal-dialog-username" v-model="username" @keypress.enter="usernameConfirm">
			<button type="button" class="modal-dialog-confirm" @click="usernameConfirm">確認</button>
		</section>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';

	export default{
		computed: {
			username:{
				get(){
					return this.$store.getters.username;
				},
				set(username){
					this.$store.commit('setUsername', username);
				}
			},
			...mapGetters(['userId'])
		},
		methods: {
			usernameConfirm(){
				this.setUsernameModalShow(false);
				localStorage.setItem('user', JSON.stringify({
					userId: this.userId,
					username: this.username
				}));
			},
			...mapMutations(['setUsernameModalShow'])
		}	
	}
</script>

<style lang="scss">
	.modal{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100vw;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, .5);
		z-index: 999;
		&-dialog{
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 60%;
			padding-bottom: 10px;
			border-radius: 6px;
			border-bottom: 10px solid #444956;
			box-shadow: 0px 5px 15px rgba(0, 0, 0, .5);
			background-color: #ffffff;
			overflow: hidden;
			@media screen and (max-width: 767px){
				width: 90%;
			}
			&-header{
				padding: 25px 0px;
				width: 100%;
				background-color: #444956;
				&-title{
					margin-top: 10px;
					font-size: 2rem;
					text-align: center;
					color: #ffffff;
				}
				&-description{
					margin-top: 5px;
					font-size: 1.2rem;
					text-align: center;
					color: #aaaaaa;
				}
			}
			&-username{
				margin-top: 45px;
				padding: 10px 20px;
				width: 60%;
				font-size: 3rem;
				border: 1px solid #e6e8ea;
			}
			&-confirm{
				cursor: pointer;
				margin-top: 45px;
				padding: 20px 0px;
				width: 30%;
				font-size: 1.4rem;
				color: #ffffff;
				border-radius: 6px;
				border: none;
				background-color: #444956;
			}
		}
	}
</style>