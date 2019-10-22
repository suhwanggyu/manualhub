<template>
	

	<el-container id="app" class="is-vertical">
		<top-header></top-header>
		<router-view></router-view>
		<main-footer></main-footer>
	</el-container>
  
</template>

<script>
	
	
import store from './components/store.js'
import TopHeader from './components/TopHeader.vue';
import MainContent from './components/MainContent.vue';
import LoginContent from './components/LoginContent.vue';
import NewsContent from './components/NewsContent.vue';
import MainFooter from './components/MainFooter.vue';
import VueRouter from 'vue-router';

var router = new VueRouter({
	routes:[{
		path: '/news',
		component : NewsContent
	},{
		path: '/login',
		component : LoginContent
	},{
		path: '/read',
		component : MainContent
	}]

});

export default {
	store,
	name: 'app',
	router : router,
	components: {
		TopHeader,
		MainFooter,
	}
}
</script>

<style>

	html,body{
		margin : 0;
		padding : 0;
		height:100%;
	}
	
	.el-container{
		height: 100%;
	}
	
	
	
</style>
