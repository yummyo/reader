<template>
  <div>
    <div class="text-left">
      <span class="studentTitle">您的所有学生</span>
      <el-button class="fl-right" type="primary" @click="addVisible = true" icon="el-icon-plus">添加学生</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="学生姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="class"
        label="班级"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <!-- 添加框 -->
    <el-dialog
      title="添加学生"
      :visible.sync="addVisible">
      <span>邮件添加，二维码分享</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tableData:[
        {'name':'王小虎','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','class':"初中二班",'address':"上海浦东新区民航路"},
        {'name':'王小虎','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','class':"初中二班",'address':"上海浦东新区民航路"},
        {'name':'王小虎','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','class':"初中二班",'address':"上海浦东新区民航路"},
        {'name':'王小虎','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','class':"初中二班",'address':"上海浦东新区民航路"},
        {'name':'王小虎','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','class':"初中二班",'address':"上海浦东新区民航路"},
        {'name':'王小虎','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','class':"初中二班",'address':"上海浦东新区民航路"}
      ],
      addVisible: false
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
