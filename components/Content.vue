<template>
	<div class='content'>
		<div class='item' v-for='item in items'>
			<input type='text' :value='item.content' @change='updateContent($event, $index)' />
		</div>
	</div>
</template>

<script>

import {updateContent} from '../vuex/actions';
export default{
	vuex:{
		getters:{
			items:function(state){
				return state.items;
			}
		},
		actions:{
			updateContent
		}
	}
}
</script>

