<template>
	<div id="WriteMode">
		<span>글 제목 : </span>
		<el-input id="titleInput" v-model="titleIn"></el-input>
		<el-button id="submitButton" type="primary" @click="makeList">글쓰기</el-button>
		
	</div>
</template>
<script>
	import {CLICK_MODE, WRITE_FILE} from './store.js'
export default{
	name:"WriteMode",
	data:function(){
		return {
			titleIn:""
		}
	},
	methods:{
		makeList(){

			


			//comment 불러오기
            this.$store.commit(CLICK_MODE,false)
            this.$store.state.editMode = false;
            this.$store.commit(WRITE_FILE,this.titleIn)
            

            //comment 저장하기
			this.$prompt('Please input your comment', 'Tip', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
			}).then(({ value }) => {
                
				this.$store.state.textLog.push({
					date: new Date().toLocaleDateString(),
                    author: this.$store.state.users[this.$store.state.loginIndex].name,
					index: this.$store.state.listHistorys.length-1,
					comment: value,
					history_index : 0
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
		},
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
	#WriteMode .el-input{
		width : 70%;
		margin : 2px 20px 2px 10px;
	}
	#WriteMode span{
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