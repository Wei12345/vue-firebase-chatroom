const state = {
	messages: []
}

const getters = {
	messages: messages => state.messages
}

const actions = {
}

const mutations = {
	setMessages(state, messages){
		state.messages = messages;
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}