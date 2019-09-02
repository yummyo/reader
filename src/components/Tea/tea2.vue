<template>
  <div class="">
    <el-row>
      <el-col :span="24">
        <div class="hnamebox">
            <div class="hname1">数学>早期的数学>数数>我的数数</div>
            <h1 class="hname2">我的数数</h1>
        </div>       
      </el-col>
      <el-col :span="24">
        <div class="hcontentbox">
          <el-col :span="8" style="height:inherit">
            <div class="hcontent1">
              <h3 style="">我的课程列表  </h3>          
                <!-- from button components-->
                <createcourse> </createcourse>            
            
              <ul>   
                <li><a href="" style="color:red;">数数的奥秘</a>
                <p style="background:#FF7373;">修改 删除 发布 排序</p></li>           
                <li><a href="#">加法和减法介绍</a>
                <p style="background:#FF7373;">修改 删除 发布 排序</p></li>   
                <li><a href="#">放置值（数十和数百）</a></li>
                <li><a href="#">20加法和减法</a></li>
                <li><a href="#">100加法和减法</a></li>
                <li><a href="#">1000以内的加法和减法</a></li>
                <li><a href="#">测量和数据</a></li>
                <li><a href="#">几何</a></li>
              </ul> 


            
            </div>
            </el-col>
            <el-col :span="16">
              <div class="hcontent2">
                <!-- from button components -->
                <createcourseware> </createcourseware>

                <el-row>
                  <el-col :span="24"> 
                    <ul>              
                      <li><a href="#"><i class="el-icon-tickets"></i>计数 <span style="background:#FF7373;">修改 删除  排序 提问数 评论数 录音</span></a>
                      </li>    
                      
                      <li><a href="#"><i class="el-icon-tickets"></i>比较小的数字 </a>
                      </li>    
                      
                      <li><a href="#"><i class="el-icon-tickets"></i>数字0到120</a></li>
                      <li><a href="#"><i class="el-icon-tickets"></i>计数对象</a></li> 
                    </ul> 
                  </el-col> 
                  <el-col :span="24">
                    <div class="hcont2cot">
                      <p><span>数数</span>&nbsp;概念大集合</p>
                      <img  :src="shushu" alt="">
                    </div>
                    <ul>
                            <li>
                                <span class="kejianshu">课件数：</span>
                                <b class="shuzi">1</b>
                            </li>
                            <!-- <li>
                                <span class="tiwen">提问：</span>
                                <b class="shuzi2">0/<em>0</em></b>
                            </li>
                            <li>
                                <span class="pinglun">评论：</span>
                                <b class="shuzi2">0</b> -->
                            </li>
                            <li>
                                <span class="learner">在学人数：</span>
                                <b class="shuzi2">4人</b>
                            </li>
                            <li>
                                <span class="haoping">好评：</span>
                                <b class="shuzi2">50%</b>
                            </li>
                                 <li><em>有效期：</em><i>2038-01-01</i></li>
                              <!-- <li><em>价格：</em><i style="color:red;">免费</i></li> -->
                              <li><em>作者：</em><i>小明老师</i></li>
                              <!-- <li><em>购买方式：</em><i>整体购买</i></li>   -->

                             <li><em>课程介绍：</em><i style="color:red;">xxxxxx</i></li>

                              <li><em>创建时间</em><i style="color:red;">xxxxxx</i></li>
                               <li><em>修改时间</em><i style="color:red;">xxxxxx</i></li>
                      </ul>
                  </el-col>
                  </el-row>
                
              </div>

            </el-col>
        </div>
      </el-col>
  </el-row>



  </div>
  
</template>
<script>
import createcourse from '@/components/Tea/createcourse'
import createcourseware from '@/components/Tea/createcourseware'

  export default {
    data(){
      return{
        tabPosition: 'left',
        shushu: require('../../assets/shushu.jpg'),
      }
    },

     methods: {
      onSubmit() {
        console.log('submit!');
      }
    },

     components: {      
       createcourse,
        createcourseware,
  },

  }

</script>
<style scoped>
.hnamebox{background-color: rgb(10, 42, 102);padding:34px 16px 24px;text-align: left;}
.hname1{    color: rgba(255, 255, 255, 0.7) ;
    font-family: inherit ;
    font-size: 15px ;
    font-weight: bold ;
    letter-spacing: 0.8px ;
    line-height: 22px ;
    text-transform: uppercase ;
    -moz-osx-font-smoothing: grayscale ;
    -webkit-font-smoothing: antialiased ;
    padding-bottom: 2px ;}
.hname2{font-size: 36px ;
    line-height: 40px ;    color: #FFFFFF ;
    font-weight: 900 ;
    font-size: 28px ;
    line-height: 32px ;
    margin: 0px ;}
  .hcontentbox{background: #F7F8F7;height:666px;}
  
  .hcontent1{height: 100%;    padding: 15px 30px;min-width: 225px;border-right: 1px solid #ebebeb;}
   .hcontent1 ul{list-style: none;text-align: left;}
.hcontent2{text-align: left;}
   .hcont2cot{border-top:4px solid #0a2a66;}
   .hcont2cot p{   font-size: 22px;    text-align: left;margin:17px;}
    .hcont2cot p span{font-weight: bold; }

</style>


