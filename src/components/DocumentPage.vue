<template>
	<div id="DocumentPage">
		
		<template v-if="editing===false">
			<!-- 수정버튼을 누르기전!-->
			<read-header/>
			<el-carousel arrow="always" :autoplay=false :initial-index="historyList.length-1">
				<el-carousel-item v-for="item in historyList" :key="item.index">
					<h3>{{ item.text }}</h3>
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
				return '리스트를 클릭해주세요.'
			}
			let index=stat.listDocuments.findIndex(x=> x.index===stat.selected);
			console.log(stat.listDocuments[index].history.length)
			return stat.listDocuments[index].history
		}
		
	},
	data(){
		return{
			changingDocument:null,
			length : 0
		}
		
		
		
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