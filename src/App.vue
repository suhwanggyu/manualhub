<template>
	

	<el-container id="app" class="is-vertical">
		<top-header></top-header>
		<main-content></main-content>
		<main-footer></main-footer>
	</el-container>
  
</template>

<script>
	
	
import store from './components/store.js'

import TopHeader from './components/TopHeader.vue';
	
import MainContent from './components/MainContent.vue';

import MainFooter from './components/MainFooter.vue';



export default {
store,
  name: 'app',
  components: {
	'top-header' : TopHeader,
	'main-content':MainContent,
	'main-footer':MainFooter,
  }
}
</script>

<style>
<<<<<<< HEAD
=======
	@import "https://use.fontawesome.com/releases/v5.6.3/css/all.css";
	div .TopHeader{
		margin:0px;
		background-color:#888;
	}
>>>>>>> d5c83a8e5fcb8f11d60d6eb8b295475ecee02398
	body{
		margin : 0;
		padding : 0;
	}
	
	
	
	
	
</style>
