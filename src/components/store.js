import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const CLICK_SEARCH ='CLICK_SEARCH'
export const CLICK_LIST = 'CLICK_LIST'
export const CLICK_MODE = 'CLICK_MODE'
export const FIND_CLICKED_INDEX='FIND_CLICKED_INDEX'
export default new Vuex.Store({
	state:{
		//vue의 data와 같은것   computed 에서 불러서 사용하면됨
		listDatas:[{
			index:0,
			text:"P-999K 사용절차와 수리방법"
			
		},{
			index:1,
			text:"여단화상회의 PC 접속방법과 군단회의 접속"
			
		},
		{
			index:2,
			text:"P6-520 오류 종류"
			
		},
		{
			index:3,
			text:"P6-520 오류 종류"
			
		},
		{
			index:4,
			text:"P6-520 오류 종류"
			
		},],
		search:'',
		selected:null,
		documentMode:false,
		
		
		
		
		
		listDocuments:[{
			index:0,
			text:"P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다.P-999K 사용절차와 설명이다."
			
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
		[FIND_CLICKED_INDEX](state){

			if(state.selected===null){
				return null
			}
			let index=state.listDocuments.findIndex(x=> x.index===state.selected)
			return index
		}
		
	}
	
	
	
	
	
	
	
});