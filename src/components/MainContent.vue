<template>
	<div class="MainContent">
		<search-page></search-page>
		<document-page></document-page>
	</div>


</template>

<script>
import SearchPage from './SearchPage.vue'
import DocumentPage from './DocumentPage.vue'
	
	

export default {
	

  name: 'MainContent',
  components: {
		'search-page':SearchPage,
		'document-page':DocumentPage,
  }
}
</script>

<style>
	div .MainContent{
		width:100%;
		height: 600px;
		border: 1px solid #000;
		margin:0px;
	}
	
	
	div .SearchPage{
		float:left;
		width:30%;
		box-sizing: border-box;
		border: 1px solid #000;
	}
	div .DocumentPage{
		float:right;
		width:70%;
		box-sizing: border-box;
		border: 1px solid #000;
		
		
	}	
	
	
	
	
</style>
