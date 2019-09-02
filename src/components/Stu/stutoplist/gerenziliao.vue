<template>
<!-- 学生端个人资料 -->
<div class="task"> 
<h1 style="margin-bottom:20px;">学生端个人资料</h1>
<div class="gerenform">
<el-form ref="form" :model="form" label-width="150px">

<el-col :span="11">
      <el-form-item label="邮箱">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
</el-col>

<el-col :span="11">
  <el-form-item label="昵称">
  <el-input v-model="form.name"></el-input>
  </el-form-item>
</el-col>


<!-- <el-col :span="11">
      <el-form-item label="所属机构">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
</el-col> -->

<el-col :span="11">
  <el-form-item label="姓名">
  <el-input v-model="form.name"></el-input>
  </el-form-item>
</el-col>
<el-col :span="11">
  <el-form-item label="注册日期">
  <el-input v-model="form.name"></el-input>
  </el-form-item>
</el-col>
<el-col :span="11">
  <el-form-item label="性别" class="grsex">
    <el-select   v-model="selected" placeholder="">
      <el-option label="请选择" value="shanghai" disabled="true"></el-option>
      <el-option label="女" value="shanghai" selected></el-option>
      <el-option label="男" value="beijing"></el-option>
    </el-select>
  </el-form-item>
</el-col>
<!-- <el-col :span="11">
  <el-form-item label="加入机构日期">
  <el-input v-model="form.name"></el-input>
  </el-form-item>
</el-col> -->
<el-col :span="11">
  <el-form-item label="地址">
  <el-input v-model="form.name"></el-input>
  </el-form-item>
</el-col>

<el-col :span="11">
  <el-button type="primary">解绑微信</el-button>
</el-col>

<el-col :span="11">
  <el-form-item label="电话">
  <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="" class="photip">
  <el-input placeholder="不可不填写" v-model="input4">
    <template slot="append">.获取验证码</template>
  </el-input>
  </el-form-item>
</el-col>


<!-- <el-col :span="22">
  <el-form-item label="身份证" class="idcard">
    <el-button type="primary" size="small">上传身份证</el-button>
     <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>   
  </el-form-item>
</el-col> -->


<!-- <el-col :span="22">
  <el-form-item label="资历" class="idcard">
   <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :file-list="fileList2"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  </el-form-item>
</el-col> -->


<el-col :span="22" style="margin-top:40px;">
  <!-- <el-form-item label="简介">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item> -->
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-col>
</el-form>
</div>

</div>
</template>
<script>
  export default {
    data() {
      return {
        selected: '女',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style scoped>
.task{min-height: 700px;}


</style>
