<template>
  <div class="classRoom">
    <div class="text-left">
      <span>您的所有班级</span>
      <el-button type="primary" @click="addClassRoom" icon="el-icon-plus">添加新班级</el-button>
    </div>
    <ul>
      <li v-for="(item,index) of classRoomData" :key="index" class="" @click="toDetail(item)">
        <div>
          <img :src="item.src" alt="">
        </div>
        <div style="cursor:pointer"> 
          <div class="className">{{ item.name}} </div>
          <div class="classSynopsis">{{ item.synopsis}} </div>
        </div>
      </li>
    </ul>
    <el-dialog
      :visible.sync="classRoomVisible"
      title="添加班级"
      width="30%">
      <el-form ref="form" :model="addForm" label-width="80px">
        <el-form-item label="班级名称">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="classRoomVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitRoom">立即创建</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      classRoomVisible: false,
      classRoomData:[
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
        {'name':'初二（1）班','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','synopsis':"这是初中二班"},
      ],
      addForm:{
      }
    }
  },
  methods:{
    addClassRoom(){
      console.log(this.classRoomVisible)
      this.classRoomVisible = true
    },
    submitRoom(){

    },
    // 去课程详情页面
    toDetail(item){
      this.$router.push({
        path:'/index/classRoomDetail'
      })
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
