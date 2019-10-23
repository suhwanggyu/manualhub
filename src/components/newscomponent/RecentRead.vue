<template>
    <div id="RecentlyRead">
        <el-divider content-position="left">최근 열람 기록</el-divider>
<el-table id="RecentTable" :data="readLog" @row-click="clickLog" style="width: 100%">
    <el-table-column :span="18" prop="title" label="title" min-width="260">
	</el-table-column>
	<el-table-column :span="6" prop="author" label="등록자" min-width="100"></el-table-column>
	<el-table-column :span="6" prop="date" label="날짜" min-width="100">
	</el-table-column>
</el-table>


    </div>
</template>

<script>
export default {
    computed:{
            readLog(){
               return this.$store.state.readLog
            }


    },
    methods:{
        clickLog(receiver_id){
            console.log(receiver_id)
        },

    }



}
</script>

<style>
    #RecentlyRead{


    }
</style>