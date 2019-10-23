<template>
    <div id="RecentlyRead">
        <el-table id="RecentTable" :data="readLog" @row-click="clickLog" style="width: 100%">
            <el-table-column label="최근 열람 기록">
            <el-table-column :span="12" prop="title" label="title" min-width="260"></el-table-column>
            <el-table-column :span="6" prop="author" label="등록자" min-width="100"></el-table-column>
            <el-table-column :span="6" prop="date" label="날짜" min-width="100"></el-table-column>
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
        height : 50%;
        padding : 5px;
    }
    #RecentlyRead #RecentTable{
        height: 100%;
    }
</style>