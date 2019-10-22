<template>
  <vue-editor v-model="content" />
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  components: { VueEditor },
  data(){
    let stat= this.$store.state
    return{
      content:stat.listDocuments[stat.selectedDocument].text ,
    }

  }
};
</script>