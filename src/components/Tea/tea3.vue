<template>
  <div class="">
 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="知识列表" name="first">知识列表</el-tab-pane>
    <el-tab-pane label="班级" name="second">
      <BJlist> </BJlist>  
    </el-tab-pane>
    <el-tab-pane label="全部学生" name="third">
      <STUlist> </STUlist> 
    </el-tab-pane>
    <el-tab-pane label="题库" name="fourth">题库</el-tab-pane>
    <el-tab-pane label="问答" name="fiveth">
      <QAlist></QAlist>
    </el-tab-pane>
  </el-tabs>
  </div>
  
</template>
<script>
import BJlist from '@/components/Tea/Tea_list/banji'
import STUlist from   '@/components/Tea/Tea_list/student'
import QAlist from '@/components/Tea/Tea_list/wenda'
  export default {
  //     props: {
  //   activeName: {
  //     default: 'first'
  //   }
  // },
  
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {      
       BJlist,
       STUlist,
       QAlist,
     
    }
  };
</script>
<style scoped>

</style>


