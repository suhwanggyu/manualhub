<template>
  <el-main id="LoginContent">
        <div id="loginWrapper">
            <img src="../assets/logo.png"/>
            <el-input class="login" v-model="id" type="text" placeholder="아이디를 입력하세요."></el-input>
            <el-input class="login" v-model="password" type="password" placeholder="패스워드를 입력하세요."></el-input>
            <el-button id="loginBtn" @click="loginTry">로그인</el-button>
        </div>
  </el-main>
</template>

<script>

import { SUCCESS_LOGIN } from './store.js';

export default {
    
    data:function(){
        return{
            id : "",
            password : "",
            loginBool : false
        }
    },

    methods:{
        // 서버 구현 이후는 true, false 만 반환할 것
        loginTry : function(){
            if(this.id !== undefined && this.password !== undefined){
                let index = this.$store.state.users.findIndex( x => x.id === this.id);
                this.loginBool = ( index !== -1) && ( this.$store.state.users[index].password === this.password );
                if(this.loginBool){
                    this.$store.commit(SUCCESS_LOGIN);
                    this.$router.push({
                        name: 'Main' 
                    });
                }else{
                    alert('Login Please!');
                    this.id = "";
                    this.password = "";
                }
            }
        }
    }
}
</script>

<style>
    #loginWrapper{
        margin:0 auto;
        width : 500px;
    }

    #loginBtn{
        margin : 0 auto;
        display: block;
    }
    .login{
        width : 300px;
        margin : 0 auto;
        display : block;
    }
</style>