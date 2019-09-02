<template>
<!-- 添加课程到目录中，是班级意见创建好，点添加出现的，弹窗 -->
   <div class="createaddcourse">
     <!-- 1.标语 -->
<!-- <h3 class="">为您的班级添加学习科目。</h3> -->
<!-- 2.搜索框 -->
<div style="margin-top: 15px;">
  <el-input placeholder="请输入课程名：数学" >
     <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div> 
<div style="margin-top:20px;"></div>
<!-- 3.搜索表现  -->
<div>
 
    <el-collapse >     
     <el-collapse-item>
      <template slot="title">
          <i class="el-icon-delete" style="color:red;font-size:16px;">&nbsp;</i>&nbsp;早期的数学
      </template>
      <ul>
        <li>课件1</li>
        <li>课件1</li>
        <li>课件1</li>

      </ul>
    </el-collapse-item>

    <el-collapse-item >
      <template slot="title">
         <i class="el-icon-delete" style="color:red;font-size:16px;">&nbsp;</i>&nbsp;算数
      </template>
      <ul>
        <li>加减</li>
        <li>乘除</li>
        <li>负数</li>
        <li>小数点</li>
      </ul>
    </el-collapse-item>


        <el-collapse-item>
      <template slot="title">
          <el-checkbox >&nbsp;</el-checkbox></i>数学结果3
      </template>
      <ul>
        <li>课件1</li>
        <li>课件1</li>
        <li>课件1</li>

      </ul>
    </el-collapse-item>

    <el-collapse-item >
      <template slot="title">
        <el-checkbox >&nbsp;</el-checkbox>数学结果4
      </template>
      <ul>
        <li>加减</li>
        <li>乘除</li>
        <li>负数</li>
        <li>小数点</li>
      </ul>
    </el-collapse-item>


 
    </el-collapse>
 
</div>




   </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

.createaddcourse{text-align: left;}
</style>
