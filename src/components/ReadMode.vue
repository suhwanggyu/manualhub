<template>
	<div id="ReadMode">
		<span>글제목: {{title}}   날짜: ~~ </span>
		<span>작성자명 : </span>
		<select>
			
			
		</select>
		<button type="submit" @click="onClickModify">수정</button>
		<input type="checkbox">
	</div>
</template>
<script>
	import {CLICK_MODE} from './store.js'
	
	
export default{
	name:"ReadMode",
	computed:{
		title(){
			let stat =this.$store.state
			if(stat.selected===null){
				return ' '
			}
			let index=stat.listDocuments.findIndex(x=> x.index===stat.selected)
			return stat.listDatas[index].text
		},
		
	},
	methods:{
		onClickModify(){
			
			this.$store.commit(CLICK_MODE,true)
			
		},
	}
	
	
	
	
}	
</script>
<style>
	#ReadMode{
		/* 배경색깔은 컴포넌트 구별을 위해 넣었습니다. 제거해도 됩니다.  */
		background:#888;
		
	}
	
	
</style>