<template>
  <!-- 全部课程 -->
  <div class="courseList">
    <Nav></Nav>
    <!-- 课程 详情部分 -->
    <el-row>
      <el-col :span='16' :offset='3'>
        <div class="courseContent">
          <div v-for="(item,index) in courseData" :key="index"  @click="courseDetail"> 
            <el-card 
            shadow="hover">
              <!-- 预览图 -->
              <div class="preview" >
                <!-- <div class="menu">
                  <span class="my">我的课程</span>
                  <span class="all">全部课程</span>
                </div> -->
                <img v-lazy="item.img" alt="">
              </div>
              <!-- 标题 -->
              <p> {{ item.title }}</p>
              <!-- 点赞 阅读 和评论 -->
              <div class="tobar">
                <span>
                  <i class="iconfont icon-dianzan1"></i>
                  999
                </span>
                <span>
                  <i class="iconfont icon-yueduliang"></i>
                  999
                </span>
                <span>
                  <i class="iconfont icon-xie"></i>
                  999
                </span>
              </div>
            </el-card>
          </div>
        </div>
      </el-col>
      <el-col :offset='1' :span='3'>
        <div class="recommend">
          <!-- 推荐课程标题 和 刷新按钮 -->
          <div class="recommendTitle">
            <span>推荐课程</span>
            <el-button class="refresh" plain size="mini" :loading="false">
              <i class="iconfont icon-shuaxin"></i>
              换一换
              </el-button>
          </div>
         <div ref="wrapper">
            <ul>
              <li v-for="(item,index) in courseData" :key="index">
                <div>
                  <!-- 推荐缩略图 -->
                  <img v-lazy="item.img" alt="">
                </div>
                <div class="info">
                  <!-- 标题 -->
                  <p>{{ item.title }}</p>
                  <!-- 观看量 -->
                  <div>
                    <i class="iconfont icon-dianzan1"></i>
                  999
                  </div>
                </div>
              </li>
            </ul>
         </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Nav from '@/common/view/Nav'
import {getCourseList} from '@/api/articleList'
import Bscroll from 'better-scroll'

export default {
  name: 'courseContent',
  data () {
    return {
      courseData : [],

    }
  },
  created:function(){
    getCourseList().then(res=>{
      console.log(res)
      this.courseData = res.data;
       this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new Bscroll(this.$refs.wrapper, {})
            console.log(this.scroll)
            this.scroll.on('touchEnd', (pos) => {
              // 下拉动作
              if (pos.y > 50) {
                console.log("下拉刷新")
              }
              // 滚动到底部
          
            })
          } else {
            this.scroll.refresh()
          }
        })
    })
   
  },
  methods:{
    courseDetail(){
      // 课件详情
      this.$router.push({
        'path':"/index/courseDetail",
        "params":{
          'id':'123'
        }
      })
    }
  },
  components:{
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus"> 
  // 分类列表
  .courseContent
    display flex
    flex-wrap wrap
    >div
      width 25%
      padding .5rem
      box-sizing border-box
      // 缩略图
      .preview
        position relative
        cursor pointer
        .menu
          position absolute
          top 0 
          right 0
          display none
          span 
            display block
            padding .1rem .2rem
            background green
            margin-bottom 10px
            cursor pointer
            color #fff
        &:hover
          .menu
            display inline-block
        img
         previewSize()
      // 文章标题
      p
        cursor pointer
      // 底部 点赞 阅读 和评论
      .tobar
        display flex
        justify-content space-around
  // 右侧推荐
  .recommend
    .recommendTitle
      overflow hidden
      display flex
      justify-content space-between
      span
        float left
        font-size 1.5rem
        font-weight bold
      .refresh
        float right
    ul
      li
        display flex
        img
          width 4rem
          height @width
        .info
          text-align left
          display flex
          flex-direction column
          justify-content space-between
          
          p
            font-size .4rem
</style>
