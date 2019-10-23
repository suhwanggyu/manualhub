<template>
  <vue-editor v-model="content" ref="editorRef" />
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },
  data(){
    let stat= this.$store.state
    return{
      content:stat.listDocuments[stat.selectedDocument].history[stat.historyIndex].text,
    }

  },
  mounted(){
    console.log(this.$refs.editorRef)
    this.$store.state.editRef=this.$refs.editorRef
  }
};
</script>