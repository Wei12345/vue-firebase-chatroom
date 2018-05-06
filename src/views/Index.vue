<template>
	<div class="chatroom">
		<header class="chatroom-header">
			<h4 class="chatroom-id">{{ userId }}</h4>
			<h4 class="chatroom-username">{{ username }}<button type="button" class="chatroom-change" @click="usernameChange">變更名稱</button></h4>
		</header>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';

	export default{
		methods: {
			usernameChange(){
				this.setUsernameModalShow(true);
			},
			...mapMutations(['setUsernameModalShow'])
		},
		computed: {
			...mapGetters(['userId', 'username'])
		}
	}
</script>

<style lang="scss" scoped>
	.chatroom{
		&-header{
			padding: 30px;
			background-color: #444956;
		}
		&-id{
			font-size: 1.4rem;
			color: #cccccc;
		}
		&-username{
			font-size: 2.4rem;
			color: #ffffff;
		}
		&-change{
			cursor: pointer;
			font-size: 1.2rem;
			color: #aaaaaa;
			border: none;
			background: none;
		}
	}
</style>