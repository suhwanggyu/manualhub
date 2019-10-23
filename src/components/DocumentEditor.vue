<template>
  <vue-editor id="editor" v-model="content" ref="editorRef"/>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },
  data(){
    let stat= this.$store.state
    return{
      content:stat.listHistorys[stat.selectedDocument].historys[stat.historyIndex].text,
    }

  },
  mounted(){
    console.log(this.$refs.editorRef)
    this.$store.state.editRef=this.$refs.editorRef
  }
};
</script>

<style>
  #editor{
    height : 100%;
  }
  .quillWrapper{
    height: 100%;
  }
</style>