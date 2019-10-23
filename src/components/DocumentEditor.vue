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
      content:stat.listHistorys[stat.selectedDocument].historys[stat.historyIndex].text,
    }

  },
  mounted(){
    this.$store.state.editorRef=this.$refs.editorRef
  }
};
</script>