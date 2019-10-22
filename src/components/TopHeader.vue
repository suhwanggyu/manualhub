<template>
	<el-header id="TopHeader">
		<span id="titlename">Manual Hub</span>
    <router-link to="/news"><el-checkbox-button label="news"></el-checkbox-button></router-link>
    <router-link to="/read"><el-checkbox-button label="read"></el-checkbox-button></router-link>
    <i class="el-icon-user" @mouseover="informList"></i>
	</el-header>
</template>

<script>

export default {
  name: 'TopHeader',
  components: {
    
  },
  methods:{
    informList:function(){
      
    }
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
  #TopHeader{
    padding-left : 100px;
  }
  #TopHeader #titlename{
    padding-right : 100px;
  }
  #TopHeader .el-icon-user{
    float : right;
    line-height : 2.5;
    font-size: x-large;
  }

  active{
    background : blue;
  }
</style>
