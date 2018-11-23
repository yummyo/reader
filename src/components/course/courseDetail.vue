<template>
  <!-- 课件详情 -->
  <div class="courseDetail">
    <!-- 上边视频部分 -->
    <div class="videoModule">
      <el-row>
        <el-col :span="4">
          <div class="videoModule_list">
            <div style="height: 300px;">
              <el-steps direction="vertical" process-status='wait' :active="1">
                <el-step title="步骤 1" icon="el-icon-edit"></el-step>
                <el-step title="步骤 2" icon="el-icon-edit"></el-step>
                <el-step title="步骤 3" icon="el-icon-edit" description="这是一段很长很长很长的描述性文字"></el-step>
              </el-steps>
            </div>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="videoModule_video">
            <div>
              <iframe src="http://yueke.pptlook.com/ppt/52763a636b17ec21ea83940d39ac891e/index.php?cid=137" frameborder="0"></iframe>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 课件简介 -->
    <div class="courseSynopsis">
      <!-- 课件标题 -->
      <h2>{{ courseSynopsis.title }}</h2>
      <!-- 课件基础信息 -->
      <div class="baseData">
        <span>{{courseSynopsis.playTimes}}次播放</span>
        <span>{{courseSynopsis.like}}人点赞</span>
        <span>{{courseSynopsis.time}}</span>
      </div>
      <!-- 教师信息 -->
      <div class="teacherInfo" v-if="courseSynopsis.user">
        <!-- 头像 -->
        <div>
          <img :src="courseSynopsis.user.headPortrait" alt="">
        </div>
        <div>
          <div class="teacherName">{{ courseSynopsis.user.name }}</div>
          <div class="teacherIntroduce">{{ courseSynopsis.user.peopleIntroduce }}</div>
        </div>
      </div>
      <!-- 评分 -->
      <div> 
        <el-rate
          v-model="rateVal"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
      </div>
    </div>
    <!-- 评论 -->
    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="评论管理" name="first">
          <!-- 回复 -->
          <div class="userReply">
            <div v-if="!userData" class="isLogin">
              <!-- 已登录时候发表评论 -->
              <el-row :gutter='21'>
                <el-col :span="4">
                  <img src="http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg" alt="">
                </el-col>
                <el-col :span="15">
                  <el-input
                  type="textarea"
                  :autosize='{minRows: 3, maxRows: 6}'
                  class="commentBox"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="userReplyData">
                </el-input>
                </el-col>
                <el-col :span='2'>
                  <el-button type="primary" class="commitSubmit">发表</el-button>
                </el-col>
              </el-row>
            </div>
            <div v-else class="noLogin">
              <!-- 未登录时提示信息 -->
                <p>请先
                  <el-button type="primary" @click="Login">登录</el-button>
                  先后发表评论 (・ω・)</p>
            </div>
          </div>
          <!-- 评论展示 -->
          <Comment :commentData='commentData'></Comment>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Comment from './comment/index'
export default {
  name: 'courseDetail',
  data () {
    return {
      courseData : [],
      courseSynopsis: {
        'title':"沪科版八年级物理",
        'time':"2017-08-13 14:54:59",
        'playTimes':"20000",
        'like':"571",
        'user':{
          'name':"糖豆老师",
          'peopleIntroduce':"一线资深教师，7年物理教学经验，中高考辅导专家。培养学生多人物理竞赛获奖。授课风格轻松幽默，注重知识的系统性和联系性",
          'headPortrait':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg'
        }
      },
      rateVal:null,
      activeName: 'first',
      commentData:[
        {'name':'李老师','content':"这个课件怎么样？",'time':'2018年11月22日10:20:09','like':'999','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','child':[
          {'name':'王老师','content':"非常好！",'time':'2018年11月22日10:20:09','like':'999','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg'}
        ]},
        {'name':'李老师','content':"课件流量大吗？",'time':'2018年11月22日10:20:09','like':'999','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','child':[
          {'name':'张老师','content':"很小的，只要0.4M！",'time':'2018年11月22日10:20:09','like':'999','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg'}
        ]},
        {'name':'李老师','content':"适合小孩子嘛？",'time':'2018年11月22日10:20:09','like':'999','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','child':[
          {'name':'岳老师','content':"非常适合呢！",'time':'2018年11月22日10:20:09','like':'999','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg'}
        ]},
        {'name':'李老师','content':"测试评论",'time':'2018年11月22日10:20:09','like':'999','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg','child':[
          {'name':'任老师','content':"测试评论",'time':'2018年11月22日10:20:09','like':'999','src':'http://iconfont.alicdn.com/t/1534822793431.jpg@100h_100w.jpg'}
        ]},
      ],
      userReplyData : '',
      userData: {},
      currentPage4: 4
    }
  },
  created:function(){
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    Login() {

    }
  },
  components:{
    Comment
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus"> 
.courseDetail
  padding 0 1rem
  .videoModule_video
    >div
      background #000
      height 500px
      iframe 
        width 50%
        height 100%
  // 课程简介
  .courseSynopsis
    text-align left 
    h2
      margin 0
      padding 0
    .baseData
      font-size .8rem
      color #ddd
      // 教师信息
    .teacherInfo
      display flex
      align-items center
      img
        width 5rem
        height 5rem
        border-radius 50%
        margin-right 1rem
      .teacherName
        color red
        font-size 1.2rem
      .teacherIntroduce
        font-size .8rem
  .userReply
    img
      height 7rem
    .commentBox 
      textarea
        height 7rem
    .commitSubmit
      width 100%
      height 7rem
    .noLogin
      background #e5e9ef
      height 7rem
      line-height 7rem
</style>
