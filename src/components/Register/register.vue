<template>
<!--注册-->
  <div class="register"  :style ="note">
     <el-row type="flex" class="row-bg registercontent" justify="center">
     <el-col :span="12" class="registerleftcol">
       <div class="register_main_l float_l">
       
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
      <div class="register_main_r float_r">  
				<div class="register_main_r_title">欢迎注册</div>
         <el-radio-group v-model="tabPosition" style="margin-top: 15px;">
    <el-radio-button label="学生">学生</el-radio-button>
    <el-radio-button label="老师">老师</el-radio-button>
    <el-radio-button label="家长">家长</el-radio-button>
    
  </el-radio-group>


  
				<form id="register_form" onsubmit="return false;">


          <div class="register_main_con_item">
            <div class="register_main_con_item_l float_l register_num">邮箱帐号</div>
            <div class="register_main_con_item_r float_r register_email">
              <input type="text" name="email" class="yzfs" placeholder="请输入邮箱帐号" id="jfs"/>
            </div>
          </div>

          <div class="register_main_con_item">
            <div class="register_main_con_item_l float_l">昵&nbsp;&nbsp;&nbsp;称</div>
            <div class="register_main_con_item_r float_r yonghuming"><input type="text" name="username" maxlength="15" placeholder="请输入您的昵称,字符长度在2~15之间" id="nicheng"></div>
          </div>

          <div class="register_main_con_item">
            <div class="register_main_con_item_l float_l">姓&nbsp;&nbsp;&nbsp;名</div>
            <div class="register_main_con_item_r float_r xingming"><input type="text" name="name" maxlength="8" placeholder="请输入您的真实姓名" id="mingcheng"></div>
          </div>

          <div class="register_main_con_item">
            <div class="register_main_con_item_l float_l">设置密码</div>
            <div class="register_main_con_item_r float_r shezhi"><input type="password" name="pwds" maxlength="30" placeholder="请设置登录密码,密码长度为8~30个字符,必须包含字母和数字"></div>
          </div>

          <div class="register_main_con_item" >
				<div class="register_main_con_item_l float_l">确认密码</div>
				<div class="register_main_con_item_r float_r queren"><input type="password" name="rpwds" placeholder="请再次输入密码"></div>
			</div>




        <div class="tips"><span style="color:red">*</span>点击注册即表示您同意<a  @click="xieyi = true" title="点击查看协议" style="color:#3396FB;">《注册协议》</a></div>
          <el-dialog
            title="注册协议"
            :visible.sync="xieyi"
            width="800px" height="550px"
            center>
           <div style="height:500px;overflow:auto ">
             <div style="padding:15px;"><h4 style="line-height: 2em;">第一章&nbsp;总则<br></h4><p style="white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第1条 “阅课网”为上海路课文化传播有限公司注册商标，任何人未经上海路课文化传播有限公司许可不得以任何形式擅自使用。</p><p style="white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第2条 阅课网是上海路课文化传播有限公司为用户提供的课件文件转换、录制、发布、分享工具，提供用户在线分享文档、音频、视频的开放平台。</p><p style="white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第3条 阅课网所有权利归属上海路课文化传播有限公司。</p><p style="white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第4条 本协议最终解释权归属上海路课文化传播有限公司。</p><p style="white-space: normal; background: rgb(255, 255, 255);"><br></p><h4 style="line-height: 2em;">第二章&nbsp;用户</h4><p style="white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第5条 凡是注册用户和浏览用户均为阅课网用户（以下统称“用户”）。阅课网用户包含机构与个人。</p><p style="white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第6条 用户的个人信息受到保护，不接受任何个人或单位的查询。国家机关依法查询除外，用户的个人设置公开除外。</p><p style="white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第7条 用户享有言论自由的权利。</p><p style="white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第8条 用户的言行不得违反 《计算机信息网络国际联网安全保护管理办法》、《互联网信息服务管理办法》、《互联网电子公告服务管理规定》、《维护互联网安全的决定》、《互联网新闻信息服务管理规定》等相关法律规定，不得在阅课网制作、发布、传播或以其它方式传送含有下列内容之一的信息： 1） 反对宪法所确定的基本原则的； 2） 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的； 3） 损害国家荣誉和利益的； 4） 煽动民族仇恨、民族歧视、破坏民族团结的； 5） 破坏国家宗教政策，宣扬邪教和封建迷信的； 6） 散布谣言，扰乱社会秩序，破坏社会稳定的； 7） 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的； 8） 侮辱或者诽谤他人，侵害他人合法权利的； 9） 煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的；10）以非法民间组织名义活动的；11) 含有虚假、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、或其它道德上令人反感的内容； 12） 含有中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其它内容的。</p><p style="white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第9条 用户不得在阅课网发布任何形式的广告。</p><p style="white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第10条 用户应承担一切因其个人的行为而直接或间接导致的民事或刑事法律责任，因用户行为给上海路课文化传播有限公司造成损失的，用户应负责赔偿。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第11条 阅课网拥有对违反本协议的用户进行处理的权力，直至禁止其使用阅课网服务。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第12条 禁止任何使用刷分工具等非法软件进行批量、违规上传文档、制作课件、恶意评价、评分的行为；禁止使用非法软件进行刷浏览量，点赞数，扰乱正常阅读的行为。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第13条任何用户发现文档、视频、音频内容涉嫌侮辱或者诽谤他人、侵害他人合法权益的或违反协议的，有权到投诉中心进行投诉。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255);"><br></p><h4 style="line-height: 2em;">第三章<span style="background-color: rgb(255, 255, 255);">&nbsp;</span><span style="background-color: rgb(255, 255, 255);">权利声明</span></h4><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第14条 阅课网是供网友在线制作、分享课程的开放平台，为网友提供信息存储空间。平台上所累积的课件包含的文档、音频、音频，均来自热心用户的积极上传。阅课网自身不编辑或修改用户上传的文档、视频、音频内容。对于用户上传的文档内容之真实性引发的全部责任，由用户自行承担。阅课网的用户不能侵犯包括他人的著作权在内的知识产权以及其他权利。一旦由于用户上传的文档、视频、音频发生权利纠纷或侵犯了任何第三方的合法权益，其责任由用户本人承担，因此给阅课网或任何第三方造成损失的，用户应负责全额赔偿。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第15条 阅课网用户不得侵犯包括他人的著作权在内的知识产权以及其他合法权利。如果由于用户上传的文档、视频、音频未经著作权人同意擅自对他人的作品进行全部或部分复制，修改，改编，翻译，汇编等，有可能侵害到他人的著作权时，不得把相关内容上传发布到阅课网。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第16条 阅课网的用户可以为介绍、评论、研究等目的，在合理的范围内适当引用他人已经发表的作品，但应当注明作者姓名、作品名称，并不得侵犯著作权人及其他权利人的合法权益。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第17条 用户承诺：其所上传的所有文档、视频、音频内容符合中国法律法规和规范性文件的相关规定，不侵犯任何第三方的合法权益。如用户违反前述保证，阅课网有权删除相关文档内容，并可以暂停或终止向该用户提供服务。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第18条 对于用户上传到阅课网上的任何内容，用户同意阅课网在全世界范围内享有免费的、永久的、不可撤销的、非排他性的使用和再许可的权利。阅课网享有修改、复制、发行、表演、展览、信息网络传播、改编、翻译、汇编等权利。同时，对于用户上传到阅课网内容的侵权行为，用户授权阅课网在全世界范围内进行维权。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第19条 如因阅课网用户上传的内容侵犯了第三方的合法权利，第三方向阅课网提出异议，阅课网有权删除相关的内容。提出异议者和文档上传者之间的相关法律问题得到解决后，以此为依据，向阅课网提出申请，阅课网可以恢复被删除的内容。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第20条 当权利人发现阅课网的内容侵犯其合法权益时，权利人应事先向阅课网发出“权利通知”，阅课网将根据中国法律法规和规范性文件的规定采取移除相关内容等合理措施。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第21条 用户从阅课网中获得的信息，未经事先许可，用户不得以盈利为目的自己或提供给第三方进行使用（符合法律规定的“合理使用”条件的除外）。否则，一切法律后果由该用户或第三方自负，与阅课网无关。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第22条 未经上海路课文化传播有限公司事先许可，禁止使用任何机器人、蜘蛛、其他自动设备，或手动程序来监视或复制阅课网网页或其所包含的任何内容。否则，阅课网有权依法追究法律责任。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255);"><br></p><h4 style="line-height: 2em;">第四章<span style="background-color: rgb(255, 255, 255);">&nbsp;</span><span style="background-color: rgb(255, 255, 255);">处罚规则</span></h4><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第23条 上海路课文化传播有限公司郑重提醒用户，若出现下列情况任意一种或几种，将承担包括被关闭全部或者部分权限、被暂停或被删除其帐号的后果，情节严重的，还将承担相应的法律责任。&nbsp;<br>1. 使用不雅或不恰当ID和昵称；&nbsp;<br>2. 多次涉及侵犯他人著作权、名誉权等合法权利。&nbsp;<br>3. 发表含有猥亵、色情、人身攻击和反政府言论等非法或侵权言论的；&nbsp;<br>4. 从事非法商业活动；&nbsp;<br>5. 使用刷分软件等非法软件进行批量、作弊上传文档、视频、音频的行为。使用非法软件进行刷浏览量，点赞数，扰乱正常阅读的行为。&nbsp;<br>6. 其他上海路课文化传播有限公司认为不恰当的情况。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第24条 凡文档出现以下情况之一，阅课网管理人员有权不提前通知作者直接删除，并依照有关规定作相应处罚。情节严重者，阅课网管理人员有权对其做出关闭部分权限、封禁直至删除其帐号。&nbsp;<br>1. 发表含有本协议第7条禁止发布、传播内容的文档、视频、音频；&nbsp;<br>2. 违反本协议第8条的规定，发布广告的；&nbsp;<br>3. 严禁用户以任何方式转让、出售自己的阅课网账号与财富值，一经发现，阅课网有权立即封禁该账号；&nbsp;<br>4. 其他上海路课文化传播有限公司认为不恰当的情况。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255);"><br></p><h4 style="line-height: 2em;">第五章<span style="background-color: rgb(255, 255, 255);">&nbsp;</span><span style="background-color: rgb(255, 255, 255);">附则</span></h4><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第25条 所有用户发表的文档、视频、音频而引起的法律纠纷，与上海路课文化传播有限公司无关。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第26条 阅课网如因系统维护或升级等而需暂停服务时，将事先公告。若因硬件故障或其它不可抗力而导致暂停服务，于暂停服务期间造成的一切不便与损失，阅课网不负任何责任。 由于阅课网的调整导致信息丢失和/或其他结果的，上海路课文化传播有限公司不承担任何责任。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第27条 阅课网有权根据中华人民共和国法律、法规及规范性文件的变化以及互联网及自身业务的发展情况，不断修改和完善包括本协议在内的阅课网帮助的相关条款。阅课网保留随时修改协议在内的阅课网帮助条款的权利。</p><p style="margin-bottom: 10px; white-space: normal; background: rgb(255, 255, 255); line-height: 2em;">第28条 本协议未涉及的问题参见国家有关法律法规，当本协议与国家法律法规冲突时，以国家法律法规为准。</p><p style="margin-bottom: 10px; background: rgb(255, 255, 255);"><br></p></div>
           </div>
            <span slot="footer" class="dialog-footer">
              <el-button >取 消</el-button>
              <el-button type="primary" >确 定</el-button>
            </span>
          </el-dialog>
        <div class="tijiao"><a >同意注册并提交</a></div>
    
        </form>
			
				<div class="register_main_r_tips">已有微课堂帐号</div>
				<div class="register_main_r_register">
          <!-- <a href="http://localhost:8080/#/register">立即注册</a> -->
          <router-link to="/login">请立即登陆 </router-link>
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
           
      },
      xieyi:false,     
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
input{float: right;
    width: 230px;   
    display: inline-block;
    height: 38px;
    border: 0;
    line-height: 41px;outline:none;}

