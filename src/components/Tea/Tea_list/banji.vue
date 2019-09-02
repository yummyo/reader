<template>
<!-- 班级内容 -->

<div class="classes">
    <el-row type="flex" class="row-bg line" justify="space-between">
      <el-col :span="6"><div class="classtit"><span class="header_1d2h33e">您的所有班级</span></div></el-col>
      <el-col :span="6"><div class="classaddbtn "><el-button type="text" @click="addbj">添加新的班级</el-button></div></el-col>     
    </el-row>
    <el-dialog  :visible.sync="alertModal" class="dialog_class"  title="添加新的班级">
      <!-- 1.创建新的班级 -->
      <addnewgrap></addnewgrap>
      <div slot="footer" class="dialog-footer">       
        <el-button type="primary" @click="dialogFormVisible = false">确定创建</el-button>
      </div>
    </el-dialog>

    
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <ul>
            <!-- 2.创建好的班级，进入班级列表选项 -->
            <li class="classitem clearfix">
              <!-- <a href=""> -->
                <router-link to="/details">
              <img :src="imgcl" alt="">
              <div class="classinfo">
                <div class="infontit">班级名称</div>
                <div class="infostus">名册</div>
              </div>
               </router-link><!-- </a> -->
            </li>
           <li class="classitem clearfix">
              <img :src="imgcl" alt="">
              <div class="classinfo">
                <div class="infontit">九年(7)班</div>
                <div class="infostus">0个学生</div>
              </div>
            </li>
          </ul>
        
        </div></el-col>
    </el-row>
</div>
  
</template>
<script>
import addnewgrap from '@/components/Tea/Tea_list/BJcot/classbox'
export default {
  data(){
    return{  imgcl: require('../../../assets/class.png'),alertModal:false   }
  },
  methods: {
      addbj() {
        this.alertModal=true;
      }
  },
  components: {      
      //  createclassbox,
      addnewgrap,
     
  }
}
</script>
<style scoped>
.line{    border-bottom: 1px solid #D6D8DA !important;}
.classtit{text-align: left}
.classaddbtn{text-align: right;}

.classitem{padding: 16px;border-bottom: 1px solid #D6D8DA !important;}
.clearfix:after{
            display: block;
            content:'';
            clear: both;
            height:0;
        }
.classitem img{float: left;
    display: block ;
    border-radius:4px;
    width: 64px ;
    height: 64px ;
}
.classinfo{float: left;    padding-left: 15px;text-align: left;margin-top: 10px;}
.infontit{text-decoration: none ;
    font-family: inherit ;
    font-size: 17px ;
    font-weight: bold ;
    line-height: 23px ;
    color: #888D93 ;
    width: 100% ;
    white-space: nowrap ;
    overflow: hidden ;
    text-overflow: ellipsis ;}
.infostus{text-decoration: none ;
    font-family: inherit ;
    font-size: 15px ;
    line-height: 22px ;
    color: #888D93;
    margin-top: 4px ;
}




</style>

