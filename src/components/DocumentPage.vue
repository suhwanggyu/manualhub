<template>
	<div id="DocumentPage">
		
		<template v-if="editing===false">
			<!-- 수정버튼을 누르기전!-->
			<read-header/>

			<el-carousel arrow="always" :autoplay=false :initial-index="historyList.length -1" @change="navi" ref="cara">


				<el-carousel-item  v-for="item in historyList" :key="item.index">
					<p v-html="item.text">{{ item.text }}</p>
				</el-carousel-item>
			</el-carousel>

		</template>

		<template v-else-if="editing===true">
			<!-- 수정버튼을 누른 후!-->
		<form>
			<edit-mode/>
			<document-editor/>
			
		</form>
			
		
		</template>
		
		
	</div>
</template>
<script>
	import ReadHeader from './ReadHeader.vue'
	import EditMode from './EditMode.vue'
	import DocumentEditor from './DocumentEditor.vue'
	import {SET_HISTORY,CHANGE_SELECT,ALL_CLEAR} from './store.js'
export default{
	name:"DocumentPage",
	components:{
			'read-header':ReadHeader,
			'edit-mode':EditMode,
			'document-editor':DocumentEditor,
		}
		,
	computed:{

		editing(){
			return this.$store.state.documentMode;
		},
		historyList(){
			let stat =this.$store.state;
			if(stat.selected===null){
				return {length:1}
			}
			let index=stat.listDocuments.findIndex(x=> x.index===stat.selected);
			return stat.listDocuments[index].history
		},
		historyIndex(){
			return this.$store.state.historyIndex;
		},
		
	},
	data(){
		return{
			changingDocument:null,
			
		}
		
		
		
	},
	methods:{
		navi(newIndex){
				//history index를 전달해준다!
				this.$store.commit(SET_HISTORY,newIndex)

				//select 박스도 변경해줌!
				
				this.$store.commit(CHANGE_SELECT)
				
		},
	},
	mounted(){

		this.$store.state.caraRef=this.$refs.cara

	}
	,
	beforeDestroy(){
		//다시 히스토리 인덱스는 0으로 돌려놓고 삭제됨.
		this.$store.commit(SET_HISTORY,0)

		this.$store.commit(ALL_CLEAR)
	}

}	
</script>
<style>
	#DocumentPage{
		box-sizing: border-box;
	}	
	.el-carousel--horizontal{
		height:100%;
	}

	.el-carousel__item{
		padding : 10px;
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		margin: 0;
	}	

	.el-carousel__item:nth-child(2n) {
		background-color: #fff;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #fff;
	}



</style>