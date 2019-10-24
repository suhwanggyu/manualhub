<template>
  <div style="height : 100%">
    <vue-editor id="editor" v-model="maker" ref="editorRef2" v-if="edit"/>
    <vue-editor id="editor" v-model="content" ref="editorRef" v-else-if="!edit"/>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },
  data(){
    let stat= this.$store.state
    return{
      content:stat.selectedDocument?stat.listHistorys[stat.selectedDocument].historys[stat.historyIndex].text:"",
      maker:""
    }

  },
  computed:{
    edit(){
      return this.$store.state.editMode;
    }
  },
  mounted(){
    console.log(this.$refs.editorRef)
    this.$store.state.editRef=this.$refs.editorRef
    this.$store.state.editRef2=this.$refs.editorRef2
  },
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