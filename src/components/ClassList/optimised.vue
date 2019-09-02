<template>
<!-- 设置修改班级名字，删除班级，更改课程（选择课程） -->
<div class="optimised">
<el-row>
  <el-col :span="24"><div class="setup">
   
    <span class="header_tit left"> 设置</span>
    <div class="del_grap right">
      <!-- <a @click="deltoclass = true">删除这个班级</a> -->
      <button class="deletxt" @click="deltoclass = true">删除这个班级</button>
      </div>
    </div></el-col>
</el-row>


       <el-dialog :visible.sync="deltoclass" title="删除班级" class="dialog_course">
       你确定你想要删除这个班级, xxx年级？
          <div slot="footer" class="dialog-footer">       
               <el-button @click="dialogVisible = false">取 消</el-button>     
          <el-button type="primary" @click="dialogFormVisible = false">确认删除</el-button>
          </div>
      </el-dialog>


<el-row>
  <el-col :span="24">
   
    <div class="setgroup1">
      <span class="header_tit del_font left"> 班级名称</span>
      <span class="right">0 / 50</span>
    </div>
    <div class="setgroup2"> 
      <form action="">
            <input placeholder="示例, 九年(7)班" class="inputBase"  value="九年(7)班">      
      </form>
      <button>保存</button>
    </div>
    <div class="setgroup3">
      <span class="header_tit">课程</span>
      <p>常规设置, 金融和资本市场, 语法, 宇宙学和天文学<a href="javascript:void(0)" @click="dialogVisibleadd = true">编辑课程</a></p>
    </div>
    </el-col>
</el-row>
    <el-dialog :visible.sync="dialogVisibleadd" title="添加或者移除课程" class="dialog_course">
      <createaddsub></createaddsub>
      <div slot="footer" class="dialog-footer">       
            <el-button type="primary" @click="dialogFormVisible = false">确定操作</el-button>
          </div>
    </el-dialog>
</div>
  
</template>
<script>
import createaddsub from '@/components/Alertbox/addsub'
export default {
  data(){
    return{
      deltoclass:false,
      dialogVisibleadd:false,
    }
  },
    components: { 
     
       createaddsub,
     
  }
}
</script>
<style scoped>
/* .optimised{padding:20px 20px 10px;} */
.optimised{min-height: 600px;}
.setup{border-bottom: 1px solid #D6D8DA;padding:20px 20px 10px;}
.setup::after{content: '';clear: both;display: inline-block;}
.setgroup1{width:441px;height:20px;margin-left:20px;margin-top:20px;}
.setgroup2{ width:441px;height: 48px;margin-left:20px;position: relative;margin-top:10px;}
.setgroup2::after{content: '';clear: both;display: inline-block;}
.setgroup3{text-align: left;margin-left: 20px;margin-top:20px}
form{height: 40px ;    border-radius: 4px ;       padding-left:10px;
    background-color: #FFFFFF ;     border: 1px solid rgb(214, 216, 218);
    width:305px;float: left;    position: absolute;    left:0;}

input {    background: inherit ;    border: none ;    font-family: inherit ;
    font-size: 15px ;    line-height: 37px ;    outline: none ;    width: 100% ;
    }
.setgroup2 button{margin: 0px ;        height: 42px ;    padding-top: 0px ;    padding-bottom: 0px ;
    padding-left: 16px ;    padding-right: 16px ;    border: none ;    border-radius: 4px ;
    cursor: default ;    outline: none ;    text-decoration: none ;  
    background: rgba(33,36,44,0.32) ;    color: rgba(255,255,255,0.64) ;
    margin-left: 8px ;    min-width: 120px ;      width:80px;float: left;position:absolute;right: 0;
        /* background: #1865f2 !important;
        color:#fff; */
    }
.header_tit{font-family: inherit ;
    font-size: 17px ;
    font-weight: bold;
    line-height: 23px ;
    color: #21242C ;
    }
  .del_font{font-weight: normal;}
  .left{float: left;}
  .right{float:right;}

.del_grap button{color: #1865F2 ;
    text-decoration: none ;
    font-family: inherit ;
    font-size: 15px ;
    font-weight: bold ;
    line-height: 22px ;border: none;background: #fff;}
</style>
