export var addItem = function(store, item){
	var dispatch = store.dispatch;
	dispatch('ADD_ITEM', item);
};

export var deleteItem = function(store){
	var dispatch = store.dispatch;
	dispatch('DELETE_ITEM');
};