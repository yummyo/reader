<template>
  <div class="foot">
    <el-row>
        <el-col :span='18' :offset='3'>
         <div class="container">
           <!-- 版权声明部分 -->
           <div>
            <hr>
            <div class="lra" style="margin-bottom: 1em;text-align: center;line-height: 28px;font-size: 16px;">
              <a href="aboutus.php">关于我们</a> | <a href="help.php">使用帮助</a> | <a href="index_enterprise.php">企业服务</a> | <a href="feedback.php">意见反馈</a> | <a href="http://www.pptlook.com">阅课网</a>
            </div>
            <p style="text-align: center;margin-bottom: 20px;">©  2010-2018
              <a href="/index.php">Whytouch</a> <span>技术支持: contact@whytouch.com</span>
            </p>
            <p style="text-align: center;">
              <a href="http://www.miitbeian.gov.cn/" style="margin-left:50px;">沪ICP备09058519号</a>
            </p>
          </div>
         </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
  export default {
    name : "Foot",
    data () {
      return {
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"> 
  // 尾部
  .foot
    background #0A2A66
    color #fff
</style>
  