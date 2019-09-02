<template>
  <div class="ConameCwmp4">
    <el-row>
    <el-col :span="24">
      <div class="colistmp4">        
        <div class="colist">          
            <h3 class="colist-tit">沪科版八年级物理</h3>
            <div class="colist-cot">
              <div style="height: 300px;">
                <el-steps direction="vertical" :active="1">
                  <el-step title="走进神奇——打开物理世界的大门" icon="el-icon-edit"></el-step>
                  <el-step title="探索之路——打开世界的大门" icon="el-icon-loading" ></el-step>
                  <el-step title="站在巨人的肩膀上——打开世界的大门" icon="el-icon-edit"></el-step>
                  <el-step title="动与静——运动的世界" icon="el-icon-edit"></el-step>
                  <el-step title="快与慢——运动的世界" icon="el-icon-edit"></el-step>
                  <el-step title="长度与时间的测量——运动的世界" icon="el-icon-edit"></el-step>
                  <el-step title="科学探究：速度的变化——运动的世界" icon="el-icon-edit"></el-step>
                </el-steps>
              </div>
            </div>           
        </div>
        <div class="stmp4">         
            <iframe  id="myiframe" src="http://yueke.pptlook.com/ppt/52763a636b17ec21ea83940d39ac891e/index.php?cid=137" frameborder="0"></iframe>
        </div>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="courseauthor">
        <div class="authordate">
          <h1>沪科版八年级物理</h1>
          <div class="videodata">
            <span title="总播放数42441" class="view">4.2万播放&nbsp;·&nbsp;</span>
            <span title="总点赞数571" class="dz">571点赞&nbsp;·&nbsp;</span>
             <span title="在学人数34" class="dz">在学人数34&nbsp;·&nbsp;</span>
            <time>2017-08-13 14:54:59</time>
          </div>
        </div>
        <div class="authorface">
          <div class="authorpic">
            <a href="" target="_blank">
              <img :src="imgUrl1" width="40" height="40" >              
            </a>
          </div>
          <div class="authorinfo">
            <div class="name" >
              <a href="" target="_blank" class="">糖豆老师</a>             
            </div>
            <div title="作者简介" class="desc">一线资深教师，7年物理教学经验，中高考辅导专家。培养学生多人物理竞赛获奖。授课风格轻松幽默，注重知识的系统性和联系性</div>
          </div>          
        </div>
        <div class="authorstar">
          <span style="float:left;">请对本课程评分：</span>
          <el-rate
            v-model="value3"
            show-text>
          </el-rate>
        </div>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="copjtalk">
        <div class="talknum"> 
           <!-- <span class="talknumq">39</span>  <span class="talknumqh">评论</span></div> -->        
          
              <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="全部评论" name="first">
                    <el-row>
                       <el-col :span="24">
                         <div class="no-login">
                          <div class="user-face">
                            <img class="" :src="imgUrl1">
                          </div>
                          <div class="textarea-container">
                            
                            <div class="baffle">请先
                              <a class="btn-Login">登录</a>后发表评论 (・ω・)
                            </div>                               
                            
                            <textarea cols="80"  rows="5" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" class="textareat"></textarea>
                            <button type="submit" class="submit-fbpl" disabled="disabled">发表评论</button>
                          </div>
                          <div class="comment-emoji">
                            <i class="el-icon-third-Smile"></i>
                            <span class="text">表情</span>
                          </div>
                         </div>
                        </el-col>
                       <el-col :span="24">
                         <div class="AskReplayitem">                       
                            <div class="user-face">
                              <a href="" target="_blank" >
                                <img class="" :src="imgUrl1"></a>
                            </div>                        

                            <div class="ask ">
                              <div class="askuser">
                                <a  href="" target="_blank" class="name ">小小喀嚓鱼</a>                                
                              </div>
                              
                              <p class="asktext">请问这个课件还有其他的课件吗</p>
                              <div class="info">
                                <span class="floor">#1</span>                               
                                <span class="time">2018-10-03 23:44</span>
                                <i class="el-icon-third-zan"> </i>&nbsp;&nbsp;9999
                        
                                <span class="reply btn-hover btn-highlight">回复</span>                                
                              </div>
                              <div class="reply"> 
                                <div class="last-reply">
                                  <div class="user-face">
                                    <a href="" target="_blank" >
                                      <img class="" :src="imgUrl1"></a>
                                  </div>                       

                                  <div class="ask ">
                                    <div class="askuser">
                                      <a  href="" target="_blank" class="name ">小明老师</a>                                
                                    </div>
                                    
                                    <p class="asktext">这个课件只有这个课件</p>
                                    <div class="info">                                                                  
                                      <span class="time">2018-10-03 23:44</span>
                                      <i class="el-icon-third-zan"> </i>&nbsp;&nbsp;9999                       
                                    </div>                                                          
                                  </div>
                                </div>

                              </div>                             
                            </div>
                         </div>


                           <div class="AskReplayitem">                       
                            <div class="user-face">
                              <a href="" target="_blank" >
                                <img class="" :src="imgUrl1"></a>
                            </div>                        

                            <div class="ask ">
                              <div class="askuser">
                                <a  href="" target="_blank" class="name ">小小喀嚓鱼</a>                                
                              </div>
                              
                              <p class="asktext">请问这个课件还有其他的课件吗</p>
                              <div class="info">
                                <span class="floor">#2</span>                               
                                <span class="time">2018-10-03 23:44</span>
                                <i class="el-icon-third-zan"> </i>&nbsp;&nbsp;9999
                        
                                <span class="reply btn-hover btn-highlight">回复</span>                                
                              </div>
                              <div class="reply">  
                                <div class="last-reply">
                                  <div class="no-login">
                                    <div class="user-face">
                                      <img class="" :src="imgUrl1">
                                    </div>
                                    <div class="textarea-container">
                                      
                                      <div class="baffle">请先
                                        <a class="btn-Login">登录</a>后发表评论 (・ω・)
                                      </div>                               
                                      
                                      <textarea cols="80"  rows="5" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" class="textareat"></textarea>
                                      <button type="submit" class="submit-fbpl" disabled="disabled">发表评论</button>
                                    </div>
                                    <div class="comment-emoji">
                                      <i class="el-icon-third-Smile"></i>
                                      <span class="text">表情</span>
                                    </div>
                                  </div>
                                </div>                             
                              </div>                             
                            </div>
                         </div>
                        </el-col>
                  </el-row>         
                  </el-tab-pane>
               

                </el-tabs> 
                <div class="toppage">   
                  <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                  </el-pagination>
                </div> 

      </div>
      </div>
     </el-col>
  </el-row>

  </div>
  
