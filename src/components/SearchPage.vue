<template>
	<div class="SearchPage">
		<search-tab/>
		<search-list/>
	</div>
</template>
<script>
	import SearchList from "./SearchList.vue"
	import SearchTab from "./SearchTab.vue"
	
export default{
	name:"SearchPage",
	components:{
		'search-list':SearchList,
		'search-tab':SearchTab,
		
		
	}
	
	
	
}	
</script>
<style>
	div .SearchTab{
		border:2px solid #000;
		
		
	}
	

	
	
</style>