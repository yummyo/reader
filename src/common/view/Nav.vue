<template>
  <div class="nav">
    <!-- 用作导航部分 -->
    <el-row>
      <el-col :span='18' :offset='3'>
        <ul v-if="navType == 'courseList'" class="courseList">
          <li v-for="(item,index) in courseData" :key="index">
            {{ item.label }}
          </li>
        </ul>
        <div v-else>
          <ul class="Breadcrumb">
            <li v-for="(item,index) in navList" :key="index">
              {{item.length}}
              <span :class="{'link' : item.link}" v-on:click="item.link ? routerSkip(item.link) : ''"> {{ item['name'] }} </span>
              {{ item.link ? '>' : "" }}
            </li>
          </ul>
          <div class="nowNav">{{ navList[navList.length-1].name }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name : "Nav",
    data () {
      return {
        navType : 'courseList',
      }
    },
    mounted:function(){
      // 判断导航部分是显示面包屑还是课程列表
      if(this.$route.matched[1] && this.$route.matched[1]['path'] == '/index/indexCourse'){
        this.navType = 'courseList';
      }else{
        this.navType = 'Breadcrumb';
      }
    },
    methods:{
      // 路由跳转使用
      routerSkip : function(url){
        console.log(url)
        this.$router.push({
          'path':url
        })
      }
    },
    computed:{
      ...mapGetters(['courseData','navList'])
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"> 
  // 顶部课程列表
  .nav
    background #F6F7F7
    padding 1rem 0
    .courseList
      display flex
      li
        flex-grow 1
    // 面包屑导航样式
    .Breadcrumb
      text-align left 
      li
        display inline-block
        span 
          padding 0 1rem
          color #000
          &.link:hover
            text-decoration underline
            cursor pointer
    // 当前显示的页面
    .nowNav
      text-align left 
      font-size 2rem
      padding-left 1rem
</style>
  