<template>
	<div id="EditMode">
		<span>글 제목 : </span>
		<el-input id="titleInput" v-model="titleIn"></el-input>
		<el-button id="submitButton" type="primary" @click="onClickModify">수정하기</el-button>
		
	</div>
</template>
<script>
	import {CLICK_MODE} from './store.js'
	import {CLICK_MODIFY} from './store.js'
export default{
	name:"EditMode",
	data:function(){
		return {
			titleIn:""
		}
	},
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

			//comment 저장하기
			this.$prompt('Please input your comment', 'Tip', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
			}).then(({ value }) => {
				this.$store.state.textLog.push({
					date: new Date().toLocaleDateString(),
					author: this.$store.state.users[this.$store.state.loginIndex].name,
					index: this.$store.state.selectedDocument,
					comment: value,
					history_index : this.$store.state.historyIndex + 1
				});
				this.$message({
				type: 'success',
				message: 'Your comment is:' + value
			});
			}).catch(() => {
				this.$message({
				type: 'info',
				message: 'Input canceled'
			});       
			});


			//comment 불러오기
			this.$store.commit(CLICK_MODE,false)
			this.$store.commit(CLICK_MODIFY,this.titleIn);


		},
	},
	created:function(){
		this.titleIn = this.documentTitle;
	}
	
}	
</script>
<style>
	#submitButton{
		display: inline;
		width:100px;
		padding:5px;
		height:30px;
		margin:0 0 5px 0;
	}

	#titleInput{
		display: inline;
	}
	#EditMode .el-input{
		width : 70%;
		margin : 2px 20px 2px 10px;
	}
	#EditMode span{
		width : 5%;
		font-size: 15px;
		font-family: "Arial";
		font-weight: bold;
	}
	#titleInput:focus{
		border-color:dodgerBlue;
		box-shadow:0 0 8px 0 dodgerBlue;
	}
	
	
	
</style>