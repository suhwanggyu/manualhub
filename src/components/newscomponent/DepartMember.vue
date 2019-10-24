<template>
    <div id="DepartMember">
        <el-table id="memberTable" :data="sameDepart" style="width: 100%">
            <el-table-column label="부서원 목록">
            <el-table-column :span="5" prop="rank" label="계급" min-width="100"></el-table-column>
            <el-table-column :span="5" prop="name" label="이름" min-width="140"></el-table-column>
            <el-table-column :span="14" prop="description" label="보직" min-width="300"></el-table-column>
            
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name : "DepartMember",
    computed : {
        sameDepart : function(){
            return this.$store.state.users.filter(dat => dat.department_id === this.$store.state.users[this.$store.state.loginIndex].department_id)
        }
    }
}
</script>

<style>
    #DepartMember{
        height : 50%;
        width : 80%;
        margin : 0 auto;
        overflow: hidden;
    }
    #memberTable{
        height:80%;
    }
</style>