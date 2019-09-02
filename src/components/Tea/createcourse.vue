<template>
  <div class="add">
     

<!-- Form -->
<el-button type="text"  @click="dialogFormVisible = true">创建课程<i class="el-icon-circle-plus-outline"></i></el-button>

<el-dialog title="创建课程" :visible.sync="dialogFormVisible">
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="课程名：">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="封面：">
    <el-upload    class="upload-demo"    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"    :on-remove="handleRemove"
    :before-remove="beforeRemove"    multiple    :limit="3"
    :on-exceed="handleExceed"    :file-list="fileList">
    <el-button >上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <div slot="tip" class="el-upload__tip" style="color:#F56C6C">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
  </el-form-item>
  <el-form-item label="课程分类">
    <el-select v-model="form.region" placeholder="请选择分类">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>

  <!-- <el-form-item label="购买方式">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="整体购买" name="type"></el-checkbox>
      <el-checkbox label="单节购买" name="type"></el-checkbox> 
    </el-checkbox-group>
  </el-form-item> -->
  <el-form-item label="微信分享摘要(限35字)：">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
</el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
  

  </div>
  
</template>
<script>
  export default {
    data() {
      return { 
        
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },

     methods: {
      onSubmit() {
        console.log('submit!');
      }
    },

  }

</script>
<style scoped>

</style>

  
    
   
 