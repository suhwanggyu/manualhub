<template>
	<el-main id="MainContent">
		<el-row>
			<el-col :span="8"><search-page class="grid-content bg-purple"></search-page></el-col>
			<el-col :span="16"><document-page class="grid-content bg-purple-light"></document-page></el-col>
		</el-row>
	</el-main>


</template>

<script>
import SearchPage from './SearchPage.vue'
import DocumentPage from './DocumentPage.vue'
	
	

export default {
	

  name: 'MainContent',
  components: {
		'search-page':SearchPage,
		'document-page':DocumentPage,
  }
}
</script>

<style>
	#MainContent{
		width:100%;
		height: 600px;
		border: 1px solid #000;
		margin:0px;
	}
	
	.el-main{
		min-height : 1000px;
	}

	#MainContent{
		padding : 0px;
	}
	
	.clear{
		clear:both;
	}
	
	.el-row {
		margin-bottom: 20px;
		&:last-child {
		margin-bottom: 0;
		}
	}
  .el-col {
    border-radius: 4px;
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
    min-height: 1000px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
