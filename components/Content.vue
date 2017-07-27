<template>
	<div class='content'>
		<div class='item' v-for='item in items'>
			{{item.content}}
		</div>
	</div>
</template>

<script>
export default{
	vuex:{
		getters:{
			items:function(state){
				return state.items;
			}
		}
	}
}
</script>