</template>
<script>

export default {
  data(){
    return{
      imgUrl1: require('../../assets/pic.png'),
        value3: null,
        activeName: 'first' ,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
    }
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
      }
  }
}



</script>
<style scoped>

/* .colistmp4{} */
  .colist{width:255px;float: left;}
    .colist-tit{background-color: #FFFFFF;border-bottom: 1px solid #D6D8DA;color: #21242C;    
      font-size:12px;font-weight:bold;line-height:23px; padding-top: 24px;white-space: normal ;    width: 255px}
    .colist-cot{border-bottom: 1px solid #D6D8DA;}
  .stmp4{padding:10px 0; background: #000 !important;   overflow: hidden !important;    width: -moz-calc(100% - 255px) !important;
    width: -webkit-calc(100% - 255px) !important;    width: calc(100% - 255px) !important;height: 100%; }     
     .stmp4  iframe{min-width: 568px;min-height: 320px;margin: 0 auto;margin-top:10px;}
.courseauthor{border-bottom: 1px solid #D6D8DA;padding-bottom: 20px;}
  .authordate{text-align: left;}
    .authordate h1{font-size: 18px;    font-weight: 500;    color: #222;    line-height: 22px;     word-break: break-word;}
      .videodata{    margin: 8px 0 0;    font-size: 12px;    color: #999;}
  .authorface{margin-top: 16px;
    margin-bottom: 12px;}

  .authorface:after { 
        visibility: hidden; display: block; font-size: 0; content: "."; 
        clear: both; height: 0; } 

    .authorpic{    float: left;
    width: 40px;
    height: 40px;
    position: relative;}
    .authorpic a{    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #f4f5f7;
} 
 
 

.authorinfo{    height: 40px;
    margin-left: 16px;
    float: left;text-align: left;}
    .authorinfo .name a{     line-height: 18px;    font-size: 14px;font-size: 14px;
   
    font-weight: 500;
    display: inline-block;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    color: #fb7299;text-decoration: none;}
   .authorinfo  .desc {      margin-top: 6px;    font-size: 12px;    line-height: 16px;
    height: 16px;    color: #505050;    overflow: hidden;    text-overflow: ellipsis;
    white-space: nowrap;        white-space: pre-line;    transition: all .3s;
    font-size: 12px;    color: #212121;    letter-spacing: 0;    line-height: 18px;
    height: 63px;    width: 573px;    overflow: hidden;}

  .authorstar{    text-align: left;
    padding-top: 30px;}
.copjtalk{position: relative;}
.talknum{font-size: 18px;
    line-height: 24px;
    color: #222;
    margin: 0 0 20px;}

.toppage{position: absolute;top:2px;right: 0;}
.no-login{position: relative;}
.user-face{    float: left;
    margin: 7px 0 0 5px;
    position: relative;}
    .user-face img{    width: 48px;
    height: 48px;
    border-radius: 50%;}
.textarea-container {
    position: relative;
   margin-left: 85px !important; 
    margin-right: 80px !important; ;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
}



  .baffle {
    display: block;
    position: absolute;
    z-index: 102;
    width: 100%;
    top: 0;
    line-height: 64px;
    font-size: 12px;
    border-radius: 4px;
    text-align: center;
    color: #777;
    background-color: #e5e9ef;
    overflow: hidden;

}
.btn-Login{  padding: 4px 9px;
    margin: 0 3px;
    color: #fff;
    background-color: #00a1d6;
    border-radius: 4px;}
  
  .textareat {
    font-size: 12px;
    display: inline-block;
    box-sizing: border-box;
    background-color: #f4f5f7;
    border: 1px solid #e5e9ef;
    overflow: auto;
    border-radius: 4px;
    color: #555;
    width: 100%!important;
    height: 65px;
    transition: 0s;
    padding: 5px 10px;
    line-height: normal;
    outline: none;
    resize: none;
}

.submit-fbpl {
    width: 70px;
    height: 64px;
    position: absolute;
    right: -80px;
    top: 0;
    padding: 4px 15px;
    font-size: 14px;
    color: #fff;
    border-radius: 4px;
    text-align: center;
    min-width: 60px;
    vertical-align: top;
    cursor: pointer;
    background-color: #00a1d6;
    border: 1px solid #00a1d6;
    transition: .1s;
    user-select: none;
    outline: none;

}
.comment-emoji {
    background-color: #e5e9ef;
    padding: 0;
    width: 66px;
    height: 24px;
    color: #99a2aa;
    border: 1px solid #e5e9ef;
    border-radius: 4px;
    position: relative;
    z-index: 101;
    font-size: 12px;
    text-align: center;
    line-height: 23px;
    margin-left: 86px;
    margin-top: 3px;
    cursor: pointer;}

/* .AskReplayitem{
  
} */

.ask{  position: relative;
    margin-left: 85px;
    padding: 10px 0 14px;
    border-top: 1px solid #e5e9ef;
    text-align: left;
}
.askuser{font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    padding-bottom: 4px;
    display: block;
    word-wrap: break-word;}
.askuser a{text-decoration: none;color:#fb7299;}
    .asktext {
    line-height: 20px;
    padding: 2px 0;
    font-size: 14px;
    text-shadow: none;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-word;}
    .info{color: #99a2aa;
    line-height: 26px;
    font-size: 12px;}
</style>


