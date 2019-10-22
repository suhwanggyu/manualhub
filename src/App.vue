<template>
  <div id="app">
		<top-header></top-header>
		<main-content></main-content>
		<main-footer></main-footer>
  </div>
</template>

<script>
	
	
import store from './components/store.js'
import TopHeader from './components/TopHeader.vue'
	
import MainContent from './components/MainContent.vue'

import MainFooter from './components/MainFooter.vue'
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
	@import "https://use.fontawesome.com/releases/v5.6.3/css/all.css";
	div .TopHeader{
		margin:0px;
		background-color:#888;
		
	}
	
	
	
	
	
</style>
