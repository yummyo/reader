<template>
<!-- 问答 -->
<div class="QALIST">

    <el-row type="flex line" class="row-bg line spans" justify="space-between">
     <div class="classtit"><span class="header_1d2h33e">评价与问答列表</span>
     </div>     
    </el-row>

    <el-row>
  <el-col :span="24">
    <div class="hang2 ">   

      <div class="texthselect">
        <span>回复状态：</span>
        <select v-model="selected">
          <!-- <option disabled value="">请选择</option> -->
          <option>全部</option>
          <option>已回复</option>
          <option>未回复</option>
        </select> 
      </div>           
      <div class="btngroup" style="">
        <el-input placeholder="请输入课程,课件查找" >
          <template slot="append">搜索</template>
        </el-input>
      </div>  

    </div>
  </el-col>
</el-row>

<el-row>
  <el-col :span="24">
    <div class="hang3">
      <ul>
        <!-- 搜索课件名 -->
        <li>
          <div class="float_l pj_img">
            <a href="javascript:;"><img src="../../../assets/people.jpg"></a>
						<p id="name_2">pptlook</p>
          </div>
          <div class="float_1 pj_text">
            <p class="pjquestion">问题：这个课程好嘛</p>
            <div class="pjdataall">
              <p class="pingjia_date"> 2018-10-08 </p>
              <p class="pingjia_time"> 16:54</p>
              <p class="pingjia_des" id="title_2">课件名:<a target="_blank" href="#" style="color:#66c;"><b>加减</b></a></p>
              <p class="pingjia_btn " onclick="xg(2,0)">修改</p>
              <div class="pingjia_input" style="">
              <input name="is_show" id="xianshi_2" type="checkbox" value="0" onclick="xs(2)">精选
              </div>  
            </div>
          </div>
          <div class="pj_huifu">
              <span>老师回复：</span>
              <div id="content_2" class="huifucot" style="">Chrome和Firefox里面的边
                框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的
                ，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复
                写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下
                Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和
                Firefox里面的边框是不一样的，所以复写了一下
              </div>
                <p> 2018-11-15 </p>
          </div>
        
        
        </li>


        <li>
          <div class="float_l pj_img">
            <a href="javascript:;"><img src="../../../assets/people.jpg"></a>
						<p id="name_2">pptlook</p>
          </div>
          <div class="float_1 pj_text">
            <p class="pjquestion">问题：这个课程好嘛</p>
            <div class="pjdataall">
              <p class="pingjia_date"> 2018-10-08 </p>
              <p class="pingjia_time"> 16:54</p>
              <p class="pingjia_des" id="title_2">课件名:<a target="_blank" href="#" style="color:#66c;"><b>加减</b></a></p>
              <p class="pingjia_btn " onclick="xg(2,0)">修改</p>
              <div class="pingjia_input" style="">
              <input name="is_show" id="xianshi_2" type="checkbox" value="0" onclick="xs(2)">精选
              </div>  
            </div>
          </div>
          <div class="pj_huifu" style="display:none;">
              <span>老师回复：</span>
              <div id="content_2" class="huifucot" style="">Chrome和Firefox里面的边
                框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的
                ，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复
                写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下
                Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和
                Firefox里面的边框是不一样的，所以复写了一下
              </div>
                <p> 2018-11-15 </p>
          </div>
        
        
        </li>
        <li>
          <div class="float_l pj_img">
            <a href="javascript:;"><img src="../../../assets/people.jpg"></a>
						<p id="name_2">pptlook</p>
          </div>
          <div class="float_1 pj_text">
            <p class="pjquestion">问题：这个课程好嘛</p>
            <div class="pjdataall">
              <p class="pingjia_date"> 2018-10-08 </p>
              <p class="pingjia_time"> 16:54</p>
              <p class="pingjia_des" id="title_2">课件名:<a target="_blank" href="#" style="color:#66c;"><b>加减</b></a></p>
             
              <p class="pingjia_btn " onclick="xg(2,0)">修改</p>
              <div class="pingjia_input" style="">
              <input name="is_show" id="xianshi_2" type="checkbox" value="0" onclick="xs(2)">精选
              </div>  
            </div>
          </div>
          <div class="pj_huifu">
              <span>老师回复：</span>
              <div id="content_2" class="huifucot" style="">Chrome和Firefox里面的边
                框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的
                ，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复
                写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下
                Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和
                Firefox里面的边框是不一样的，所以复写了一下
              </div>
                <p> 2018-11-15 </p>
          </div>
        
        
        </li>



