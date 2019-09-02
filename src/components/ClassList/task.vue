<template>
<!-- 任务条查查，班级查看，学生查看 -->
<div class="task"> 
<h1>看学生的学习进度，以班级为单位看任务条完成多少,班级名称那可以换其他班级</h1>
<div>
  <img :src="imgcl" alt="" style="width:100%">
</div>

</div>
</template>
<script>
export default {
  data(){

     return{  imgcl: require('../../assets/task.jpeg'),}
  }
}
</script>
<style scoped>

</style>
