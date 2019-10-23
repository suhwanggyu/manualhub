<template>
	<div>
		<el-button id="submitButton" type="primary" @click="onClickModify">수정하기</el-button>
		<input id="titleInput" :value="documentTitle" ref="titleInput"/>
	</div>
</template>
<script>
	import {CLICK_MODE} from './store.js'
	import {CLICK_MODIFY} from './store.js'
export default{
	name:"EditMode",
	computed:{
		documentTitle(){
			let stat =this.$store.state
			if(stat.selected===null){
				return ' '
			}
			let index=stat.listHistorys.findIndex(x=> x.index===stat.selected)
			return stat.listHistorys[index].title
		},

	},
	methods:{
		onClickModify(){
			
			if(this.$store.state.selected !=0 && !this.$store.state.selected){
				//리스트가 클릭이 안됬는데 수정하려하면 끝내줌
				alert('리스트를 먼저 선택해주세요.')
				return
			}


			let modifiedTitle=this.$refs.titleInput.value
			this.$store.commit(CLICK_MODE,false)
			this.$store.commit(CLICK_MODIFY,modifiedTitle)


		},
	},
	
	
}	
</script>
<style>
	#submitButton{
		display: inline-block;
		width:20%;
		padding:5px;
		height:30px;
		margin:0 0 5px 0;
	}
	#titleInput{
		display: inline-block;
		width:80%;
		height:30px;
		border:2px solid #aaa;
		border-radius:4px;
		margin:0 0 1px 0;
		outline:none;
		padding:8px;
		box-sizing:border-box;
		transition:0.3s
	}
	#titleInput:focus{
		border-color:dodgerBlue;
		box-shadow:0 0 8px 0 dodgerBlue;
	}
	
	
	
</style>