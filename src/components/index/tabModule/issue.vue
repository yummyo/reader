<template>
  <!-- 问答列表 -->
  <div>
    <!-- 标题 -->
    <div class="text-left pageTitle">
      <span class="studentTitle">评价与问答列表</span>
    </div>
    <!-- 问答列表 -->
    <div>
      <!-- 筛选条件 -->
      <div class="condition">
        <span>回复状态：</span>
        <el-input placeholder="请输入内容" v-model="condition.content" class="input-with-select">
          <el-select v-model="condition.selectVal" slot="prepend" placeholder="请选择" class="input-select">
            <el-option label='全部' value='0'></el-option>
            <el-option label='已回复' value='1'></el-option>
            <el-option label='未回复' value='2'></el-option>
          </el-select>
          <el-button slot="append" type="primary">搜索</el-button>
        </el-input>
      </div>
      <div class="issueList" v-for="(item,index) of issueListData" :key="index">
        <div>
          <img :src="item.user.src" alt="">
        </div>
        <div>
          <!-- 右侧评论信息 -->
          <div class="rightInfo"> 
            <div class="issueTitle">
              问题：<span>{{item.title}}</span>
            </div>
            <div>
              <span class="issueTime">{{item.time}}</span>
              <span class="courseName">课程名称：<span>{{item.courseName}}</span></span>
              <el-button type="primary" size='mini'>搜索</el-button>
              <label for="">
                <input type="checkbox" >精选
              </label>
            </div>
          </div>
          <!-- 回复列表 -->
          <div v-if="item.reply"> 
            <div class="reply">
              <span>老师回复：</span>
              <span>{{item.reply.content}}</span>
            </div>
            <div class="text-right">2018年11月23日13:21:44</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      condition:{
        selectVal : '0',
        content: ""
      },
      checked: true,
      issueListData : [
        {
          'title':"这个课程号码？",
          'time':'2018-10-08 16:54',
          'courseName':'加减',
          'user':{
            'id':'123',
            'src':'/static/img/people.jpg',
          },
          'reply':{
            'content':"Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下",
            'time':'2018年11月23日13:24:20'
          }
        },
        {
          'title':"这个课程号码？",
          'time':'2018-10-08 16:54',
          'courseName':'加减',
          'user':{
            'id':'123',
            'src':'/static/img/people.jpg',
          },
          'reply':{
            'content':"Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下",
            'time':'2018年11月23日13:24:20'
          }
        },
        {
          'title':"这个课程号码？",
          'time':'2018-10-08 16:54',
          'courseName':'加减',
          'user':{
            'id':'123',
            'src':'/static/img/people.jpg',
          },
          'reply':{
            'content':"Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下",
            'time':'2018年11月23日13:24:20'
          }
        },
        {
          'title':"这个课程号码？",
          'time':'2018-10-08 16:54',
          'courseName':'加减',
          'user':{
            'id':'123',
            'src':'/static/img/people.jpg',
          },
          'reply':{
            'content':"Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下",
            'time':'2018年11月23日13:24:20'
          }
        },
      ]
    }
  },
  components:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="stylus" rel="stylesheet/stylus"> 
  .condition
    display flex
    align-items center
  .issueList
    display flex
    padding 1rem
    text-align left 
    >:last-child
      margin-left 1rem
    img
      width 5rem 
      height 5rem
    .rightInfo
      height 5rem
      display flex
      flex-direction column
      justify-content space-around
      .issueTitle
        font-size 1.2rem
        font-weight bold
      .courseName
        margin-left 1rem
        span
          color rgb(102, 102, 204)
          cursor pointer
    .rightInfo+div
      background #F8F8F8
      padding 1rem
    .reply
      display flex
      >:first-child
        white-space nowrap
      
  .input-select
    width 130px
  .input-with-select
    width 500px
  .pageTitle
    border-bottom 1px solid #ddd
    padding 1rem
    margin-bottom 1rem
</style>
