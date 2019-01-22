<template>
  <div>
    <!-- 我的学习 -->
    <div class="title">
      我的学习
    </div>
    <div class="courseList">
      <div v-for="(item,index) of courseList" :key="index">
        <img src="https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-128c.png" alt="">
        <div> 
          数字的加减
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      courseList: [
        {},
        {},
        {},
        {},
        {},
      ]
    }
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
  .title
    background #F6F7F7
    line-height 4rem
    font-weight bold
  .courseList
    >div
      display inline-block
      margin 0 1rem
      img
        width 16rem
        height 10rem
</style>
