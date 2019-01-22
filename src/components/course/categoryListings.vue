<template>
  <!-- 分类详情 -->
  <div class="categoryListings">
    <Nav></Nav>
    <!-- 分类详情部分 -->
    <el-row>
      <el-col :span='18' :offset='3'>
        <div class="categoryContent">
          <div v-for="(item,index) in courseData" :key="index"> 
            <!-- 预览图 -->
            <div class="preview">
              <div class="menu">
                <span class="my" @click="toCourseware(1)">我的课程</span>
                <span class="all" @click="toCourseware(2)">全部课程</span>
              </div>
              <img v-lazy="item.img" alt="">
            </div>
            <!-- 标题 -->
            <p @click="toAllCourse"> {{ item.title }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Nav from '@/common/view/Nav'
import {getCategoryList} from '@/api/articleList'

export default {
  name: 'courseContent',
  data () {
    return {
      courseData : []
    }
  },
  created:function(){
    getCategoryList().then(res=>{
      this.courseData = res.data;
    })
  },
  methods:{
    // 全部课程
    toAllCourse:function(id){
      this.$router.push({
        'path':"/index/categoryListings",
        "params":{
          'id':id
        }
      })
    },
    toCourseware:function(type,id){
      if(type == 1){
        this.$router.push({
          'path':"/index/myCourse",
          "query":{
            'id':id,
            'type': 'all'
          }
        })
      }else{
        this.$router.push({
          'path':"/index/courseList",
          "query":{
            'id':id,
            'type': 'all'
          }
        })
      }
      
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
  .categoryContent 
    display flex
    flex-wrap wrap
    >div
      width 25%
      padding 1rem
      box-sizing border-box
      // 缩略图
      .preview
        position relative
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
        padding .5rem 0
        text-align left
        font-weight bold
      // 底部 点赞 阅读 和评论
      .tobar
        display flex
        justify-content space-around
</style>
