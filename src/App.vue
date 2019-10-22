<template>
  <div id="app">
		<top-header></top-header>
		<main-content></main-content>
		<main-footer></main-footer>
  </div>
</template>

<script>
import TopHeader from './components/TopHeader.vue'
	
import MainContent from './components/MainContent.vue'

import MainFooter from './components/MainFooter.vue'
export default {
  name: 'app',
  components: {
    'top-header' : TopHeader,
	'main-content':MainContent,
	'main-footer':MainFooter,
  }
}
</script>

<style>
	div .TopHeader{
		margin:0px;
		background-color:#888;
		
	}
	
	
	
	
	
</style>
