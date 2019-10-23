<template>
	<el-main id="MainContent">
		<el-row>
			<el-col :span="7" min-width="500px" v-if="!$store.state.onHistory"><search-page class="grid-content"></search-page></el-col>
			<el-col :span="7" min-width="500px" v-if="$store.state.onHistory"><history-page></history-page></el-col>
			<el-col :span="17"><document-page class="grid-content"></document-page></el-col>
		</el-row>
	</el-main>
</template>

<script>
import SearchPage from './SearchPage.vue'
import DocumentPage from './DocumentPage.vue'
import HistoryPage from './HistoryPage.vue'
	
	

export default {
	

  name: 'MainContent',
  components: {
		'search-page':SearchPage,
		'document-page':DocumentPage,
		'history-page':HistoryPage

  }
}
</script>

<style>
	#MainContent{
		width:100%;
		height: 100%;
		margin:0px;
	}
	
	.el-main, .el-col, .el-row{
		height:100%;
	}

	#MainContent{
		padding : 0px;
	}
	
	.clear{
		clear:both;
	}
	
	.el-row {
		margin-bottom: 0;
		&:last-child {
		margin-bottom: 0;
		}
	}
  .el-col {
    border-radius: 4px;
	position: relative;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    height:100%;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
