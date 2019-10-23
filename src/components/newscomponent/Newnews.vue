<template>
    <div id="NewNews">
        <el-table id="newsTable" border :default-sort = "{prop: 'date', order: 'descending'}" :data="textLog" @row-click="clickLog" style="width: 100%">
            <el-table-column label="NEWS : 새로운 기록 또는 최근 수정된 기록 열람">
            <el-table-column :span="12" prop="comment" label="title" min-width="260"></el-table-column>
            <el-table-column :span="6" prop="author" label="등록자" min-width="100"></el-table-column>
            <el-table-column :span="6" prop="date" label="날짜" min-width="100"></el-table-column>
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
        height : 40%;
        padding : 5px;
        width : 80%;
        margin : 0 auto;
    }
    #newsTable{
        height:100%;
    }
</style>