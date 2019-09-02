<template>
<!--搜索-->
  <div class="search">
    <el-row :gutter="20">
      <!-- 搜索框+按钮 -->
      <el-col :span="24" >
        <el-col :span="18">       
          <div class="demo-input-suffix">             
            <el-input
              placeholder="搜索课程名，课件名，老师，知识点"
              v-model="input23" class="searchborder">
              <i slot="prefix" class="el-input__icon el-icon-search changec"></i>
            </el-input>
          </div>

        </el-col>
         <el-col :span="6">
              <el-button type="primary" class="btnsearch">搜索</el-button>
        </el-col>
      </el-col>
      <!-- 搜索结果 -->
      <el-col :span="24">
        <div class="searchcont">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="18">
              <ul class="tabul">
                <li class="active">全部</li>
                <li>课程</li>
                <li>课件</li>
                <li>老师</li>
                <li>知识点</li>
              </ul>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                <!-- <span class="demonstration">click 激活</span> -->
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    排序方式</i>
                  </span>
                    <select v-model="selectedOption">
                            <option v-for="option in options" :value="option">{{option.way}}</option>
                        </select>
                </el-dropdown>
              </div>
                
            </el-col>

          </el-row>
          <ul class="itemcot">
          <!-- 课程 -->
             <li class="itemcourse">
               <div class="itemtit">
                 <a href="">课程<b>Art</b> history | <b>Arts</b> and humanities | Khan Academy</a>
               </div>
             <div class="itemp">
               <img src="" alt="">
            <p>   Beauty. War. Religion. Society. Language. The human condition, in all its wonder 
and depravity, is at the heart of the study of the <b>arts</b> and humanities.Beauty. War. Religion. Society. Language. The human condition, in all its wonder 
and depravity, is at the heart of the study of the <b>arts</b> and humanities.</p>
             </div>
            </li>
            <!-- 课件 -->
            <li class="itemcourse">
              <div class="itemtit">
                <a href="" >课件<b>Arts</b> and humanities | Khan Academy</a>
              </div>
            <div class="itemp">Beauty. War. Religion. Society. Language. The human condition, in all its wonder 
and depravity, is at the heart of the study of the <b>arts</b> and humanities.
            </div>
            </li>
            
            <!-- 老师 -->
             <li class="itemteacher">
               <div class="itemtit">
                 <a href="">老师How to do visual (formal) analysis in <b>art</b> history (video) | Khan </a>
                </div>
               <div class="itemp"></div>
            </li>
             <!--知识点 -->
             <li class="itemskills"> 
               <div class="itemtit">
                 <a href="">知识点How to do visual (formal) analysis in <b>art</b> history (video) | Khan  </a>
               </div>
               <div class="itemp"></div>
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
    return{
        selectedOption:{wayCode:0,way:"关联"},
        options:[
            {
               wayCode:0,
                way:"关联"
            },{
                wayCode:1,
                way:"日期"
            }
        ]
    }
      
    }

}
</script>
<style scoped>
.search{padding:22px 20px 0px;min-height: 700px;}
.btnsearch{width: 100%;}
.changec{color: #444444;font-weight:bold;}
.searchcont{margin-top:35px;}

.tabul li{float:left;
    border: 0;
    color: #005987;
    font-size: 14px;
    font-weight: normal;
    height: 32px;
    line-height: 32px;
    min-width: 0;
    padding: 0 15px;}
.active{border-bottom: 3px solid #76a005 !important;   color: #444 !important}
.itemcot{text-align: left;margin-top: 20px;}
.itemcot li{margin-top: 10px;}
.itemtit a{color:#005987;
overflow: hidden;
text-overflow: ellipsis;}
.itemp{color: #444;
    font-size: 14px;
    max-width: 550px;
    margin: 11px 0 21px;
    line-height: 18px;    
   }

.itemp img{    border-radius: 4px;
    border: 1px solid #ddd;
    display: inline-block;
    height: 54px;
    margin-right: 15px;
    overflow: hidden;
    width: 96px;
    float: left;}

.itemp p{     overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;}

</style>


