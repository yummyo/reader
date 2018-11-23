<template>
  <!-- 评论 -->
  <div class="comment" v-if="commentData.length > 0">
    <div v-for="(item,index) of commentData" :key="index">
      <!-- 头像 -->
      <div class="userPortrait">
        <img :src="item.src" alt="">
      </div>
      <!-- 评论信息 -->
      <div class="rightInfo">
        <div>
          <div class="userName">{{ item.name }}</div>
          <div class="userContent">{{ item.content }}</div>
          <div class="baseData">
            <span class="time">{{ item.time }}</span>
            <span class="like">
              <i class="iconfont icon-dianzan1"></i>
              {{ item.like }}
              </span>
            <span class="reply" @click="reply(item)">回复</span>
          </div>
        </div>
        <comment v-if="item.child" :commentData='item.child'></comment>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'comment',
  props: ['commentData'],
  data () {
    return {
    }
  },
  created:function(){
  },
  methods: {
    reply(data) {
      console.log(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus"> 
  .comment
    text-align left 
    >div
      display flex
      .userPortrait 
        width 5rem
        height 5rem
        margin .5rem 2rem .5rem .5rem
        img
          width 100%
          height 100%
          border-radius 50%
      .rightInfo
        border-top 1px solid #ddd
        flex-grow 1
        // 右侧评论信息 要和左边的头像高度一致
        >:first-child
          height (5rem + .5rem*2)
          display flex
          flex-direction column
          justify-content space-around
        .userName 
          color #fb7299
          cursor pointer
        .baseData
          color #ddd
          .reply
            cursor pointer
            color #8d8de5
</style>
