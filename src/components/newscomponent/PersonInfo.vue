<template>
    <div id="PersonInfo">
        <el-divider content-position="left">사용자 정보</el-divider>
    <el-table id="RecentTable" :data="findUserName" style="width: 100%">
        <el-table-column :span="18" label="이름" prop="name" min-width="260">
        </el-table-column>
        <el-table-column :span="6" label="계급" prop="rank"  min-width="100">
        </el-table-column>
    </el-table>
<!--
        <p>이름: {{findUserName.name}}</p>
        <p>계급: {{findUserName.rank}}</p>
        -->
    </div>
</template>

<script>
export default {
    computed:{
        findIdIndex(){
            return this.$store.state.loginIndex
        },
        findUserName(){
            let index = this.$store.state.loginIndex
            let user=this.$store.state.users[index]
            return [user]
        }   

    },



}
</script>

<style>
#PersonInfo{
    margin: 10px 0px 0px 10px;
    padding:10px;
}



</style>