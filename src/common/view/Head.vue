<template>
  <div class="head">
    <el-row>
      <el-col :span='18' :offset='3'>
        <div class="container">
          <el-row>
            <el-col :span='2'>
              <!-- 课程信息 后期改为自定义插件 -->
              <el-select placeholder="请选择" v-model='selectVal'>
                <el-option v-for="(item,index) in courseData" :key="index" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-col>
            <el-col :span='4'>
              <!-- 搜索框 -->
              <el-input placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>
            <el-col :span='12'>
              <!-- logo -->
              <div class="logo">
                <img src="@/assets/logo.png" alt="">
                <a href="">微演示</a>
              </div>
            </el-col>
            <el-col :span='6'>
              <!-- user -->
              <div :v-if="isLogin">
                <!-- 已登录 -->
                
              </div>
              <div :v-else='isLogin'>
              <!-- 未登录 -->
                <el-button type="text">捐款给</el-button>
                <el-button type="text">登录</el-button>
                <el-button type="text">注册</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name : "Head",
    data () {
      return {
        selectVal : '',
        courseData : [
          {'label':"数学",'value':"1"},
          {'label':"英语",'value':"2"},
          {'label':"政治",'value':"3"},
          {'label':"地理",'value':"4"}
        ],
        isLogin : false,
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"> 
// 头部
  .head
    background #066EE2
    color #fff
    &:hover
      background #ffffff
      color #066EE2
      a
        color #066EE2
    .container
      padding .5rem
    .logo
      height 40px
      line-height 40px
      img
        width 1rem
        height 1rem
</style>
  