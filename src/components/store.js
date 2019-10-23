import Vue from 'vue';
import Vuex from 'vuex';
import listHist from "../assets/listhistory.json"
Vue.use(Vuex);

export const CLICK_SEARCH ='CLICK_SEARCH'
export const CLICK_LIST = 'CLICK_LIST'
export const CLICK_MODE = 'CLICK_MODE'
export const FIND_CLICKED_INDEX='FIND_CLICKED_INDEX'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const CLICK_MODIFY= 'CLICK_MODIFY'
export const FIND_INDEX='FIND_INDEX'
export const SET_HISTORY='SET_HISTORY'
export const CHANGE_CARAOUSEL='CHANGE_CARAOUSEL'
export const CHANGE_SELECT='CHANGE_SELECT'
export const ALL_CLEAR='ALL_CLEAR'
export const LODE_FILE='LODE_FILE'

export default new Vuex.Store({

	state:{
		search:'',
		selected:null,
		selectedDocument:null,
		documentMode:false,
		
		loginstate:false,
		
		
		
		historyIndex:0,

		caraRef:null,
		elSelectRef:null,
		editRef:null,
		listHistorys:[],
		
		users:[
			{
				id : "1",
				password : "1"
			},
			{
				id : "kokoja2",
				password : "Rhkswptlf1908!"
			},
			{
				id : "kokoja3",
				password : "Rhkswptlf1908!"
			},
			{
				id : "kokoja4",
				password : "Rhkswptlf1908!"
			}
		]
		
		
	},
	mutations:{
		//vuex의 methods와 같은것
		[CLICK_SEARCH](state,searchContent){
			state.search=searchContent	
		},
		[CLICK_LIST](state){
			//리스트를 클릭시 히스토리 인덱스는 다시 고쳐져야한다.
			state.historyIndex = 0
			//케라우저도 돌려줘야한다.
			state.caraRef.setActiveItem(state.historyIndex)

			//수정 필요
			state.elSelectRef.elSelected=state.listHistorys[state.selectedDocument].historys[state.historyIndex].date +" "+state.listHistorys[state.selectedDocument].historys[state.historyIndex].author
		},
		[CLICK_MODE](state,selectedMode){
			state.documentMode=selectedMode
		},
		[CLICK_MODIFY](state,title){
				//수정버튼 눌렀을시

				//1. 제목변경
				state.listHistorys[state.selected].title=title


				//2. 글 수정하기
				//글이 히스토리가 새로 추가된다!     날짜와 사람이름이 변경되어야함!
				//히스토리 0번 인덱스에 추가되야한다!


		},
		[FIND_INDEX](state){
			state.selectedDocument=state.listHistorys.filter(x => x.index===state.selected)[0].index

		},

		[SUCCESS_LOGIN](state){
			state.loginstate = true;
		},
		[SET_HISTORY](state,historyGet){
			state.historyIndex = historyGet
		},
		[CHANGE_CARAOUSEL](state){
			//주의! 수정모드를 다녀오면, ref가 안먹힌다.
			state.caraRef.setActiveItem(state.historyIndex)
		},
		[CHANGE_SELECT](state){
			state.elSelectRef.elSelected=state.listHistorys[state.selectedDocument].historys[state.historyIndex].date +" "+state.listHistorys[state.selectedDocument].historys[state.historyIndex].author
		},
		[ALL_CLEAR](state){
				//라우트로 전환시 데이터들을 초기로 돌려줘야한다.
				state.historyIndex = 0;
				state.selected=null;
				state.documentMode=false;
				state.selectedDocument=null;
				state.search='';
		},
		[LODE_FILE](state){
			state.listHistorys = listHist.listHistory.map((items) => {
				return items;
			});
		}
		
	}
});