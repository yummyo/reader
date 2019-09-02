<template>
<!-- catalo课程目录 添加课程，删除课程，更改课程，分配任务 -->
  <div class="catalog">
    <el-row>
      <el-col :span="24"><div class="Addtext" @click="dialogVisibleadd = true">  + 添加课程来分配任务</div></el-col>
    </el-row>
    <el-dialog :visible.sync="dialogVisibleadd" title="选择课程" class="dialog_course">
        <createaddcourse></createaddcourse>
      <div slot="footer" class="dialog-footer">       
            <el-button type="primary" @click="dialogFormVisible = false">确定添加</el-button>
          </div>
    </el-dialog>

    
    <el-row>
      <el-col :span="24">  <div class="noSubject">没有课程</div></el-col>
    </el-row>

      <el-row>
      <el-col :span="24"> 
         <div class="Subjectcontent">
          
            <div class="contentheader">
              <!-- <div class="left headerdown">数学<i class="el-icon-caret-bottom"></i></div> -->
              <select v-model="selected" class="left headerdown">
                <option v-for="option in options" v-bind:value="option.value">
                  {{ option.text }}
                </option>
              </select>
              <el-button  type="danger" icon="el-icon-delete" circle class="right"  @click="abc = true" style="margin-left:10px;"></el-button>
              
             
               <el-button type="text" class="right headerbtn" >分配</el-button>
                <el-button type="text" class="right headerbtn active" @click="dialogVisible = true">分配选好后</el-button>
            </div>
             <el-dialog :visible.sync="abc" title="移除课程" >
                  
              <b>数学</b>课程将从这个班级中被移除,学生将看不到课程分享.
                  <span slot="footer" class="dialog-footer">
                    <el-button >取 消</el-button>
                    <el-button type="primary" >确定移除</el-button>
                  </span>
                  
                </el-dialog>
                <el-dialog :visible.sync="dialogVisible">
                  
                  <createsendtask></createsendtask>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确定分配</el-button>
                  </span>
                  
                </el-dialog>
                 
            <ul class="contentbody">
              <li class="item">
                <div class="bodyimg left"> <i class="el-icon-arrow-right"></i><img :src="imgcl" style='' >
                </div>
                <div class="bodyname middle">
                  <span class="namecourse"> 早期的数学</span>
                  <span class="namenum">3个课程</span>
                 </div>
                <div class="bodyselect right">  <el-checkbox ></el-checkbox></div>
                
              </li>
                <li class="item" style="padding-bottom:0;">
                <div class="bodyimg left"> <i class="el-icon-arrow-down"></i><img :src="imgcl" style='' >
                </div>
                <div class="bodyname middle">
                  <span class="namecourse"> 算术</span>
                  <span class="namenum">4个课程</span>
                 </div>
                <div class="bodyselect right" style="margin-bottom:16px;"><input type="checkbox"></div>
                <ol class="itemnext" style="" >
                  <li>
                    <div class="bodyimg left"> <i class="el-icon-view"></i>
                    </div>
                    <div class="bodyname middle">
                      <span class="namecourse"> 加减</span>
                      <span class="namenum"></span>
                    </div>   
                     <div class="bodyselect right"><input type="checkbox"></div>                 
                  </li>
                   <li>
                    <div class="bodyimg left"> <i class="el-icon-view"></i>
                    </div>
                    <div class="bodyname middle">
                      <span class="namecourse"> 乘除</span>
                      <span class="namenum"></span>
                    </div>   
                     <div class="bodyselect right"><input type="checkbox"></div>                 
                  </li>
                  <li>
                    <div class="bodyimg left"> <i class="el-icon-view"></i>
                    </div>
                    <div class="bodyname middle">
                      <span class="namecourse"> 负数</span>
                      <span class="namenum"></span>
                    </div>   
                     <div class="bodyselect right"><input type="checkbox"></div>                 
                  </li>
                  <li>
                    <div class="bodyimg left"> <i class="el-icon-view"></i>
                    </div>
                    <div class="bodyname middle">
                      <span class="namecourse"> 小数点</span>
                      <span class="namenum"></span>
                    </div>   
                     <div class="bodyselect right"><input type="checkbox"></div>                 
                  </li>
                </ol>
              </li>
             
            
            </ul>
              

            
        </div>
        </el-col>
    </el-row>

  
  
  </div>
</template>
<script>
import createsendtask from '@/components/Alertbox/sendtask'
import createaddcourse from '@/components/Alertbox/addcourse'
export default {
  data(){
    return{
      imgcl: require('../../assets/interest.png'),
       dialogVisible: false,
       dialogVisibleadd:false,
       abc:false,
        activeName:'first',
         selected: 'A',
        options: [
          { text: '数学', value: 'A' },
          { text: '语文', value: 'B' },
          { text: '英语', value: 'C' },
         
        ],      
    }
  },
  components: {      
       createsendtask,
       createaddcourse,
     
  },


}
</script>
<style scoped>
.Addtext{ 
  text-align: left;
      color: #1865F2 !important;
    text-decoration: none !important;
    cursor: pointer !important;
    font-weight: bold !important;
    margin: 0 auto !important;
    box-sizing: border-box !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    display: -moz-box !important;
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: flex !important;
    flex-direction: column !important;
    font-family: inherit !important;
    font-size: 17px !important;
    font-weight: bold !important;
    line-height: 23px !important;
    margin-top: 38px !important;
    -moz-box-sizing: border-box !important;
    -webkit-flex-direction: column !important;
    -ms-flex-direction: column !important;
    -webkit-box-orient: vertical !important;
    -webkit-box-direction: normal !important;}

