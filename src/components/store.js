import Vue from 'vue';
import Vuex from 'vuex';

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
		
		loginstate:false,
		
		
		
		historyIndex:0,

		caraRef:null,
		elSelectRef:null,
		editRef:null
		,
		listDocuments:[{
			index:0,
			text:"대충 p999k 설명을 하는중임"
			,
			history:[
			{index : 0 , text : "<h1>0번 인덱스</h1>",
						date:"2019/10/01",
						name:"중사 김근영"},
			{index : 1 , text : "1번 인덱스"
						,date:"2019/10/02",
						name:"중사 김근영"},
			{index : 2 , text : "2번 인덱스"
						, date:"2019/10/03",
						name:"중사 김근영"}]
			
		},
		{
			index:1,
			text:"대충 여단화상회의 설명"
, history:[{index : 0 , text : "0번 인덱스",
			date:"2019/10/01",
			name:"중사 김근영"},
{index : 1 , text : "1번 인덱스"
			,date:"2019/10/02",
			name:"중사 김근영"},
{index : 2 , text : "2번 인덱스"
			, date:"2019/10/03",
			name:"중사 김근영"}]

		},
		{
			index:2,
			text:"P-999K 사용절차와 수리방법",
			history:[{index : 0 , text : "P999K 설명1",
			date:"2019/10/01",
			name:"중사 김근영"},
{index : 1 , text : "P999K 설명2"
			,date:"2019/10/02",
			name:"중사 김근영"},
{index : 2 , text : "P999K 설명3"
			, date:"2019/10/03",
			name:"중사 김근영"}]

			
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
		],


		users:[
			{
				id : "kokoja",
				password : "Rhkswptlf1908!"
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
			state.historyIndex = state.listDocuments[state.selectedDocument].history.length-1
			//케라우저도 돌려줘야한다.
			state.caraRef.setActiveItem(state.historyIndex)

			//수정 필요
			state.elSelectRef.elSelected=state.listDocuments[state.selectedDocument].history[state.historyIndex].date +" "+state.listDocuments[state.selectedDocument].history[state.historyIndex].name
		},
		[CLICK_MODE](state,selectedMode){
			state.documentMode=selectedMode
		},
		[CLICK_MODIFY](state,title){
				//수정버튼 눌렀을시

				//1. 제목변경
				state.listDatas[state.selected].text=title


				//2. 글 수정하기
				//글이 히스토리가 새로 추가된다!     날짜와 사람이름이 변경되어야함!
				//히스토리 0번 인덱스에 추가되야한다!

				console.log("추가하기 전 : ", state.listDocuments[state.selectedDocument].history.length)
				state.listDocuments[state.selectedDocument].history.unshift(
				{
					index:0,
					text:state.editRef.value,
					date:'2019/10/23',
					name:'중사 김무협'
				}
				//나머지 인덱스는 모두 하나씩 증가 시키기

					
					)
					console.log("추가하기 후 : ", state.listDocuments[state.selectedDocument].history.length)


		},
		[FIND_INDEX](state){
			state.selectedDocument=state.listDocuments.filter(x => x.index===state.selected)[0].index

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
			state.elSelectRef.elSelected=state.listDocuments[state.selectedDocument].history[state.historyIndex].date +" "+state.listDocuments[state.selectedDocument].history[state.historyIndex].name
		},
		[ALL_CLEAR](state){
				//라우트로 전환시 데이터들을 초기로 돌려줘야한다.
				state.historyIndex = 0;
				state.selected=null;
				state.documentMode=false;
				state.selectedDocument=null;
				state.search='';
		}

		
	}
});