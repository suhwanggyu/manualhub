<template>
    <div id="RecentlyRead">
        <el-table id="RecentTable" :data="readLog" border :default-sort = "{prop: 'date', order: 'ascending'}" @row-click="clickLog" style="width: 100%">
            <el-table-column id="label" label="최근 열람 기록">
            <el-table-column :span="12" prop="title" label="제목" min-width="260"></el-table-column>
            <el-table-column :span="6" prop="author" label="열람자" min-width="100"></el-table-column>
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
        height : 40%;
        width : 80%;
        margin : 0 auto;
        padding : 5px;
        
    }
    #RecentlyRead #RecentTable{
        height: 100%;
    }
    #label{
        font-weight: bold;
    }
</style>