<template>
	<div class="SearchTab">
		<input placeholder="search" v-model="searchContent">
		<button class="searchBtn" type="submit" @click="clickSearchBtn">검색하기</button>
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
		float:right;
	}
	
	
	
	
</style>