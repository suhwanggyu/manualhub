<template>
    <div id="NewNews">
        <el-table id="newsTable" border :default-sort = "{prop: 'date', order: 'descending'}" :data="textLog" @row-click="clickLog" style="width: 100%">
            <el-table-column label="NEWS : 새로운 기록 또는 최근 수정된 기록 열람">
            <el-table-column :span="12" prop="comment" label="title" min-width="260"></el-table-column>
            <el-table-column :span="6" prop="author" label="등록자" min-width="100"></el-table-column>
            <el-table-column :span="6" prop="date" label="날짜" min-width="100"></el-table-column>
            </el-table-column>
        </el-table>
        <router-link to="/read">aa</router-link>
    </div>
</template>

<script>

import {FIND_INDEX, CLICK_LIST, CLICK_HIST, WRITE_READLOG} from '../store.js'

export default {
    computed:{
        textLog(){
            
            return this.$store.state.textLog;
        },

    },
    methods:{
        clickLog(receiver_id){
                this.$store.state.selected = receiver_id.index;
                this.$store.state.historyIndex = receiver_id.history_ndex
                //히스트 설정
                this.$store.commit(FIND_INDEX)
                this.$store.commit(CLICK_LIST)
                this.$store.commit(CLICK_HIST)
                

                this.$router.push("/read");
                this.$store.commit(WRITE_READLOG);
        
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