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
	body{
		margin : 0;
		padding : 0;
	}
	
	
	
	
	
</style>
