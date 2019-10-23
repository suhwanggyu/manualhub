<template>
  <el-main id="NewsContent" class="grid-content bg-purple-light">
		<el-col class="newsframe" :span="12">
			
		</el-col>
		<el-col class="newsframe" :span="12">
		</el-col>

  </el-main>

</template>

<script>
export default {

}
</script>

<style>
    #NewsContent{
		width:100%;
		height: 600px;
		margin:0px;
		background : #fff;
	}

	.newsframe{
		background : #ccc;
	}

	.newframe .el-main{
		width : 100px;
		height : 100px;
		background : #fff;
	}
</style>