.registerleftcol{ background-color: #00294A !important;}
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

.register_main_r {
    width: 320px;
    height: 420px;
    margin-top: 30px;
    margin-right: 50px;
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
    /*
 .register_main_r_name {
    width: 100%;
    height: 40px;
    margin-top: 20px;
}
.register_main_r_password {
    width: 100%;
    height: 40px;
    margin-top: 15px;
}
.register_main_r_register {
    width: 100%;
    height: 40px;
    margin-top: 15px;
    position: relative;
}
.register_main_r_other {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: right;
}
.register_main_r_other a {
    font-size: 12px;
    color: #3396FB;
} */

/* .input_text input{width: 300px; height: 40px; line-height: 40px; 
padding: 0 10px; font-size: 14px; color: #A9A9A9; border: 1px solid #DDDDDD;} */

/* .register_main_r_register input {
    width: 322px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    background-color: #3396FB;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    outline: 0;    border-radius: 5px;}*/
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
.register_main_r_register {
    width: 100%;
    height: 40px;
}
.register_main_r_register a {
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


.tijiao{width: 277px; height: 40px; margin: 0 auto; background-color: #3396FB;}
.tijiao a{display: block; width: 100%; height: 100%; line-height: 40px; font-size: 14px; color: #FFFFFF; text-align: center; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;}

.tips{    color: #999;
    margin-bottom: 20px;text-align: left;font-size: 13px;
    margin-top: 5px;}

    .tips a{color: #3396FB;
    outline: none;
    text-decoration: none;}
</style>


