<template>
  <div class="index">
    <!-- 头部信息 -->
    <Head></Head>
    <!-- 主体部分 -->
    <div class="main">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <!-- 页脚部分 -->
    <Foot></Foot>
  </div>
</template>

<script>
import Head from '@/common/view/Head'
import Foot from '@/common/view/Foot'

export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
    Head,Foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus"> 
</style>
