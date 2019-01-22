<template>
  <div>
    <el-button type='text' @click="addCourse">添加课程</el-button>
   <div  class="courseList">
      <div v-if='courseData.length > 0'> 
        <div  v-for="(item,index) of courseData" :key="index">123</div>
      </div>
      <div class="hintInfo text-center" v-else>暂无课程</div>
   </div>
    <div>
      <el-select v-model="courseVal" placeholder="请选择课程">
        <el-option label="语文" :value="0"></el-option>
        <el-option label="数学" :value="1"></el-option>
        <el-option label="英语" :value="2"></el-option>
      </el-select>
    </div>
    <!-- 添加课程列表 -->
    <el-dialog
      title="选择课程"
      :visible.sync="addCourseVisible">
      <el-input placeholder="请输入课程名称查询" v-model="searchCourseVal" class="input-with-select">
        <el-button slot="append" @click='searchCourseFun' icon="el-icon-search"></el-button>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCourseVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCourseVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      courseData: [],
      addCourseVisible: false,
      searchCourseVal: '',
      courseVal: ''
    }
  },
  methods:{
    addCourse(){
      this.addCourseVisible = true

    },
    searchCourseFun(){
      // 根据输入的值查询课程信息
      console.log(this.searchCourseVal)
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus"> 
  .courseList
    border-top 1px solid #ddd
    border-bottom 1px solid #ddd
    .hintInfo
      line-height 4rem
      font-weight bold
</style>
