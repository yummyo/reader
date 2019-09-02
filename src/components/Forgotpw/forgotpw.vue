<template>
<!--忘记密码-->
  <div class="forgotpw"  :style ="note">
     <el-row  >
     <el-col :span="24" class="registerleftcol">
       <div class="registericon">
            <i class="el-icon-third-forgotpw"></i> 忘记密码
               
                  <span>已有账号?</span>
                  <!-- <a href="/login/login.html">立即登录</a> -->
                  <router-link to="/login">立即登录 </router-link>
             
              

       </div>
     
      </el-col>
     
     <el-col :span="24"  class="regitsercot">
           
        <div class="register_main_r ">  
				  <div class="register_main_r_title">忘记了密码？</div>
          <div class="tips"><span style="color:red">*</span><a href="javascript:;" onclick="xieyi();" title="点击查看协议" style="color:#3396FB;">请输入您的邮箱，以便我们识别您的身份。</a></div>


  
          <form id="register_form" onsubmit="return false;">
              <div class="register_main_con_item">
                <div class="register_main_con_item_l float_l register_num">邮箱帐号</div>
                <div class="register_main_con_item_r float_r register_email">
                  <input type="text" name="email" class="yzfs" placeholder="请输入邮箱帐号" id="jfs"/>
                </div>
              </div>        

              <div class="register_main_con_item" >
                <div class="register_main_con_item_l float_l">验证码</div>
                <div class="register_main_con_item_r float_r queren"><input type="password" name="rpwds" placeholder="请输入验证码"><img src="http://yueke.pptlook.com/register/verify.html" id="verify_img"></div>
              </div>                
            <div class="tijiao"><a href="javascript:;" onclick="return check()">下一步</a></div>
      
          </form>
			
				
      
      </div>

      <!-- 邮件发送成功后会跳转的页面 -->
      <div class="register_main_con forget_con">
        <div class="forget_con_item1">请检查您的电子邮件</div>
        <div class="forget_con_item2">您的1158740196@qq.com邮箱账号将会收到一封电子邮件，其中包含有关如何创建新密码的说明。</div>
        <div class="forget_con_item3">没有收到电子邮件？</div>
        <div class="forget_con_item2">检查您的垃圾邮件文件夹以查找来自阅课网的邮件</div>
        <div class="forget_con_item">
          <!-- <a href="/login/login.html">返回登录</a> -->
          <router-link to="/login">返回登录 </router-link>
          </div>
	    </div>
     <!-- 邮件发送成功后会跳转的页面 -->
     </el-col>
  
    </el-row>


  </div>
  
</template>
<script>
export default {
  data(){
    return{ 
     note: {
            backgroundImage: "url(" + require("../../assets/logo_bg.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            // marginTop: "5px",
            // border:"1px solid red"
           
      }
           
    }
  }
}




</script>
<style scoped>
    .register{width: 100%;
    height: 870px;
    background: url("../../assets/logo_bg.jpg") no-repeat center top;
    background-size: 100% 100%;padding-top:90px;}

.registercontent{width: 830px;    
height: 640px;
background: greenyellow;
margin: 0 auto 150px;
    background-color: #fff;
    overflow: hidden;position: relative;    border-radius: 10px;
        -moz-box-shadow: 0px 5px 30px #999;
    -webkit-box-shadow: 0px 5px 30px #999;
    box-shadow: 0px 5px 30px #999;}



.registericon{    height: 60px;
    border-bottom: 1px solid #DDDDDD;
    overflow: hidden;    width: 1100px;margin:0 auto;    text-align: left;
    line-height: 60px;
 
    font-size: 20px;
    font-weight: 600;
    color: #333333;
    }

    .registericon span{font-size: 14px;    color: #333333;font-weight: normal}
 .registericon a{    font-size: 14px;    color: #3396FB;    margin-left: 5px;font-weight: normal}
  .registericon i{font-size: 20px;}
    .register_main_con_item {
    box-sizing: border-box;
    height: 40px;
    border: 1px solid #DDDDDD;
    margin-top: 15px;
    position: relative;
}
/*一行左侧*/
.register_main_con_item_l {
    width: 70px;
    height: 100%;
    line-height: 40px;
    text-align: right;
    font-size: 15px;
    color: #333333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
}
input{
    width: 230px;   
    display: inline-block;
    height: 38px;
    border: 0;
    line-height: 41px;outline:none;float: right;}

.registerleftcol{ background: #fff;}
  .regitsercot{background: #fff;}

.register_main_l {
    width: 365px;
    height: 400px;
    margin-top: 50px;
    margin-left: 50px;
    border-right: 1px solid #F0F0F5;
     }
.float_l {
    float: left;
}



   
  
.description a{text-decoration: underline}

.register_main_r {
    width: 382px;
    height: 420px;

    margin:88px auto ;
 
}
.float_r {
    float: right;
}
 .register_main_r_title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    letter-spacing: 0.1em;
    text-align: center;
    font-size: 28px;
    color: #333333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;}

    .input_text input{width: 300px; height: 40px; line-height: 40px; 
padding: 0 10px; font-size: 14px; color: #A9A9A9; border: 1px solid #DDDDDD; width: 322px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    background-color: #3396FB;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    outline: 0;
    border-radius: 5px;
} 

.register_main_r_tips {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #999999;
    font-size: 14px;
    border-top: 1px solid #DDDDDD;
    margin-top: 30px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}


.tijiao{ height: 40px; margin: 15px auto; background-color: #3396FB;}
.tijiao a{display: block; width: 100%; height: 100%; line-height: 40px; font-size: 14px; color: #FFFFFF; text-align: center; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}

.tips{    color: #999;
    margin-bottom: 20px;text-align: left;font-size: 13px;
    margin-top: 5px;}

    .tips a{color: #3396FB;
    outline: none;
    text-decoration: none;}
    #verify_img {
    width: 110px;
    height: 36px;
    position: absolute;
    right: 0;
    top: 1.5px;}

    /*邮件发送成功后会跳转的页面*/
    /*主题内容*/
.forget_con{width: 421px;margin: 0 auto; display: none;}
.forget_con>div{margin-bottom: 20px; color: #808080; overflow: hidden;}
.forget_con_item1{height: 36px; line-height: 36px; font-size: 30px; color: #4D4D4D; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
.forget_con_item2{height: 50px; line-height: 23px; font-size: 16px;}
.forget_con_item3{height: 26px; line-height: 26px; font-size: 20px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}
.forget_con_item{height: 20px; line-height: 20px; overflow: hidden;}
.forget_con_item a{font-size: 16px; color: #3396FB;}
.forget_con_item{text-align: left;}
</style>


