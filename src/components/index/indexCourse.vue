<template>
  <!-- 主页的课程列表 -->
  <div class="indexCourse">
    <!-- 下侧课程模块 -->
    <el-row>
      <el-col :span='18' :offset='3'>
        <el-tabs v-model="activeName">
          <el-tab-pane label="知识列表" name="listKnowledge">
            <!-- 上边课程列表 -->
            <Nav></Nav>
            <div class="courseModule">
              <div v-for="(item,index) in listData" :key="index">
                <!-- 课程 -->
                <div class="courseName">
                  <img :src="item.src" alt="">
                  <span>{{item.label}}</span>
                </div>
                <!-- 课件 -->
                <ul>
                  <li v-for="(value,index) in item.child" :key="index">
                    <a href="" @click.prevent="toCourseDetail()">{{ value.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane v-if="userData.type == 'teacher'" label="班级" name="classroom">
            <classroom></classroom>
          </el-tab-pane>
          <el-tab-pane v-if="userData.type == 'teacher'" label="全部学生" name="students">
             <student></student>
          </el-tab-pane>
          <el-tab-pane v-if="userData.type == 'teacher'" label="题库" name="question">题库</el-tab-pane>
          <el-tab-pane v-if="userData.type == 'teacher'" label="问答" name="issue">
            <issue></issue>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Nav from '@/common/view/Nav'
import classroom from '../classRoom'
import student from './tabModule/student'
import issue from './tabModule/issue'

export default {
  name: 'indexCourse',
  data () {
    return {
      activeName: 'listKnowledge',
      userData: {'type':"teacher"}
    }
  },
  computed:{
    // 拿到vuex中的模拟数据
    ...mapGetters({
      listData:'courseData'
    })
  },
  methods:{
    // 课程跳转
    toCourseDetail : function(){
      this.$router.push({'path':"/index/categoryListings"})
    }
  },
  components:{
    Nav,classroom,student,issue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus"> 
  // 下方课程模块
  .courseModule
    a
      color #000
      &:hover
        text-decoration underline
    >div
      display flex
      justify-content center
      align-items center
      padding 1.5rem 0 2rem
      border-bottom 1px solid #ddd
      // 课程
      .courseName
        display flex
        align-items center
        width 25%
        padding-left 3rem
        img
          width 3rem
          height @width
          border-radius 50%
          margin-right 1rem
      // 课件详情
      ul
        flex-grow 1
        text-align left
        li
          display inline-block
          width 33%
          height 3rem
          line-height 3rem
</style>