<!-- 课程名搜索算术 -->
        <li>
          <div class="float_l pj_img">
            <a href="javascript:;"><img src="../../../assets/people.jpg"></a>
						<p id="name_2">pptlook</p>
          </div>
          <div class="float_1 pj_text">
            <p class="pjquestion">问题：这个课程好嘛</p>
            <div class="pjdataall">
              <p class="pingjia_date"> 2018-10-08 </p>
              <p class="pingjia_time"> 16:54</p>
              <p class="pingjia_des" id="title_2">课件名:<a target="_blank" style="color：black" >加减</a></p>
               <p class="pingjia_width" >所属课程:<a target="_blank" href="#" style="color:red;"><b>算术</b></a></p>
              <p class="pingjia_btn " onclick="xg(2,0)">修改</p>
              <div class="pingjia_input" style="">
              <input name="is_show" id="xianshi_2" type="checkbox" value="0" onclick="xs(2)">精选
              </div>  
            </div>
          </div>
          <div class="pj_huifu" style="display:none;">
              <span>老师回复：</span>
              <div id="content_2" class="huifucot" style="">Chrome和Firefox里面的边
                框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的
                ，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复
                写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下
                Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和
                Firefox里面的边框是不一样的，所以复写了一下
              </div>
                <p> 2018-11-15 </p>
          </div>  
        </li>
          <li>
          <div class="float_l pj_img">
            <a href="javascript:;"><img src="../../../assets/people.jpg"></a>
						<p id="name_2">pptlook</p>
          </div>
          <div class="float_1 pj_text">
            <p class="pjquestion">问题：这个课程好嘛</p>
            <div class="pjdataall">
              <p class="pingjia_date"> 2018-10-08 </p>
              <p class="pingjia_time"> 16:54</p>
              <p class="pingjia_des" id="title_2">课件名:<a target="_blank" href="#" style="color：black" >小数点</a></p>
               <p class="pingjia_width" >所属课程:<a target="_blank" href="#" style="color:red;"><b>算术</b></a></p>
              <p class="pingjia_btn " onclick="xg(2,0)">修改</p>
              <div class="pingjia_input" style="">
              <input name="is_show" id="xianshi_2" type="checkbox" value="0" onclick="xs(2)">精选
              </div>  
            </div>
          </div>
          <div class="pj_huifu" style="display:none;">
              <span>老师回复：</span>
              <div id="content_2" class="huifucot" style="">Chrome和Firefox里面的边
                框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的
                ，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复
                写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下
                Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和
                Firefox里面的边框是不一样的，所以复写了一下
              </div>
                <p> 2018-11-15 </p>
          </div>  
        </li>
          <li>
          <div class="float_l pj_img">
            <a href="javascript:;"><img src="../../../assets/people.jpg"></a>
						<p id="name_2">pptlook</p>
          </div>
          <div class="float_1 pj_text">
            <p class="pjquestion">问题：这个课程好嘛</p>
            <div class="pjdataall">
              <p class="pingjia_date"> 2018-10-08 </p>
              <p class="pingjia_time"> 16:54</p>
              <p class="pingjia_des" id="title_2">课件名:<a target="_blank" href="#"  style="color：black" >负数</a></p>
               <p class="pingjia_width" >所属课程:<a target="_blank" href="#" style="color:red;"><b>算术</b></a></p>
              <p class="pingjia_btn " onclick="xg(2,0)">修改</p>
              <div class="pingjia_input" style="">
              <input name="is_show" id="xianshi_2" type="checkbox" value="0" onclick="xs(2)">精选
              </div>  
            </div>
          </div>
          <div class="pj_huifu" style="display:none;">
              <span>老师回复：</span>
              <div id="content_2" class="huifucot" style="">Chrome和Firefox里面的边
                框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的
                ，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复
                写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下
                Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和
                Firefox里面的边框是不一样的，所以复写了一下
              </div>
                <p> 2018-11-15 </p>
          </div>  
        </li>
          <li>
          <div class="float_l pj_img">
            <a href="javascript:;"><img src="../../../assets/people.jpg"></a>
						<p id="name_2">pptlook</p>
          </div>
          <div class="float_1 pj_text">
            <p class="pjquestion">问题：这个课程好嘛</p>
            <div class="pjdataall">
              <p class="pingjia_date"> 2018-10-08 </p>
              <p class="pingjia_time"> 16:54</p>
              <p class="pingjia_des" id="title_2">课件名:<a target="_blank" href="#"style="color：black"  >小数点</a></p>
               <p class="pingjia_width" >所属课程:<a target="_blank" href="#" style="color:red;"><b>算术</b></a></p>
              <p class="pingjia_btn " onclick="xg(2,0)">修改</p>
              <div class="pingjia_input" style="">
              <input name="is_show" id="xianshi_2" type="checkbox" value="0" onclick="xs(2)">精选
              </div>  
            </div>
          </div>
          <div class="pj_huifu" style="display:none;">
              <span>老师回复：</span>
              <div id="content_2" class="huifucot" style="">Chrome和Firefox里面的边
                框是不一样的，所以复写了一下Chrome和Firefox里面的边框是不一样的
                ，所以复写了一下Chrome和Firefox里面的边框是不一样的，所以复
                写了一下Chrome和Firefox里面的边框是不一样的，所以复写了一下
                Chrome和Firefox里面的边框是不一样的，所以复写了一下Chrome和
                Firefox里面的边框是不一样的，所以复写了一下
              </div>
                <p> 2018-11-15 </p>
          </div>  
        </li>

      </ul>
    </div>
    </el-col>
