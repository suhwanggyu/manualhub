<template>
    <el-main id="HistoryPage">
        <el-table :data="listLogs"  style="width: 100%" @row-click="clickList">
			<el-table-column :span="18" prop="comment" label="title" min-width="260">
			</el-table-column>
			<el-table-column :span="6" prop="date" label="Date" min-width="100">
			</el-table-column>
		</el-table>
	</el-main>
</template>

<script>
import {CLICK_HIST, SET_HISTORY} from './store.js'

export default {
    name : "HistoryPage",
	computed:{
		listLogs(){
			
			return this.$store.state.textLog.filter(dat=>{
				return dat.index == this.$store.state.selected
			})
		}
    },
    methods:{
		clickList(receiver_id){
			
			let selectedNum = receiver_id.history_index;

			//document index 업데이트
			this.$store.commit(SET_HISTORY, selectedNum )

			//리스트 클릭시 현상들
			this.$store.commit(CLICK_HIST)
			
		}
	}
    
}
</script>

<style>

</style>