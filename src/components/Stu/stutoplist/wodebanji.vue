<template>
<!-- 学生端我的班级 -->
<div class="task"> 
<h1>学生端我的班级</h1>
<div>
  <img :src="imgcl" alt="" style="width:100%">
</div>

</div>
</template>
<script>
export default {
  data(){

     return{  imgcl: require('../../../assets/wodebanji.jpg'),}
  }
}
</script>
<style scoped>
.task{min-height: 700px;}

</style>
