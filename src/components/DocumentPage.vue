<template>
	<div id="DocumentPage">
		
		<template v-if="editing===false">
			<!-- 수정버튼을 누르기전!-->
			<read-mode/>
			<span>
				{{DocumentText}}
			</span>

		</template>

		<template v-else-if="editing===true">
			<!-- 수정버튼을 누른 후!-->
		<form>
			<edit-mode/>
			<fieldset>
				<textarea v-model="changingDocument">
				</textarea>
			</fieldset>
			
		</form>
			
		
		</template>
		
		
	</div>
</template>
<script>
	import ReadMode from './ReadMode.vue'
	import EditMode from './EditMode.vue'
	
export default{
	name:"DocumentPage",
	components:{
			'read-mode':ReadMode,
			'edit-mode':EditMode,
		}
		,
	computed:{

		editing(){
			return this.$store.state.documentMode;
		},
		DocumentText(){
			let stat =this.$store.state
			if(stat.selected===null){
				return '리스트를 클릭해주세요.'
			}
			let index=stat.listDocuments.findIndex(x=> x.index===stat.selected)
			return stat.listDocuments[index].text
		}
		
	},
	data(){
		return{
			changingDocument:null,
		}
		
		
		
	}
	
	
}	
</script>
<style>
	#DocumentPage{
		box-sizing: border-box;
	}	
	
	
</style>