<template>
	<side></side>
	<content></content>
</template>

<script>
	import side from './Side.vue';
	import content from './Content.vue';
	export default{
		components:{
			side,
			content
		}

	}
</script>