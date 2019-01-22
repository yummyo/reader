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
              <div class="headitem logo">
                <img src="@/assets/logo.png" alt="">
                <a href="">微演示</a>
              </div>
            </el-col>
            <el-col :span='6'>
              <!-- user -->
              <div class="headitem userInfo" v-if="!isLogin">
                <!-- 已登录 -->
                <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                    测试账号<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="myClass">我的班级</el-dropdown-item>
                    <el-dropdown-item command="userCenter">个人资料</el-dropdown-item>
                    <el-dropdown-item command="myStudy">我的学习</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="headitem" v-else>
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
    methods:{
      handleCommand(command){
        console.log(command)
        // switch(command){
        //   case 'myClass':
        //   // 我的班级
        //   this.$route.push({
        //     'path':''
        //   })
        //   break;
        //   case 'userCenter':
        //   // 个人资料
        //   break;
        //   case 'myStudy':
        //   // 我的学习
        //   break;
        // }
        console.log(this.$router)
        this.$router.push({
          'path':'/index/'+command
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"> 
  .el-dropdown-link
    color #fff
// 头部
  .head
    background #066EE2
    color #fff
    &:hover
      background #ffffff
      color #066EE2
      a,.el-dropdown-link
        color #066EE2
        cursor pointer
    .container
      padding .5rem
    .headitem
      height $head-height
      line-height $head-height
      text-align center
    // 右侧用户信息
    .userInfo
      
    .logo
      img
        width 1rem
        height 1rem
</style>
  