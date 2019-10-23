<template>
        <el-carousel arrow="always" :autoplay=false :initial-index="historyList.length -1" @change="navi" ref="cara">
				<el-carousel-item  v-for="item in historyList" :key="item.index">
					<p v-html="item.text">{{ item.text }}</p>
				</el-carousel-item>
			</el-carousel>
</template>

<script>

import {SET_HISTORY,CHANGE_SELECT} from './store.js'
export default {
	computed:{
		historyList(){
			let stat =this.$store.state;
			if(stat.selected===null){
				return {length:1}
			}
			let index=stat.listHistorys.findIndex(x=> x.index===stat.selected);
			return stat.listHistorys[index].historys
		},
		historyIndex(){
			return this.$store.state.historyIndex;
		},
		
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
		console.log('다큐 추가함')
		this.$store.state.caraRef=this.$refs.cara

	}
}
</script>

<style>
	.el-carousel--horizontal{
		height:100%;
	}

	.el-carousel__item{
		padding : 10px;
        height:auto;
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