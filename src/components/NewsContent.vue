<template>
	<el-main id="NewsContent" class="grid-content bg-purple-light">
	
		<el-tabs v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="신규작성" name="first"><new-news></new-news></el-tab-pane>
			<el-tab-pane label="최근열람" name="second"><recent-read></recent-read></el-tab-pane>
			<el-tab-pane label="부서" name="third"><department-info></department-info><person-info></person-info></el-tab-pane>
			<el-tab-pane label="부서원" name="fourth"><depart-member></depart-member></el-tab-pane>
		</el-tabs>


	</el-main>

</template>

<script>
import NewNews from './newscomponent/Newnews.vue'
import RecentRead from './newscomponent/RecentRead.vue'
import DepartmentInfo from './newscomponent/DepartmentInfo.vue'
import PersonInfo from './newscomponent/PersonInfo.vue'
import DepartMember from './newscomponent/DepartMember.vue'

export default {
	components:{
		'new-news':NewNews,
		'recent-read':RecentRead,
		'department-info':DepartmentInfo,
		'person-info':PersonInfo,
		'depart-member' : DepartMember
	},
	data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
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
		width : 50%;
	}

	.el-table{
		overflow: auto;
	}

	.el-tabs{
		width : 70%;
		margin : 0 auto;
		margin-top : 40px;
	}

	.el-tabs__nav-scroll{
		width : 70%;
	}
	.el-tabs__header{
		margin-bottom: 40px;
	}
</style>