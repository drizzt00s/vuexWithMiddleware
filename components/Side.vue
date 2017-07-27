<template>
	<ul class='side list-unstyled'>
		<li @click='addItem({content:Math.random()})' style='cursor:pointer;'>增加</li>
		<li @click='deleteItem'>删除</li>
	</ul>
</template>
<script>
import {addItem, deleteItem} from '../vuex/actions';
export default{
	vuex:{
		actions:{
			addItem,
			deleteItem
		}
	}
}
</script>