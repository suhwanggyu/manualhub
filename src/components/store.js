import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const CLICK_SEARCH ='CLICK_SEARCH'
export const CLICK_LIST = 'CLICK_LIST'
export const CLICK_MODE = 'CLICK_MODE'
export const CLICK_MODIFY= 'CLICK_MODIFY'
export const FIND_INDEX='FIND_INDEX'
export default new Vuex.Store({
	state:{
		//vue의 data와 같은것   computed 에서 불러서 사용하면됨
		listDatas:[{
			index:0,
			text:"P-999K 사용절차와 수리방법",
			name : "중위 위대한",
			date:"2019/10/01"
		},{
			index:1,
			text:"여단화상회의 PC 접속방법과 군단회의 접속",
			name : "소위 한서준",
			date:"2019/10/01"
		},
		{
			index:2,
			text:"P6-520 오류 종류",
			name : "소령 정평화",
			date:"2019/10/01"
			
		},
		{
			index:3,
			text:"P6-520 오류 종류",
			name : "중사 한명한",
			date:"2019/10/01"
			
		},
		{
			index:4,
			text:"P6-520 오류 종류",
			name : "중사 김근영",
			date:"2019/10/01"
			
		},{
			index:5,
			text:"P6-520 오류 종류",
			name : "중사 김근영",
			date:"2019/10/01"
			
		},{
			index:6,
			text:"P6-520 오류 종류",
			name : "중사 김근영",
			date:"2019/10/01"
			
		},{
			index:7,
			text:"P6-520 오류 종류",
			name : "중사 김근영",
			date:"2019/10/01"
			
		},{
			index:8,
			text:"P6-520 오류 종류",
			name : "중사 김근영",
			date:"2019/10/01"
			
		},],
		search:'',
		selected:null,
		selectedDocument:null,
		documentMode:false,
		listDocuments:[{
			index:0,
			history:[{index : 0 , text : "<h3>aa</h3>여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회"},{index : 1 , text : "여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회2"},{index : 2 , text : "여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회3"}]
			
		},
		{
			index:1,
			text:"여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다.여단화상회의 pc 설명이다."
			
		},
		{
			index:2,
			text:"P-999K 사용절차와 수리방법"
			
		},
		{
			index:3,
			text:"P-999K 사용절차와 수리방법"
			
		},
		{
			index:4,
			text:"P-999K 사용절차와 수리방법"
			
		},
		{
			index:5,
			text:"P-999K 사용절차와 수리방법"
			
		},
		{
			index:6,
			text:"P-999K 사용절차와 수리방법"
			
		},
		{
			index:7,
			text:"P-999K 사용절차와 수리방법"
			
		},
		{
			index:8,
			text:"P-999K 사용절차와 수리방법"
			
		},	
		]
		
		
	},
	mutations:{
		//vuex의 methods와 같은것
		[CLICK_SEARCH](state,searchContent){
			//console.log("클릭서치2")
			state.search=searchContent	
			
		},
		[CLICK_LIST](state,selecteIndex){
			state.selected=selecteIndex
		},
		[CLICK_MODE](state,selectedMode){
			state.documentMode=selectedMode
		},
		[CLICK_MODIFY](state,title){
				state.listDatas[state.selected].text=title
				//글 수정하기도 추가해야함
		},
		[FIND_INDEX](state){
			state.selectedDocument=state.listDocuments.filter(x => x.index===state.selected)[0].index

		}


		
	}
	
	
	
	
	
	
	
});