<template>
	<div class="chatroom">
		<header class="chatroom-header">
			<h4 class="chatroom-header-id">{{ userId }}</h4>
			<h4 class="chatroom-header-username">{{ username }}<button type="button" class="chatroom-header-change" @click="usernameChange">變更名稱</button></h4>
		</header>
		<section class="chatroom-body">
			<div class="chatroom-body-item" :class="{'me': message.userId === userId}" v-for="message in messages">
				<span class="chatroom-body-item-user-id">{{ message.userId }}</span>
				<div class="chatroom-body-item-message">
					<span class="chatroom-body-item-message-username">{{ message.username }}</span>
					<p class="chatroom-body-item-message-content">{{ message.userMessage }}</p>
					<span class="chatroom-body-item-message-datetime">{{ message.datetime }}</span>
				</div>
			</div>
		</section>
		<footer class="chatroom-footer">
			<textarea class="chatroom-footer-input" placeholder="請輸入訊息" v-model="userMessage" @keypress.enter.prevent="sendMessage"></textarea>
		</footer>
	</div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';

	export default{
		data(){
			return {
				firestore: this.$_firebase.firestore(),
				collectionName: 'messages',
				userMessage: '',
				messages: []
			}
		},
		async created(){
			this.firestore.settings({
				timestampsInSnapshots: true
			});

			this.firestore.collection(this.collectionName).orderBy('timestamp').onSnapshot(querySnapshot => {
				if(!querySnapshot.hasPendingWrites){
					this.messages = querySnapshot.docs.map(doc => {
						const data = doc.data();
						const datetime = data.timestamp
							? this.$_moment(data.timestamp.toDate()).format('MM-DD a hh:mm')
							: ''

						return {
							id: doc.id,
							...data,
							datetime: datetime
						}
					});

					this.$nextTick(() => {
						document.querySelector('.chatroom-body').scrollTop = 99999;
					});
				}
			});

		},
		methods: {
			usernameChange(){
				this.setUsernameModalShow(true);
			},
			sendMessage(event){
				if(this.userMessage){
					this.firestore.collection(this.collectionName).add({
						userId: this.userId,
						username: this.username,
						userMessage: this.userMessage,
						timestamp: this.$_firebase.firestore.FieldValue.serverTimestamp()
					});

					this.userMessage = '';
				}
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
			display: flex;
			flex-direction: column;
			justify-content: center;
			height: 100px;
			padding: 0px 30px;
			box-sizing: border-box;
			background-color: #444956;
			@media screen and (max-width: 767px){
				padding: 0px 15px;
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
		&-body{
			box-sizing: border-box;
			height: calc(100vh - 200px);
			padding: 5px;
			overflow-y: scroll;
			&-item{
				margin: 10px 0px;
				display: flex;
				flex-direction: column;
				&-user-id{
					font-size: 1.2rem;
					color: #cccccc;
				}
				&-message{
					margin-top: 5px;
					display: flex;
					align-items: center;
					&-username{
						font-size: 1.8rem;
					}
					&-content{
						position: relative;
						margin: 0px 5px 0px 20px;
						padding: 10px;
						max-width: 40%;
						font-size: 2.4rem;
						font-weight: 400;
						border-radius: 6px;
						background-color: #eeeeee;
						&:after{
							display: block;
							content: '';
							position: absolute;
							margin: auto;
							top: 0px;
							bottom: 0px;
							right: 100%;
							width: 0px;
							height: 0px;
							border-top: 10px solid transparent;
							border-bottom: 10px solid transparent;
							border-right: 20px solid #eeeeee;
						}
					}
					&-datetime{
						color: #999999;
						font-size: 1.4rem;
					}
				}
				&.me{
					align-items: flex-end;
					.chatroom-body-item-message{
						flex-direction: row-reverse;
						&-content{
							margin: 0px 20px 0px 5px;
							background-color: #bef18c;
							&:after{
								right: auto;
								left: 100%;
								border-right: none;
								border-left: 20px solid #bef18c;
							}
						}
						
					}
				}
			}
		}
		&-footer{
			box-sizing: border-box;
			height: 100px;
			border-top: 2px solid #cccccc;
			&-input{
				box-sizing: border-box;
				padding: 10px;
				font-size: 1.4rem;
				border: 0px;
				width: 100%;
			}
		}
	}
</style>