<template>
  <div>
    <!-- 我的班级 -->
    <div>
      <div class="classRoomInfo">九年级07班，共35人</div>
      <div class="userInfo">张小二</div>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="imgSrc"
        label="头像">
        <template slot-scope="scope">
          <img class="headImg" :src="scope.row.imgSrc" alt="">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tableData:[
        {
          'name':"张晓一",
          'imgSrc':'//iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg',
          'phone':'15188390711'
        },
        {
          'name':"张晓一",
          'imgSrc':'//iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg',
          'phone':'15188390711'
        },
        {
          'name':"张晓一",
          'imgSrc':'//iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg',
          'phone':'15188390711'
        },
        {
          'name':"张晓一",
          'imgSrc':'//iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg',
          'phone':'15188390711'
        },
        {
          'name':"张晓一",
          'imgSrc':'//iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg',
          'phone':'15188390711'
        },
      ]
    }
  },
  methods:{
    fun(item){
      console.log(item.row.imgSrc)

    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .headImg
    width 3rem 
    height 3rem
    border-radius 50%
</style>
