<template>
  <div>
    <div class="text-left">
      <span class="studentTitle">您的所有学生</span>
      <el-button type="primary"  icon="el-icon-plus">添加新班级</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
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
  .studentTitle
    font-size 1.4rem
    font-weight bold
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
