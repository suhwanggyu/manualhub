<template>
	<div id="ReadHeader">
		<div class="line">
			<span>글제목</span>
			<el-divider direction="vertical"/> 
			<span id="textTitle">{{title.title}}</span>
			<el-select :value="elSelected" placeholder="히스토리" @input="dispatch" ref="elSelect">
				<el-option
						v-for="item in documentData.history"
						:key="item.index"
						:value="item.index">{{item.date}}</el-option>
			</el-select>
		</div>
		<div class="line">
			작성자명 
			<el-divider direction="vertical"/>
			<span id="textAuthor">{{title.historys[0].author}}</span>
			<el-divider direction="vertical"/>
			날짜
			<el-divider direction="vertical"/>
			<span id="textDate">{{historyDate}}</span>
			<el-button id="modifyBtn" type="primary" icon="el-icon-edit" @click="onClickModify">수정</el-button>
			<el-checkbox label="히스토리" border></el-checkbox>
		</div>
	</div>
</template>
<script>
	import {CLICK_MODE,SET_HISTORY,CHANGE_CARAOUSEL} from './store.js'
	
	
export default{
	name:"ReadHeader",
	computed:{
		title(){
			let stat =this.$store.state
			if(stat.selected===null){
				return ' '
			}
			let index=stat.listHistorys.findIndex(x=> x.index===stat.selected)
			return stat.listHistorys[index]
		},
		documentData(){
			let stat =this.$store.state
			if(stat.selected===null){
				return ' '
			}
			let index=stat.listHistorys.findIndex(x=> x.index===stat.selected)

			return stat.listHistorys[index]
		},
		historyDate(){
			let stat =this.$store.state
			if(stat.selected===null){
				return ' '
			}
			let index=stat.listHistorys.findIndex(x=> x.index===stat.selected)


			return stat.listHistorys[index].historys[stat.historyIndex].date
		},

		
	},
	methods:{
		onClickModify(){
			if(this.$store.state.selected !=0 && !this.$store.state.selected){
				//리스트가 클릭이 안됬는데 수정하려하면 끝내줌
				alert('리스트를 먼저 선택해주세요.')
				return
			}
			this.$store.commit(CLICK_MODE,true)
		},
		dispatch(e){
			//e는 history의 현재 index가됨!
			let stat =this.$store.state
			if(stat.selected==null){
				return ' '
			}
			let index=stat.listHistorys.findIndex(x=> x.index===stat.selected)

			//store의 historyIndex를 업데이트 시켜줌!
			this.$store.commit(SET_HISTORY,e)

			this.elSelected=stat.listHistorys[index].historys[e].date +" "+stat.listHistorys[index].historys[e].author
			
			//carousel도 옮겨준다!
			this.$store.commit(CHANGE_CARAOUSEL)

		}

	},
	data(){
			//elSelected 는 select 박스에서 표시되는것
			//selectedDate는 작성날짜에 표시되는것
			//store.js의 historyIndex 라는 변수를 통해서 연동됨   
			//historyIndex가 변하면 이 둘도 같이 변화됨  
			return{
				elSelected:'',
			}

	},
	mounted(){
			let stat =this.$store.state
			stat.elSelectRef=this
			if(stat.selected==null){
				console.log("null 상태")
				this.elSelected="리스트를 먼저 선택해주세요."
			}else{
				console.log("dd")
			}
			
	},
	beforeDestroy(){
		console.log("all clear 리드페이지")
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