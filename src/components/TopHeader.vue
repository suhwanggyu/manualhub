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
  #TopHeader{
    padding-left : 100px;
    background-color: #fff;
    color: #333;
    line-height: 60px;
    font-family : "Arial";
    font-weight : bold;
    font-size : 30px;
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
