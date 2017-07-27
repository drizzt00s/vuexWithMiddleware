import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';

Vue.use(Vuex);

var state = {
	items:[],
	name:''
};

var mutations = {
	'ADD_ITEM':function(state, item){
		state.items.push(item);
	},
	'DELETE_ITEM':function(state){
		state.items.pop();
	},
	'UPDATE_CONTENT':function(state, content, index){
		state.items[index].content = content;
	}
};

var myMiddleware = {
	snapshot:true,
	onInit:function(state){
		console.log('init');
	},
	onMutation:function(mutation, nextState, prevState){
		//console.log(nextState);
		//console.log(prevState);
	}
};

export default new Vuex.Store({
	state,
	mutations,
	middlewares:[createLogger()],
	strict:true
});