<template>
  <div>
    <div class="text-left">
      <span>您的所有班级</span>
      <el-button type="primary"  icon="el-icon-plus">添加新班级</el-button>
    </div>
    <ul>
      <li v-for="(item,index) of classRoomData" :key="index" class="">
        <div>
          <img :src="item.src" alt="">
        </div>
        <div> 
          <div class="className">{{ item.name}} </div>
          <div class="classSynopsis">{{ item.synopsis}} </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      classRoomData:[
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
      ]
    }
  },
  components:{
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
