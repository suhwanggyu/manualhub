<template>
	<div id="EditMode">
		<Button type="submit" @click="onClickModify">수정</Button>
		<input :value="documentTitle" ref="titleInput"/>
	</div>
</template>
<script>
	import {CLICK_MODE} from './store.js'
	import {CLICK_MODIFY} from './store.js'
export default{
	name:"EditMode",
	computed:{
		documentTitle(){
			
			let stat =this.$store.state
			if(stat.selected===null){
				return ' '
			}
			let index=stat.listHistorys.findIndex(x=> x.index===stat.selected)
			return stat.listHistorys[index].title
		},

	},
	methods:{
		onClickModify(){
			
			if(this.$store.state.selected !=0 && !this.$store.state.selected){
				//리스트가 클릭이 안됬는데 수정하려하면 끝내줌
				alert('리스트를 먼저 선택해주세요.')
				return
			}


			let modifiedTitle=this.$refs.titleInput.value
			this.$store.commit(CLICK_MODE,false)
			this.$store.commit(CLICK_MODIFY,modifiedTitle)


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