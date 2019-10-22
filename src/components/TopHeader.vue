<template>
	<el-header id="TopHeader">
		Manual Hub
    <i class="el-icon-user"></i>
	</el-header>
</template>

<script>

export default {
  name: 'TopHeader',
  components: {
    
  }
}
</script>

<style>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    font-family : "Hiragino Sans GB";
    font-size : 30px;
  }

  #TopHeader .el-icon-user{
    float : right;
    line-height : 2.5;
    font-size: x-large;
  }
</style>
