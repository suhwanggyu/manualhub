<template>
	<el-main id="NewsContent" class="grid-content bg-purple-light">
	
		<el-col class="newsframe" :span="12">
			<department-info/>
			<person-info/>
			<new-news/>
		</el-col>
		<el-col class="newsframe" :span="12">
			<depart-member/>
			<recent-read/>
		</el-col>


	</el-main>

</template>

<script>
import NewNews from './newscomponent/Newnews.vue'
import RecentRead from './newscomponent/RecentRead.vue'
import DepartmentInfo from './newscomponent/DepartmentInfo.vue'
import PersonInfo from './newscomponent/PersonInfo.vue'
import DepartMember from '/newscomponent/DepartMember.vue'

export default {
components:{
	'new-news':NewNews,
	'recent-read':RecentRead,
	'department-info':DepartmentInfo,
	'person-info':PersonInfo,
	'depart-member' : DepartMember
}





}
</script>

<style>
    #NewsContent{
		width:100%;
		height: 100%;
		margin:0px;
		padding : 0%;
		background-color:#fff;
		font-family:"Helvetica Neue";

	}
	.newsframe{
		height : 100%;
	}

	.el-table{
		overflow: auto;
	}
</style>