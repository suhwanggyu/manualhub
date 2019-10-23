<template>
    <div id="NewNews">
    <el-divider content-position="left">NEWS : 새로운 기록 또는 최근 수정된 기록 열람</el-divider>
<el-table id="newsTable" :data="textLog" @row-click="clickLog" style="width: 100%">
    <el-table-column :span="18" prop="comment" label="title" min-width="260">
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
        textLog(){
            
            return this.$store.state.textLog;
        },

    },
    methods:{
        clickLog(receiver_id){
                console.log(receiver_id)
        }

    }



}
</script>

<style>
    #NewNews{
        overflow: hidden;
    }
    #newsTable{
        margin:30px;
        padding:10px;
    }

</style>