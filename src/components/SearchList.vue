<template>
	<el-main id="SearchList">
			<ul>
				<li v-for="listData in listDatas" :key="listData.index">{{listData.text}}</li>
			</ul>
			<plus-button></plus-button>
	</el-main>
</template>
<script>
import PlusButton from "./PlusButton.vue"
	
	
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
		}
		
	}
	
	
	
	
}	
</script>
<style>
<<<<<<< HEAD
=======
	.PlusButton{
		float:right;
		width:40px;
		height:40px;
		border-radius:50%;
		box-sizing: border-box;
		border: 2px solid #000;
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

>>>>>>> d5c83a8e5fcb8f11d60d6eb8b295475ecee02398
	#SearchList {
		background-color: #E9EEF3;
		color: #333;
		text-align: center;
		line-height: 160px;
<<<<<<< HEAD
 	 }
=======
				}
>>>>>>> d5c83a8e5fcb8f11d60d6eb8b295475ecee02398
	
	
</style>