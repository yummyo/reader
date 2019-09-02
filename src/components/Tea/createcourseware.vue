<template>
  <div class="courseware">
     

<!-- Form -->
<el-button type="text"  @click="dialogFormVisible = true">创建课件<i class="el-icon-circle-plus-outline"></i></el-button>

<el-dialog title="创建课件" :visible.sync="dialogFormVisible">

  <el-form ref="form" :model="form" label-width="80px">

  <el-form-item label="上传文件">
    <el-upload    class="upload-demo"    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"    :on-remove="handleRemove"
    :before-remove="beforeRemove"    multiple    :limit="3"
    :on-exceed="handleExceed"    :file-list="fileList">
    <el-button >上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <div slot="tip" class="el-upload__tip" style="color:#F56C6C">提示：目前仅支持上传ppt,pptx类型的文件，如需上传pdf类型的</div>
  </el-upload>
  </el-form-item>

 

    <el-form-item label="附件">
    <el-upload    class="upload-demo"    action=""    :on-preview="handlePreview"    :on-remove="handleRemove"
    :before-remove="beforeRemove"    multiple    :limit="3"    :on-exceed="handleExceed"    :file-list="fileList">
    <el-button style="background:#F2F6FC">请选择附件</el-button>

    
  </el-upload>
  </el-form-item>
  <el-form-item label="名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="课件所属">
    <el-select v-model="form.region" placeholder="个人">
      <el-option label="机构" value="shanghai"></el-option>
      <el-option label="个人" value="beijing"></el-option>
    </el-select>
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
.courseware{text-align: left;background: #fff;}

</style>

  
    
   
 