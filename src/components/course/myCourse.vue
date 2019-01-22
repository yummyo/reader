<template>
  <!-- 我的课程 -->
  <div >
    <Nav></Nav>
    <!-- 分类详情部分 -->
    <el-row>
      <el-col :span='18' :offset='3'>
        <div class="content">
          <div class="myCourse">
            <!-- 我的课程/全部课程 -->
            <div>我的课程列表</div>
            <div>
              <el-button type="text">创建课程<i class="el-icon-plus el-icon--right"></i></el-button>
            </div>
            <ul>
              <li v-for="(item,index) of courseList" :key="index">
                <el-button type="text">{{ item.text }}</el-button>
              </li>
            </ul>
          </div>
          <div class="">
            <div>
              <!-- 课件列表 -->
              <el-button type="text">创建课件</el-button>
              <div>
                <div v-for="(item,index) of myCourseDetailList" :key="index">
                  <el-button type="text">{{ item.text }}</el-button>
                </div>
              </div>
            </div>
            <!-- 课件详情 -->
            <div class="myCourseDetail">
              <!-- 课件名称 -->
              <div class="name">{{myCourseDetail.name}}</div>
              <!-- 课件图片 -->
              <div>
                <img :src="myCourseDetail.src" alt="">
              </div>
              <div>课件数：{{myCourseDetail.coursewareNum}}</div>
              <div>在学人数：{{myCourseDetail.peopleNum}}</div>
              <div>好评：{{myCourseDetail.peopleNum}}</div>
              <div>有效期：{{myCourseDetail.validity}}</div>
              <div>作者：{{myCourseDetail.author}}</div>
              <div>课程介绍：{{myCourseDetail.introduce}}</div>
              <div>创建时间：{{myCourseDetail.createTime}}</div>
              <div>修改时间：{{myCourseDetail.editTime}}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        courseList:[
          {'text':"数学的奥秘"},
          {'text':"数学的奥秘"},
          {'text':"数学的奥秘"},
        ],
        myCourseDetailList:[
          {'text':"计数",'id':'123'},
          {'text':"计数",'id':'123'},
          {'text':"计数",'id':'123'},
        ],
        myCourseDetail:{
          'name':"数数概念大集合",
          'coursewareNum':"2",
          'peopleNum':"1",
          'likeRatio':"50%",
          'validity':"2038-01-01",
          'author':"小明老师",
          'introduce':"数数这门课非常好学",
          'createTime':"2018年11月23日16:11:38",
          'editTime':"2018年11月23日16:11:46",
          'src':"/static/img/shushu.jpg",
        }
      }
    },
    created:function(){
    },
    methods:{
    },
    components:{
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.content 
  display flex
  .myCourse
    width 500px
    >:first-child
      font-size 1.3rem
      font-weight bold
    ul
      text-align left
  .myCourse+div
    flex-grow 1
    text-align left
  .myCourseDetail
    .name
      font-size 1.4rem
      font-weight bold
</style>
