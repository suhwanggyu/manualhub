<template>
	<div class="PlusButton">
		<el-button type="primary" icon="el-icon-edit" circle @click = "edit"></el-button>
	</div>
</template>
<script>
import { CLICK_MODE } from './store.js'
export default{
	
	methods:{
		edit(){
			this.$store.state.editMode = true;
			this.$store.commit(CLICK_MODE,true);
		}
	}
	
	
}	
</script>
<style>

	
	
</style>