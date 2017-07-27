export var addItem = function(store, item){
	var dispatch = store.dispatch;
	dispatch('ADD_ITEM', item);
};

export var deleteItem = function(store){
	var dispatch = store.dispatch;
	dispatch('DELETE_ITEM');
};

export var updateContent = function(store, event, index){

	var dispatch = store.dispatch;
	var content = event.target.value;
	dispatch('UPDATE_CONTENT', content, index);
};