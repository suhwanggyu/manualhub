<template>
	<div id="SearchList">
		<el-table :data="listDatas" height="100%" style="width: 100%" @row-click="clickList">
			<el-table-column :span="18" prop="text" label="title" min-width="260">
			</el-table-column>
			<el-table-column :span="6" prop="name" label="Name" min-width="100">
			</el-table-column>
		</el-table>
		<plus-button></plus-button>
	</div>
</template>
<script>
import PlusButton from "./PlusButton.vue"
import {CLICK_LIST} from './store.js'
	
export default{
	name:"SearchList",
	components:{
		"plus-button":PlusButton,
	},
	computed:{
		listDatas(){
			
			return this.$store.state.listDatas.filter(dat=>{
				return dat.text.toLowerCase().includes(this.$store.state.search.toLowerCase())
			})
		},
		
	},
	data:function(){
		return {
		}
	},
	methods:{
	clickList(receiver_id){
			
			let selectedNum = receiver_id.index;
			this.$store.commit(CLICK_LIST, selectedNum)
		
		}
	}
	
	
	
	
}	
</script>
<style>
	.PlusButton{
		float:right;
		width:40px;
		height:40px;
		border-radius:50%;
		box-sizing: border-box;
		text-align:center;
		z-index:1;
		margin:0;
		padding:0px;
		line-height:50%;
	}
	li{
	list-style:none;
	line-height:200%;
	background-color:#f5f5f5;
	border:2px solid #000;
	}

	#SearchList {
		height : 100%;
	}
	
	
</style>