<template>
<!--登陆-->
  <div class="login"  :style ="note">
     <el-row type="flex" class="row-bg logincontent" justify="center">
     <el-col :span="12" class="loginleftcol">
       <div class="login_main_l float_l">
       
          <div class="inner">
            <h1 class="mainHeading">Good to see you again!</h1>
            <div class="description">
              <span>By logging into Khan Academy, you agree to our
                <a href="" target="_blank" style="color: inherit;">Terms of use</a>and
                <a href="" target="_blank" style="color: inherit;">Privacy Policy</a>.</span></div>
          </div>

       
       
       </div>
       </el-col>
     
     <el-col :span="12">
      <div class="login_main_r float_r">  
				<div class="login_main_r_title">登录</div>
				<form id="login_form" onsubmit="return false;">
				<div class="login_main_r_name input_text"><input type="text" name="username" placeholder="请输入邮箱" value=""></div>
				<div class="login_main_r_password input_text"><input type="password" name="pwds" placeholder="请输入密码" value=""></div>
				<div class="login_main_r_login"><input type="submit" onclick="return button()" value="登录"></div>
				</form>
				<div class="login_main_r_other">
          <p style="float:left;font-size:12px;color:#808090;"><span style="color:red">*</span>支持微演示账号密码登录</p>
          <!-- <a href="/forgotpw">忘记密码？</a> -->
          <router-link to="/forgotpw">忘记密码？ </router-link>
        </div>
				<div class="login_main_r_tips">还没有阅课网帐号？</div>
				<div class="login_main_r_register">
          <!-- <a href="http://localhost:8080/#/register">立即注册</a> -->
          <router-link to="/register">立即注册 </router-link>
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
    .login{width: 100%;
    height: 870px;
    background: url("../../assets/logo_bg.jpg") no-repeat center top;
    background-size: 100% 100%;padding-top:90px;}

.logincontent{width: 830px;    height: 450px;margin: 0 auto 150px;
    background-color: #fff;
    overflow: hidden;position: relative;    border-radius: 10px;
        -moz-box-shadow: 0px 5px 30px #999;
    -webkit-box-shadow: 0px 5px 30px #999;
    box-shadow: 0px 5px 30px #999;}

.loginleftcol{ background-color: #00294A !important;}
.login_main_l {
    width: 365px;
    height: 400px;
    margin-top: 50px;
    margin-left: 50px;
    border-right: 1px solid #F0F0F5;
     }
.float_l {
    float: left;
}
.mainHeading{  max-width: 354px ;
    font-size: 23px ;
    line-height: 1.25 ;   
    margin-right: 48px ;
        color: #FFFFFF;}

.description{         color: #FFFFFF !important;
    max-width: 334px !important;
    font-weight: 400 !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    margin-top: 16px !important;
    margin-bottom: 0px !important;
    font-size: 17px !important;
    line-height: 1.47 !important;}
   
  
.description a{text-decoration: underline}

.login_main_r {
    width: 320px;
    height: 420px;
    margin-top: 30px;
    margin-right: 50px;
}
.float_r {
    float: right;
}
.login_main_r_title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    letter-spacing: 1em;
    text-align: center;
    font-size: 28px;
    color: #333333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;}
 .login_main_r_name {
    width: 100%;
    height: 40px;
    margin-top: 20px;
}
.login_main_r_password {
    width: 100%;
    height: 40px;
    margin-top: 15px;
}
.login_main_r_login {
    width: 100%;
    height: 40px;
    margin-top: 15px;
    position: relative;
}
.login_main_r_other {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: right;
}
.login_main_r_other a {
    font-size: 12px;
    color: #3396FB;
}

.input_text input{width: 300px; height: 40px; line-height: 40px; 
padding: 0 10px; font-size: 14px; color: #A9A9A9; border: 1px solid #DDDDDD;}

.login_main_r_login input {
    width: 322px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    background-color: #3396FB;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    outline: 0;    border-radius: 5px;}
.login_main_r_tips {
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
.login_main_r_register {
    width: 100%;
    height: 40px;
}
.login_main_r_register a {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 40px;
    text-align: center;
    color: #3396FB;
    font-size: 14px;
    border: 1px solid #3396FB;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>


