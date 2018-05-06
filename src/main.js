import Vue from 'vue';
import store from './store/index.js';
import router from './routes/index.js';
import uuid from './plugin/uuid.js';
import App from './App.vue';

Vue.use(uuid);

new Vue({
	store,
	router,
	components: { 
		App: App,
	}
}).$mount('#app');