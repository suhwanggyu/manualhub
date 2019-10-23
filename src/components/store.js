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

export const LOGIN_UPDATE='LOGIN_UPDATE'

export const CLICK_HIST='CLICK_HIST'

export default new Vuex.Store({

	state:{
		search:'',
		selected:null,
		selectedDocument:null,
		documentMode:false,
		
		loginstate:false,
		loginIndex:null
		,
		historyIndex:0,

		caraRef:null,
		elSelectRef:null,
		editRef:null,
		listHistorys:[],

		
		onHistory:false,
		textLog:[
		{
			date:'2019.10.29',
			author:'일병 이종법',
			index:0,
			comment:'P-999K 신형 사진으로 교체, 교신방법 오타 수정',
			history_index : 2
		},
		{
			date:'2019.8.8',
			author:'중사 김민형',
			index:1,
			comment:'여단 서버 P-50에서 P6-520으로 교체, 교체로 인한 점검방법 1차수정',
			history_index : 0
		},
		{
			date:'2019.8.8',
			author:'중사 김민형',
			index:0,
			comment:'여단 서버 P-50에서 P6-520으로 교체, 교체로 인한 점검방법 1차수정',
			history_index : 0
		},
		{
			date:'2019.8.8',
			author:'중사 김민형',
			index:1,
			comment:'여단 서버 P-50에서 P6-520으로 교체, 교체로 인한 점검방법 1차수정',
			history_index : 1
		},
		{
			date:'2019.8.8',
			author:'중사 김민형',
			index:0,
			comment:'여단 서버 P-50에서 P6-520으로 교체, 교체로 인한 점검방법 1차수정',
			history_index : 1
		},
		],
		users:[
			{
				id : "1",
				rank:"일병",
				name:"이종법",
				password : "1",
				department_id:1,
			},
			{
				id : "kokoja2",	
				rank:"일병",
				name:"김종법",
				password : "Rhkswptlf1908!",
				department_id:0,
			},
			{
				id : "kokoja3",
				rank:"일병",
				name:"일종법",
				password : "Rhkswptlf1908!",
				department_id:2,
			},
			{
				id : "kokoja4",
				rank:"일병",
				name:"일종법",
				password : "Rhkswptlf1908!",
				department_id:2,
			},
		],
		department:[
			{
				department_id:0,
				dept_name:"정보통신과 무선통신",
				dept_head:"상사 윤선중",
				dept_numberOfPeople:10,

			},
			{
				department_id:1,
				dept_name:"정보통신과",
				dept_head:"통신과장 김민규",
				dept_numberOfPeople:30,

			},
			{
				department_id:2,
				dept_name:"전술 C4I 운용병",
				dept_head:"소위 전준표",
				dept_numberOfPeople:5,

			},
			{
				department_id:3,
				dept_name:"정작참모처 화생병과",
				dept_head:"화생방통제관 김시홍",
				dept_numberOfPeople:5,


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
			state.historyIndex = state.listHistorys[state.selectedDocument].historys.length-1
			//케라우저도 돌려줘야한다.
			state.caraRef.setActiveItem(state.historyIndex)

			//수정 필요
			state.elSelectRef.elSelected=state.listHistorys[state.selectedDocument].historys[state.historyIndex].date +" "+state.listHistorys[state.selectedDocument].historys[state.historyIndex].author
		},
		[CLICK_HIST](state){
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

				//console.log("추가하기 전 : ", state.listDocuments[state.selectedDocument].history.length)
				//console.log(state.editRef)
				let temp=state.listHistorys[state.selectedDocument].historys
				temp.push({
					index:temp.length,
					text:state.editRef.value,
					date:'2019/10/23',
					author:'중사 김무협'
				})
				Vue.set(state.listHistorys[state.selectedDocument],'historys',temp)
				state.historyIndex = state.listHistorys[state.selectedDocument].historys.length-1;
				
				//console.log("추가하기 후 : ", state.listDocuments[state.selectedDocument].history.length)


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
			console.log("케라우저")
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
		},
		[LOGIN_UPDATE](state,recentIndex){
			state.loginIndex=recentIndex
		}
		
	}
});