.noSubject{   
    margin: 0 auto !important;
    box-sizing: border-box !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    font-family: inherit !important;
    font-size: 15px !important;
    font-weight: bold !important;
    line-height: 22px !important;
    color: #626569 !important;
    border-bottom: 1px solid #D6D8DA !important;
    border-top: 1px solid #D6D8DA !important;
    height: 51px !important;
    display: -moz-box !important;
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-top: 12px !important;
    margin-bottom: 38px !important;
    -moz-box-sizing: border-box !important;
    -webkit-align-items: center !important;
    -webkit-justify-content: center !important;
    -ms-flex-align: center !important;
    -webkit-box-align: center !important;
    -ms-flex-pack: center !important;
    -webkit-box-pack: center !important;
}

.Subjectcontent{
  padding:0 20px;
}

/* .contentheader{
  font-family: inherit !important;
    font-size: 15px !important;
    line-height: 22px !important;
    display: -moz-box !important;
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: flex !important;
    margin-top: 16px !important;
    justify-content: space-between !important;
    position: -webkit-sticky !important;
    position: sticky !important;
    z-index: 1 !important;
    top: 0px !important;
    height: 48px !important;
    margin-left: -16px !important;
    margin-right: -16px !important;
    align-items: center !important;
    background: #FFFFFF !important;
    border-bottom: 1px solid #D6D8DA !important;
    -webkit-justify-content: space-between !important;
    -webkit-align-items: center !important;
    -ms-flex-pack: justify !important;
    -webkit-box-pack: justify !important;
    -ms-flex-align: center !important;
    -webkit-box-align: center !important;
} */
.contentheader{
  
    /* border-bottom: 1px solid #D6D8DA !important; */
     margin-top: 16px !important;
     height: 50px;}

.headerdown{color: #21242C !important;
    font-family: inherit !important;
    font-size: 17px !important;
    font-weight: bold !important;
    line-height: 23px !important;
        padding: 6px 24px 6px 8px !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    border: none;
}
.left{float: left;}
.right{float: right;}

.contentheader::after{content:'';display: inline-block;clear: both;}
.active{    background: #1865f2 !important;
    color: #ffffff !important;}
.headerbtn{
  margin: 0px !important;

    position: relative !important;
    display: -moz-box !important;
    display: -ms-inline-flexbox !important;
    display: -webkit-box !important;
    display: -webkit-inline-flex !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    height: 32px !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
    border: none !important;
    border-radius: 4px !important;
    cursor: default !important;
    outline: none !important;
    text-decoration: none !important;
    box-sizing: border-box !important;
    touch-action: manipulation !important;
    background: rgba(33,36,44,0.32) ;
    color: rgba(255,255,255,0.64) ;
    min-width: 120px !important;
    -webkit-align-items: center !important;
    -webkit-justify-content: center !important;
    -moz-box-sizing: border-box !important;
    -ms-touch-action: manipulation !important;
    -ms-flex-align: center !important;
    -webkit-box-align: center !important;
    -ms-flex-pack: center !important;
    -webkit-box-pack: center !important;
    cursor: pointer;
    
}
.contentbody{
  /* border-bottom: 1px solid #D6D8DA !important; */
    margin-bottom: 48px !important;
    margin-left: -16px !important;
    margin-right: -16px !important;
}

.contentbody>li{
   
    border-top: 1px solid #D6D8DA !important;     
  cursor: pointer;
  padding: 16px ;
}
.contentbody li::after{
  content:"";
  clear:both;
  display:block;
}
.bodyimg{
   float: left;
   color:rgba(33, 36, 44, 0.32);
}
.bodyimg i{
  font-weight: bold;margin-right: 7px;
}
.bodyname{
    float: left;text-align: left;
}
.namecourse{
 
    display: block !important;
    font-family: Lato, sans-serif !important;
    font-weight: 700 !important;
    font-size: 16px !important;
  
}
.namenum{    
    font-family: Lato, sans-serif !important;
    font-weight: 400 !important;
    font-size: 12px !important;
   
}

.bodyselect{
  float: right;height: 40px;line-height: 40px;
}
.bodyselect input{
  -webkit-appearance: none !important;
    -moz-appearance: none !important;
    height: 16px !important;
    width: 16px !important;
    min-height: 16px !important;
    min-width: 16px !important;
    margin: 0px !important;
    outline: none !important;
    box-sizing: border-box !important;
    border-style: solid !important;
    border-width: 1px !important;
    border-radius: 3px !important;
    background-color: #ffffff !important;
    border-color: rgba(33,36,44,0.50) !important;
}
.bodyimg img{    
    /* border-width: 0px !important;
    border-style: solid !important;
    margin: 0px !important;
    padding: 0px !important;
    position: relative !important;
    z-index: 0 !important;
    min-height: 0px !important;
    min-width: 0px !important; */
    width: 40px !important;
    margin-right: 12px !important;    
    border-radius: 100px !important;
    vertical-align:middle;
}
/* li.item{
 
} */
ol.itemnext{padding:0 !important;clear:both;list-style: none;}
.itemnext>li{    border-top: 1px solid rgb(214, 216, 218) !important;height: 40px;line-height: 40px;}
</style>
