import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';
import messages from './modules/messages.js';
Vue.use(Vuex);

const state = {
	usernameModalShow: true,
	userId: '',
	username: '',
	userMessage: ''
}

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		messages
	},
	strict: process.env.NODE_ENV !== 'production'
});

export default store;