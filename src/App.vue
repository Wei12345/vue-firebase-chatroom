<template>
	<div>
		<router-view></router-view>
		<username-modal v-show="usernameModalShow"></username-modal>
	</div>
</template>
	
<script>
	import UsernameModal from './components/UsernameModal.vue';

	export default{
		beforeCreate(){
			const user = JSON.parse(localStorage.getItem('user'));
			if(user){
				this.userId = user.userId;
				this.username = user.username;
				this.usernameModalShow = false;
			} else{
				this.userId = this.$_uuid.v4();
			}
		},
		computed: {
			userId: {
				get(){
					return this.$store.getters.userId;
				},
				set(userId){
					this.$store.commit('setUserId', userId);
				}
			},
			username: {
				get(){
					return this.$store.getters.username;
				},
				set(username){
					this.$store.commit('setUsername', username);
				}
			},
			usernameModalShow: {
				get(){
					return this.$store.getters.usernameModalShow;
				},
				set(usernameModalShow){
					this.$store.commit('setUsernameModalShow', usernameModalShow);
				}
			}
		},
		components: {
			UsernameModal
		}
	}
</script>

<!-- 全域style -->
<style lang="scss">
	html{
		font-size: 10px;
	}
	body{
		font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
	}
	textarea, input, button{
		&:focus{
			outline: none;
		}
	}
	textarea{
		resize: none;
	}
	h1, h2, h3, h4, p{
		margin: 0px;
	}
</style>