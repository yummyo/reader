<template>
<!-- 创建好班级后，对班级的修改删除等细节 -->
<div class="classdetails">
  <!-- 第一行写文字描述和返回上层菜单文字 -->
  <el-row>
    <el-col :span="24" class="detailtit">
      <div class="detailback">
        <!-- <a href="">&lt;回到所有班级</a> -->
        <router-link to="/tea3">回到所有班级 </router-link>
      </div>
      <div class="detailselsct"> 
        <select v-model="selected">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </el-col>    
</el-row>
<el-row>
  <el-col :span="24"><div class="detailstabs">    
     <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="课程目录" name="first">
        <!-- 课程目录 -->
      <Catalog>
        <!-- 页面添加课程，删除课程，更改课程，分配任务 -->
        </Catalog> 
      </el-tab-pane>
      <el-tab-pane label="任务条" name="second">
        <Task>
          <!-- 查看任务条 -->
        </Task>
      </el-tab-pane> 
      <el-tab-pane label="班级学生" name="fourth">
        <Roster></Roster>
      </el-tab-pane>
       <el-tab-pane label="设置" name="fiveth">
         <Optimised>
           
         </Optimised>
      </el-tab-pane></el-tabs></div>
  </el-col>    
</el-row>

</div>
  
</template>
<script>
import Catalog from '@/components/ClassList/Catalog'
import Task from '@/components/ClassList/task'
import Roster from '@/components/ClassList/roster'
import Optimised from '@/components/ClassList/optimised'
export default {
  //   props: {
  //   activeName: {
  //     default: 'first'
  //   }
  // },
   data() {
     return{
       activeName:'first',
        selected: 'A',
        options: [
          { text: '九年(7)班', value: 'A' },
          { text: '二年级', value: 'B' },
          { text: '三年级', value: 'C' }
        ],        
     }    
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
     components: {      
       Catalog,
       Task,  
       Roster,
       Optimised,
     
    }


  
}
</script>
<style  scoped>
.detailtit{    font-family: inherit !important;
    font-size: 23px !important;
    font-weight: bold !important;
    line-height:47px !important;
    background: #0a2a66 !important;
    color: #FFFFFF !important;
        /* max-width: 1200px !important; */
    margin: 0 auto !important;
    box-sizing: border-box !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    height: 94px !important;
    text-align: left;}
.detailback{margin-top: 18px;}
.detailback a{cursor: pointer !important;
    text-decoration: none !important;
    outline: none !important;
    color: rgba(255,255,255,0.64) !important;
}
.detailselsct{margin-top:-20px;}
.detailselsct select{border:none; background: #0a2a66;
    color: #fff;
    font-size: 17px;
    font-weight: bold;    outline: none; }

.detailselsct select option{
  background-color: #FAFAFA !important;color: #21242C !important;
}


</style>

