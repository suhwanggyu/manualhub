<template>
    <div id="DepartMentInfo">
        부서 정보
        <div id="imgLine">
            <img id="departImg" :src="findImage">
            <p>부서 : {{findDepart.dept_name}}</p>
            <p>부서장: {{findDepart.dept_head}}</p>
            <p>인원: {{findDepart.dept_numberOfPeople}} 명</p>
        </div>
  <div>

  </div>

    </div>

</template>

<script>
export default {
    computed:{
        findIdIndex(){
            return this.$store.state.loginIndex
        }
        ,
        findImage(){
            let index = this.$store.state.loginIndex
            let img="./image/"+this.$store.state.users[index].department_id+".jpg"

            return img
        },
        findDepart(){
            let index = this.$store.state.loginIndex
            let departIndex=this.$store.state.users[index].department_id
            console.log(this.$store.state.department[departIndex])
            return this.$store.state.department[departIndex]
        }

    }



}
</script>

<style>
    #DepartMentInfo{
        overflow: hidden;
        height : 25%;
    }

    #departImg{
        float:left;
        width:100px;
        height:100px;
    }
    #imgLine{ 
        padding :15px;
    }


</style>