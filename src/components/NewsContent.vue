<template>
	<el-main id="NewsContent" class="grid-content bg-purple-light">
	
	<el-col class="newsframe" :span="12">
		<new-news/>
		<recent-read/>
	</el-col>
	<el-col class="newsframe" :span="12">
		<department-info/>
		<person-info/>
	</el-col>


</el-main>

</template>

<script>
import NewNews from './newscomponent/Newnews.vue'
import RecentRead from './newscomponent/RecentRead.vue'
import DefartmentInfo from './newscomponent/DepartmentInfo.vue'
import PersonInfo from './newscomponent/PersonInfo.vue'
export default {
components:{
	'new-news':NewNews,
	'recent-read':RecentRead,
	'department-info':DefartmentInfo,
	'person-info':PersonInfo,
}





}
</script>

<style>
    #NewsContent{
		width:100%;
		height: 600px;
		margin:0px;
		background-color:#ccc;
		font-family:"Helvetica Neue";

	}

	.newframe .el-main{
		width : 100px;
		height : 100px;
	}
</style>