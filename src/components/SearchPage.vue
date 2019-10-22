<template>
	<el-main id="SearchPage">
		<search-tab/>
		<search-list/>
	</el-main>
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
	#SearchPage{
		box-sizing: border-box;
		padding:0;
	}
	
	
</style>