<template>
	<el-container id="app" class="is-vertical">
		<top-header v-if="isLoginOk"></top-header>
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
import { LODE_FILE } from './components/store.js';

var router = new VueRouter({
	mode : 'history',
	routes:[{
		path: '/news',
		name : 'News',
		component : NewsContent,
		meta: {authRequired: true}
	},{
		path: '/',
		name : 'Login',
		component : LoginContent,
		meta: {authRequired: false}
	},{
		path: '/read',
		name : 'Main',
		component : MainContent,
		meta: {authRequired: true}
	}]

});

router.beforeEach(function (to, from, next) {
	// to: 이동할 url에 해당하는 라우팅 객체
	console.log(store.state.loginstate);
	if (to.matched.some(function(routeInfo)  {
		return routeInfo.meta.authRequired;
	})  && !store.state.loginstate){
		alert('Login Please!');
		next('/')
		
	}
	else {
		console.log("routing success : '" + to.path + "'");
		//console.log(store.state.loginstate);
		next(); // 페이지 전환
	}
});

export default {
	store,
	name: 'app',
	router : router,
	components: {
		TopHeader,
		MainFooter,
	},
	computed :{
		isLoginOk : function(){
			console.log(this.$store.state.loginstate);
			return this.$store.state.loginstate;
		}
	},
	created : function(){
		this.$store.commit(LODE_FILE);
		console.log(this.$store.state.listHistorys);
	}

}
</script>

<style>
	html{
		min-width: 1300px;
	}
	html,body{
		margin : 0;
		padding : 0;
		height:100%;
	}
	
	.el-container{
		height: 100%;
	}
	
	
	
	
</style>
