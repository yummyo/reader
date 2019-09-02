<template>
<!-- 我的课程 -->
<div> 
    <el-row>
            <el-col :span="24" class="nav">
              <span>我的课程</span>
            </el-col>
            <el-col :span="24" class="subjects">              
            


             
              <div class="course-box clearfix">
                  <div class="citem">
                    <a href="#">
                      <div class="pic">
                        <img :src="imgUrl3">
                         <a><span class="spano"> 7 节课件</span></a>
                      
                      </div>
                      <p class="intna">沪科版八年级物理</p>                                       
                    </a>
                  </div>
                  <div class="citem">
                    <a href="#">
                      <div class="pic">
                        <img :src="imgUrl3">
                         <a><span class="spano">1节课件</span></a>
                      
                      </div>
                      <p class="intna">10以内数的认识及加减法</p>                                       
                    </a>
                  </div>
                     <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                       
                      
                      </div>
                      <p class="intna">放置值（数十和数百）</p>                                       
                    </a>
                  </div>
                     <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                       
                     
                      </div>
                      <p class="intna">20加法和减法</p>                                       
                    </a>
                  </div>
                     <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                        
                      
                      </div>
                      <p class="intna">100加法和减法</p>                                       
                    </a>
                  </div>
                     <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                        
                      
                      </div>
                      <p class="intna">1000以内的加法和减法</p>                                       
                    </a>
                  </div>
                  <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                       
                     
                      </div>
                      <p class="intna">测量和数据</p>                                       
                    </a>
                  </div>
                   <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                       
                     
                      </div>
                      <p class="intna">几何</p>                                       
                    </a>
                  </div>
                   <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                       
                     
                      </div>
                      <p class="intna">几何</p>                                       
                    </a>
                  </div>
                   <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                       
                     
                      </div>
                      <p class="intna">几何</p>                                       
                    </a>
                  </div>
                   <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                       
                     
                      </div>
                      <p class="intna">几何</p>                                       
                    </a>
                  </div>
                   <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                       
                     
                      </div>
                      <p class="intna">几何</p>                                       
                    </a>
                  </div>
                   <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                       
                     
                      </div>
                      <p class="intna">几何</p>                                       
                    </a>
                  </div>
                   <div class="citem">
                    <a href="#">
                      <div class="pic"><img :src="imgUrl3">
                       
                     
                      </div>
                      <p class="intna">几何</p>                                       
                    </a>
                  </div>

                   <div class="citem">
                    <a href="#">
                      <div class="pic learnmore">
                       
                     或开始新增新的课程
                      </div>
                                                           
                    </a>
                  </div>
                 

                  <div class="citem"></div>                  
                  <div class="citem"></div>                  
                  <div class="citem"></div>
                 
              </div>

             

            </el-col>
          
           
           
          </el-row>

</div>
  
</template>
<script>
export default {
  data(){
    return{ imgUrl3: require('../../../assets/pic3.png'),
            imgadd: require('../../../assets/add.jpg'),
             imggrey: require('../../../assets/grey.png'),
    }
  }
}
</script>
<style scoped>

.nav{    position: relative !important;
    z-index: 1 !important;
    min-height: 56px !important;
    background-color: #F6F7F7 !important;
        line-height: 56px;
    text-align: left;
    padding-left: 10px;
    font-weight: bold;
    font-size: 13px;
}

.subjects header {   font-size: 18px !important;
    padding-top: 20px !important;
    padding-bottom: 20px !important;text-align: left;}

.subjects header a{    font-weight: bold !important;
    text-decoration: none !important;
    white-space: nowrap !important;
    color: #027d97 !important;}

.course-box{
    display: -moz-box !important;
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: flex !important;
    flex-flow: row wrap !important;
    justify-content: space-around !important;
    -webkit-flex-flow: row wrap !important;
    -ms-flex-flow: row wrap !important;
    -webkit-justify-content: space-around !important;
    -ms-flex-pack: distribute !important;
    -webkit-box-pack: justify !important;

    
}
.citem{     width: 209px;   box-sizing: inherit; font-size: 12px;    overflow: hidden;margin: 0 20px 20px 20px;}
.citem a{text-decoration: none;color:black;}
.pic{position: relative;    width: 208px;    height: 117px;    display: block;
    overflow: hidden;    text-align: center;    border-radius: 4px;}
.learnmore{font-size: 15px;
    text-align: center;
    line-height: 117px;
    background: #F6F7F7 !important;
    border: 1px solid #E3E5E6;
    color: #626569 !important;
    font-weight: bold;}
.pic img{    display: block;    width: 100%;    height: 100%;}
.pic span{    position: absolute;    bottom: 4px;    left: 8px;color: #FFFFFF !important;}
  
  

.intna{

    width: 208px;    margin-top: 8px !important;
    font-weight: bold !important;
    text-align: left;

}

i{transform: rotate(180deg);border-radius: 50px;    background: white;color: #FF6700}
.more{background: #414141;font-size: 100px;    width: 208px;
    height: 117px;cursor: pointer;}
</style>


