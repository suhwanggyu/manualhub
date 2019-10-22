<template>
	<div id="EditMode">
		<Button type="submit" @click="onClickModify">수정</Button>
		<input v-model="documentTitle"/>
		<Button type="submit">그림 버튼</Button>
		<Button type="submit">글씨체</Button>
		<Button type="submit">태그</Button>
		<Button type="submit">글씨색</Button>
	</div>
</template>
<script>
	import {CLICK_MODE} from './store.js'
	import {FIND_CLICKED_INDEX} from './store.js'
export default{
	name:"EditMode",
	data(){

		return{
			documentTitle:this.$store.commit(FIND_CLICKED_INDEX),
		}
	},
	methods:{
		onClickModify(){
			
			this.$store.commit(CLICK_MODE,false)
			
		},
	},
	
	
}	
</script>
<style>
	#EditMode{
		/* 배경색깔은 컴포넌트 구별을 위해 넣었습니다. 제거해도 됩니다.  */
		background:#888;
		
	}
	
	
</style>