<template>
  <div class="course">
    <!-- course1ji+course2ji -->
    <el-row > 
      <ul class="coursetit">
          <!-- <li class=""><a style="color:black">数学</a></li>
          <li class=""><a>科学与工程</a></li>
          <li class=""><a>计算</a></li>
          <li class=""><a>艺术与人文</a></li>
          <li class=""><a>经济和金融</a></li>
          <li class=""><a>测试准备</a></li>
          <li class=""><a>大学，职业等等</a></li>               -->
          <li v-for="item in items" class=""><a>{{item.coursename}}</a></li>
      </ul>
            
      <div class="courselist">
        <el-row v-for="(item,index) in items" :key="index" class="box linex"  > 
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
            <div class="tl"><h2 > <img :src="item.url" alt="" />{{item.coursename}} </h2></div>
          </el-col>
          <el-col :xs="18" :sm="18" :md="18" :lg="18" :xl="18">
            <div >
              <ul  >
                <li v-for="(coursename2,i) in item.data"> <a href="#">{{coursename2}}</a></li>         
              </ul>
            </div>
          </el-col>
        </el-row> 
       
              
      </div> 
    </el-row>
    <!-- 切换按钮 -->  
      <el-row style="margin-top:10px;" >
         <el-col :span="6" :offset="18"><div class=""><el-button type="danger">切换到知识图谱</el-button></div></el-col>
      </el-row>
  
  </div>  
</template>
<script>
export default {
  data() {
    return{  
      items:[
        {coursename:"数学",url:require('../../assets/math.png'),
        data:['早期的数学','算术','预代数',' 代数(1)',' 几何','代数(2)','三角','初等','统计和概率','预修 微积分AB','预修 微积分BC','多变量微积分','微分方程','线性代数']},
        {coursename:"科学与工程",url:require('../../assets/science.png'),
        data:[  '物理','预修 物理(1)','预修 物理(2)','宇宙学和天文学','化学','预修 化学','有机化学','生物学','高中生物学','预修 生物学','健康与医学','电气工程' ]},
        {coursename:"计算",url:require('../../assets/computer.png'),
        data:[ '电脑编程','计算机科学','代码小时','电脑动画']},
        {coursename:"艺术与人文",url:require('../../assets/art.jpg'),
         data:[ '世界历史','美国历史','美国历史','艺术史','语法']},
        {coursename:"经济与金融",url:require('../../assets/economics.png'),
        data:['个体经济学','宏观经济学','金融与资本市场']},
        {coursename:"测试准备",url:require('../../assets/sat.png'),
        data:['SAT','LSAT','MCAT','GMAT','IIT JEE','NCLEX-RN']},
        {coursename:"大学，职业等等",url:require('../../assets/college.png'),
        data:['大学录取','招聘','个人财务','创业','成长心态']},
    ]

  }
  }
}
</script>
<style scoped>


.coursetit {margin:0 auto;padding: 16px 0;display:flex;flex-direction:row;list-style: none;background:#f6f7f7; }
.coursetit li{flex:1;}
a{text-decoration: none;color: #626569;font-weight: bold}
.courselist{width:100%;background: #fff;font-size: 15px;}
.box.linex{border-bottom: 1px solid #D6D8DA ;padding:28px 20px;}
.courselist ul{list-style: none;}
.courselist li{float: left;width: 177px;height: 24px;padding-bottom: 4px;}
img {border-radius:50%;box-sizing:content-box;width:40px;height:40px;margin-right:16px;vertical-align:middle;}
.tl{text-align: left;margin-left:30px;}

</style>


