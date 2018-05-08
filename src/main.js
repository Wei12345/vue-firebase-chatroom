import 'normalize.css';

import Vue from 'vue';
import store from './store/index.js';
import router from './routes/index.js';
import firebase from './plugins/firebase.js';
import moment from './plugins/moment';
import uuid from './plugins/uuid';
import App from './App.vue';

Vue.use(firebase);
Vue.use(moment);
Vue.use(uuid);

new Vue({
	store,
	router,
	components: { 
		App: App,
	}
}).$mount('#app');