<template>
	<div class="SearchTab">
		<el-input class="searchinput" placeholder="Please input" v-model="searchContent" @keyup.enter.native="clickSearchBtn"></el-input>
		<el-button class="searchBtn" type="submit" @click="clickSearchBtn" >검색하기</el-button>
	</div>
</template>
<script>
	
	
	
	import {CLICK_SEARCH} from './store.js';
	
export default{
	name:"SearchTab",
	data(){
		return{
			searchContent:'',
		}
	},
	computed:{
		
	},
	methods:{
		clickSearchBtn(){
			
			//console.log('클릭 서치1')
			this.$store.commit(CLICK_SEARCH,this.searchContent)
		},
		
		
		
	}
	
	
	
}	
</script>
<style>
	.searchBtn{
		float : right;
		width : 30%;
		padding : 10px 10px;
		height : 40px;
	}
	
	.searchinput{
		width : 70%;
	}
	
	
	
</style>