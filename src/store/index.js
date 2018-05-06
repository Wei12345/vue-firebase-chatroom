import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';
Vue.use(Vuex);

const state = {
	usernameModalShow: true,
	userId: '',
	username: ''
}

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	strict: process.env.NODE_ENV !== 'production'
});

export default store;