<template>
	<div id="ReadHeader">
		<div class="line">
			<span>글제목</span>
			<el-divider direction="vertical"/> 
			<span id="textTitle">{{title.text}}</span>
			<el-select value="1"></el-select>
		</div>
		<div class="line">
			작성자명 
			<el-divider direction="vertical"/>
			<span id="textAuthor">{{title.name}}</span>
			<el-divider direction="vertical"/>
			날짜
			<el-divider direction="vertical"/>
			<span id="textDate">{{title.date}}</span>
			<el-button id="modifyBtn" type="primary" icon="el-icon-edit" @click="onClickModify">수정</el-button>
			<el-checkbox label="히스토리" border></el-checkbox>
		</div>
	</div>
</template>
<script>
	import {CLICK_MODE} from './store.js'
	
	
export default{
	name:"ReadHeader",
	computed:{
		title(){
			let stat =this.$store.state
			if(stat.selected===null){
				return ' '
			}
			let index=stat.listDocuments.findIndex(x=> x.index===stat.selected)
			return stat.listDatas[index]
		},
		
	},
	methods:{
		onClickModify(){
			
			this.$store.commit(CLICK_MODE,true)
			
		},
	}
	
	
	
	
}	
</script>
<style>
	#ReadHeader{
		/* 배경색깔은 컴포넌트 구별을 위해 넣었습니다. 제거해도 됩니다.  */
		background:#fff;
		font-size: 15px;
		background-color: #fff;
		color: #333;
		line-height: 60px;
		font-family : "Arial";
		font-weight : bold;
		padding: 0 20px;
		flex-shrink: 0;
	}
	.el-checkbox, #modifyBtn, .el-select{
		float:right;
		margin : 0 20px;
		position: relative;
	}

	.el-checkbox, #modifyBtn{
		top:10px;
	}
	.el-divider{
		margin-left:10px;
		margin-right:10px;
	}

	.el-select{
		width : 400px;
	}

	#textTitle{
		display : inline-block;
		width : 300px;
	}

	#textAuthor, #textDate{
		display: inline-block;
		width : 150px;
	}
	
	.line{
		border-bottom: 1px solid #ccc;
	}
</style>