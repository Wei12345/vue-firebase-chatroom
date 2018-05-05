import Vue from 'vue';
import router from './routes/index.js';
import App from './App.vue';

new Vue({
	el: '#app',
	router,
	components: { 
		App: App,
	}
});