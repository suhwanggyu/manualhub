<template>
	<div id="DocumentPage">
		
		<template v-if="editing===false">
			<!-- 수정버튼을 누르기전!-->
			<read-header/>
			<carousel-page/>
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
	import CarouselPage from './CarouselPage.vue'
	import {SET_HISTORY,ALL_CLEAR} from './store.js'
export default{
	name:"DocumentPage",
	components:{
			'carousel-page':CarouselPage,
			'read-header':ReadHeader,
			'edit-mode':EditMode,
			'document-editor':DocumentEditor,
		}
		,
	computed:{

		editing(){
			return this.$store.state.documentMode;
		},
	},
	data(){
		return{
			changingDocument:null,
		}
	},
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
	#DocumentPage form{
		height:100%;
	}
</style>