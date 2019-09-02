<template>
  <div class="nav">
    <!-- 正常头部 -->
    <el-row  v-show="isshow" type="flex" class="row-bg nav1" justify="space-between" style="height:60px;" >
      <el-col :span="6" >
        <el-row>
          <!-- <el-col :span="12"><div> Course<i class="el-icon-caret-bottom"></i></div></el-col> -->
          
          <el-col :span="20"><div class="headersearch" @click="test"><el-input :disabled="true" placeholder="Search" suffix-icon="el-icon-search" ></el-input></div></el-col>
          </el-row>
      </el-col>
      <el-col :span="6">
        <div class="">logn+阅课网</div></el-col>
      <el-col :span="6"  >
        <div>
        
          <el-button  class="wenzi" type="text"> <router-link to="/login">登录</router-link></el-button>
          <el-button  class="wenzi" type="text"> <router-link to="/register">注册</router-link></el-button>
    
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              小花学生<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdowbtngg">
           
              <el-dropdown-item><router-link to="/wodebanji">我的班级</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/gerenziliao1">个人资料</router-link></el-dropdown-item>     
              <el-dropdown-item ><router-link to="/wodexuexi">我的学习</router-link></el-dropdown-item>  
              
             <el-dropdown-item ><router-link to="/gerenziliao2" divided >个人资料</router-link></el-dropdown-item>     
              <el-dropdown-item ><router-link to="/wodekecheng" divided >我的课程</router-link></el-dropdown-item>
             
            </el-dropdown-menu>
          </el-dropdown>
          </div>
      </el-col>
    </el-row>
    <!-- 正常头部点击后会切换的搜索-->
    <el-row v-show="!isshow" style="height:60px;" class="nav2">
      <el-col  >
      <a @click="test1" href="javascript:void 0" class="close">x</a>      
      <div class="headsear"> 
        <el-input placeholder="搜索课程名，课件名，老师，知识点"  class="hearinpu" >
        <i slot="suffix" class="el-input__icon el-icon-search changec"></i>
      </el-input>
      </div>
      </el-col>
    </el-row>
    
  </div>
  
</template>
<script>
export default {
 
 data(){
   return{isshow:true}
     
  },
  methods:{
    test:function(){ //vue的点击触发事件
      this.isshow = !this.isshow;     
    },
    test1:function(){
      this.isshow = !this.isshow; 
    },
  }
}
</script>
<style scoped>

.nav{height: 60px;color:#fff;line-height: 60px;
/* background:#328FFE; */
 border-top: 1px solid #D6D8DA !important;
    border-bottom: 1px solid #D6D8DA !important;
}
.wenzi{color:#fff }
.wenzi a{color: #fff}
.close{
     float: left;
    line-height: 60px;
    font-size: 30px;
    margin-left: 24px;
    color: #1865f2 !important;
    font-family: inherit !important;
    text-decoration: none !important;
   
}
.headersearch{margin-left:10px;}

.headsear{float: left;
 
  margin-left: 100px;
    width: 400px !important;
 
    height: 100% !important;
    max-width: none !important;
    line-height: 60px;
    }
    .changec{color:#888D93;font-weight:bold;font-size: 20px;}
    .nav1{background:#328FFE;}

  .dropdowbtn{border: none;
    background: #fff;
    color: #606266;
    font-size: 15px;width: 100%;padding:0 20px;} 
  .dropdowbtngg a{display: block;text-align: center}
   
</style>




