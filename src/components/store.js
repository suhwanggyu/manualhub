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
export const WRITE_READLOG = 'WRITE_READLOG'
export const WRITE_FILE = "WRITE_FILE"

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
		editRef2:null,
		listHistorys:[],
		editMode : false,
		
		onHistory:false,
			readLog:[
			{
				date:'2019.10.01',
				author:'소위 한서준',
				index:1,
				title:"여단화상회의 PC 접속방법과 군단회의 접속",
			},
			{
				date:'2019.10.01',
				author:'중위 위대한',
				index:0,
				title:"P-999K 사용절차와 수리방법",
			},
			],
		textLog:[
		{
			date:'2014.10.05',
			author:'일병 이종법',
			index:3,
			comment:'PRC-999K 글 탑재',
			history_index : 0
		},		{
			date:'2019.10.29',
			author:'일병 이종법',
			index:3,
			comment:'PRC-999K 사진 교체',
			history_index : 1
		},
		{
			date:'2009.08.08',
			author:'전산 실장',
			index:2,
			comment:'여단 서버도입 및 점검 인수인계서 등록.',
			history_index : 0
		},
		{
			date:'2019.08.08',
			author:'중사 김민형',
			index:2,
			comment:'여단 서버 P-50에서 P6-520으로 교체, 교체로 인한 점검방법 1차수정',
			history_index : 1
		},
		{
			date:'2019.08.08',
			author:'중사 김민형',
			index:0,
			comment:'입사지원서 양식입니다. 올려주세요',
			history_index : 0
		},
		{
			date:'2019.10.24',
			author:'일병 이종법',
			index:0,
			comment:'본부대 일병 이종법 입사지원서 제출 했습니다.',
			history_index : 1
		},
		{
			date:'2019.10.24',
			author:'일병 김명훈',
			index:0,
			comment:'김명훈 입사지원서 제출 했습니다.',
			history_index : 2
		},
		{
			date:'2019.10.25',
			author:'일병 김민석',
			index:0,
			comment:'김민석 입사지원서 제출 했습니다.',
			history_index : 3
		},
		{
			date:'2019.10.26',
			author:'일병 김지훈',
			index:0,
			comment:'김지훈 입사지원서 제출 했습니다.',
			history_index : 4
		},
		{
			date:'2018.10.26',
			author:'전산 실장',
			index:1,
			comment:'전산용품 지원 신청서 양식 등록.',
			history_index : 0
		},{
			date:'2019.10.26',
			author:'일병 이종법',
			index:1,
			comment:'10/26 전산용품 지원 신청하겠습니다.',
			history_index : 1
		},
		


		{
			date:'2019.08.01',
			author:'행정보급관',
			index:4,
			comment:'주간 업무 일지 양식 / 매주 올리는곳.',
			history_index : 0
		},
		{
			date:'2019.08.02',
			author:'일병 이종법',
			index:4,
			comment:'8월 1주차 주간 업무일지',
			history_index : 1
		},
		{
			date:'2019.08.08',
			author:'일병 이종법',
			index:4,
			comment:'8월 2주차 주간 업무일지',
			history_index : 2
		},
		{
			date:'2019.08.15',
			author:'일병 이종법',
			index:4,
			comment:'8월 3주차 주간 업무일지',
			history_index : 3
		},
		{
			date:'2019.08.24',
			author:'일병 이종법',
			index:4,
			comment:'8월 4주차 주간 업무일지',
			history_index : 4
		},
		{
			date:'2019.09.01',
			author:'일병 이종법',
			index:4,
			comment:'9월 1주차 주간 업무일지',
			history_index : 5
		},
		{
			date:'2019.09.08',
			author:'일병 이종법',
			index:4,
			comment:'9월 2주차 주간 업무일지',
			history_index : 6
		},
		{
			date:'2019.09.15',
			author:'일병 이종법',
			index:4,
			comment:'9월 3주차 주간 업무일지',
			history_index : 7
		},
		{
			date:'2019.09.24',
			author:'일병 이종법',
			index:4,
			comment:'9월 4주차 주간 업무일지',
			history_index : 8
		},
		{
			date:'2019.10.01',
			author:'일병 이종법',
			index:4,
			comment:'10월 1주차 주간 업무일지',
			history_index : 9
		},
		{
			date:'2019.10.08',
			author:'일병 이종법',
			index:4,
			comment:'10월 2주차 주간 업무일지',
			history_index : 10
		},
		],
		users:[
			{
				id : "1",
				rank:"소령",
				name:"최석한",
				password : "1",
				department_id:1,
				description : "1여단 정보통신대대장"
			},
			{
				id : "kokoja2",	
				rank:"중위",
				name:"김종태",
				password : "Rhkswptlf1908!",
				department_id:0,
				description : "1여단 정보통신대대 정보통신반장"
			},
			{
				id : "kokoja3",
				rank:"소위",
				name:"한성하",
				password : "Rhkswptlf1908!",
				department_id:1,
				description : "1여단 정보통신대대 정보통신반 체계담당"
			},
			{
				id : "kokoja4",
				rank:"원사",
				name:"김태익",
				password : "Rhkswptlf1908!",
				department_id:1,
				description : "1여단 정보통신대대 정보통신반 전산담당"
			},
			{
				id : "kokoja4",
				rank:"상사",
				name:"김태석",
				password : "Rhkswptlf1908!",
				department_id:1,
				description : "1여단 정보통신대대 정보통신반 장비담당"
			},
			{
				id : "kokoja4",
				rank:"병장",
				name:"이상수",
				password : "Rhkswptlf1908!",
				department_id:1,
				description : "1여단 정보통신대대 정보통신병"
			},
			{
				id : "kokoja4",
				rank:"상병",
				name:"이보현",
				password : "Rhkswptlf1908!",
				department_id:1,
				description : "1여단 정보통신대대 정보통신병"
			},
			{
				id : "kokoja4",
				rank:"일병",
				name:"이청하",
				password : "Rhkswptlf1908!",
				department_id:1,
				description : "1여단 정보통신대대 정보통신병"
			},
			{
				id : "kokoja4",
				rank:"일병",
				name:"성한울",
				password : "Rhkswptlf1908!",
				department_id:1,
				description : "1여단 정보통신대대 정보통신병"
			}
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
			//state.historyIndex = state.listHistorys[state.selectedDocument].historys.length-1
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
					date:new Date().toLocaleDateString(),
					author:state.users[state.loginIndex].name
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
				state.editMode = false;
		},
		[LODE_FILE](state){
			state.listHistorys = listHist.listHistory.map((items) => {
				return items;
			});
		},
		[LOGIN_UPDATE](state,recentIndex){
			state.loginIndex=recentIndex
		},
		[WRITE_READLOG](state){
			state.readLog.push({
				date:new Date().toLocaleDateString(),
				author: state.users[state.loginIndex].rank + " " + state.users[state.loginIndex].name,
				index: state.readLog.length,

				title: state.listHistorys[state.selectedDocument].title,
			})
		},
		[WRITE_FILE](state,title){
			console.log(state.editRef2.value);
			
			state.listHistorys.push({
				index : state.listHistorys.length,
				title : title,
				department_id : state.users[state.loginIndex].department_id,
				historys:
				[{index:0,
				date:new Date().toLocaleDateString(),
				author:state.users[state.loginIndex].name,
				text:state.editRef2.value}]
			})
		}

		
	}
});