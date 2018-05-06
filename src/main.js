import 'normalize.css';

import Vue from 'vue';
import store from './store/index.js';
import router from './routes/index.js';
import firebase from 'firebase/app';
import 'firebase/firestore';
import uuid from 'uuid';
import moment from 'moment';
import App from './App.vue';

moment.locale('zh-tw');

Vue.prototype.$_firebase = firebase;
Vue.prototype.$_moment = moment;
Vue.prototype.$_uuid = uuid;

new Vue({
	store,
	router,
	components: { 
		App: App,
	}
}).$mount('#app');