</el-row>

</div>
 
</template>
<script>
export default {
  data(){
    return{  imgcl: require('../../../assets/class.png'),
    alertModal:false,
     selected: '全部',   }
  },
}
</script>
<style scoped>
.QALIST{min-height: 700px;padding:10px;}

.classtit{text-align: left;}
.line{ border-bottom: 1px solid #D6D8DA !important;}
.spans{padding-bottom: 15px;}
.hang2{ height: 60px;
    width: 98%;
    margin-top: 10px}
.texthselect{float: left;}
.texthselect span{max-width: 95px;
    height: 100%;
    line-height: 35px;
    font-size: 16px;
    color: #666666;
    overflow: hidden;
    margin-right: 5px;}
.texthselect select {
  font-size: 16px;
    width: 115px;
    width: 100px;
    height: 40px;
    overflow: hidden;
    position: relative;     
    border: 1px solid #E6E6E6;
    /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
    border: solid 1px #E6E6E6; 
  /*很关键：将默认的select选择框样式清除*/
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none; 
  /*在选择框的最右侧中间显示小箭头图片*/
  background: url("../../../assets/icon_xiajiantou.png") no-repeat scroll right center transparent;
  /*为下拉小箭头留出一点位置，避免被文字覆盖*/
  padding-right: 14px;
}
/*清除ie的默认选择框样式清除，隐藏下拉箭头*/
select::-ms-expand { display: none; }
.btngroup{float: left;margin-left: 10px;}


.hang3 li{
  padding: 25px 0 25px 80px;
    width: 1018px;
}
.pj_img{width: 65px;
    margin-left: -80px;}
.float_l{float: left;}

.pj_img a{display: block;
    width: 65px;
    height: 65px;
    overflow: hidden;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    position: relative;
}

.pj_img img{    width: 100%;
    height: 100%;}
.pj_img p{height: 18px;
    line-height: 18px;
    text-align: center;
    color: #333333;
    margin-top: 5px;
    overflow: hidden;
    height: unset;}

.pj_text{width: 100%;text-align: left;}

.pj_text .pjquestion{    word-wrap: break-word;
    overflow: hidden;
    word-break: break-all;
    width: 90%;    font-size: 16px;
    color: #333333;
    line-height: 24px;
    margin: 10px 0;
}

.pjdataall{    height: 35px;
    font-size: 14px;
    color: #666666;
    margin-bottom: 20px;}


    .pingjia_date	{    float: left;
    height: 24px;
    line-height: 24px;
    margin-top: 5.5px;
    overflow: hidden;}			 
.pingjia_time{    float: left;
    height: 24px;
    line-height: 24px;
    margin-top: 5.5px;
    overflow: hidden;
    width: 40px;
    margin: 6px 14px;    padding: 0px;}
.pingjia_des		{    float: left;
    height: 24px;
    line-height: 24px;
    margin-top: 5.5px;
    overflow: hidden;width: 150px;}		 

.pingjia_width{  float: left;
    height: 24px;
    line-height: 24px;
    margin-top: 5.5px;
    overflow: hidden;}
.pingjia_btn{float: left;
    height: 24px;
    line-height: 24px;
    margin-top: 5.5px;
    overflow: hidden;    width: 60px;
    height: 24px;
    color: #3396FB;
    border: 1px solid #3396FB;
    text-align: center;
    margin-left: 10px;
    cursor: pointer;}
.pingjia_input{width:200px;height:40px;float:left;padding-top:11px;padding-left:10px;color:#999;    font-size: 14px;}				 
.is_show{    font-family: "微软雅黑";
    background: none;
    border: none;
    outline: 0;}


.pj_huifu{
      padding: 10px;
    width: 908px;
    background-color: #F8F8F8;font-size: 14px;
    color: #333333;
    line-height: 30px;
    text-align: left;
}

.pj_huifu span{    font-size: 14px;
    color: #333333;
    line-height: 30px;}

 /* li> p{    height: 18px;
    line-height: 18px;
    font-size: 14px;
    color: #666666;text-align: left;   background-color: #F8F8F8;} */

  .huifucot{margin-top: -30px;margin-left: 80px;}
</style>
