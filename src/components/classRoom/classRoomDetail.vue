<template>
  <div class="classRoom">
    <Nav></Nav>
    <el-row>
      <el-col :span='18' :offset='3'>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="课程目录" name="catalogue">
            <catalogue></catalogue>
          </el-tab-pane>
          <el-tab-pane label="任务条" name="taskView">
            <taskView></taskView>
          </el-tab-pane>
          <el-tab-pane label="班级学生" name="student">
            <student></student>
          </el-tab-pane>
          <el-tab-pane label="设置" name="setting">
            <setting></setting>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Nav from '@/common/view/Nav'
import catalogue from './classItemList/catalogue'
import taskView from './classItemList/taskView'
import student from './classItemList/student'
import setting from './classItemList/setting'
export default {
  data () {
    return {
      activeName:'catalogue'
    }
  },
  methods:{
    handleClick(){

    }
  },
  components:{
    Nav,catalogue,taskView,student,setting
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus"> 
  ul
    li
      border-top 1px solid #dddddd
      padding 1rem
      display flex
      >:first-child 
        img
          border-radius 10px
          margin-right 1rem
      >:last-child
        display flex
        flex-direction column
        justify-content space-around
        .className
          font-weight bold
          font-size 1.2rem
</style>
