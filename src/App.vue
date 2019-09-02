<template>
  <div id="app">
    <el-container>
      <el-header><navheader></navheader></el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer><botfooter></botfooter></el-footer>
    </el-container>
  </div>
</template>

<script>
import navheader from '@/components/header'
import botfooter from '@/components/footer'
export default {
  name: 'App',
  components: {
    navheader,
    botfooter    
  },
}
</script>

<style>
html,body,#app {height: 100%;}
a{text-decoration: none;}
ul{list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{
  margin: 0px ;
  padding: 0px ;
}
.el-header,.el-main,.el-footer{padding: 0 !important;margin: 0 !important;}
.hearinpu input.el-input__inner{  
    background: #F0F1F2;border: none !important;font-family: inherit !important;outline: none !important;     font-weight: 700 !important;}

.searchborder input.el-input__inner{border: 1px solid #c6d1ad;}
.hearinpu input.el-input__inner::-webkit-input-placeholder,.searchborder input.el-input__inner::-webkit-input-placeholder{
        color: #757575;}/* 使用webkit内核的浏览器 */
.hearinpu input.el-input__inner:-moz-placeholder,.searchborder input.el-input__inner:-moz-placeholder{
        color: #757575;}/* Firefox版本4-18 */
.hearinpu input.el-input__inner::-moz-placeholder,.searchborder input.el-input__inner::-moz-placeholder{
        color: #757575;}/*  /* Firefox版本19+ */
.hearinpu input.el-input__inner:-ms-input-placeholde,.searchborder input.el-input__inner:-ms-input-placeholde{
color: #757575;}

/* classes中el-dialog的创建班级的框①给边框②给x左移 */
.dialog_class  .el-dialog__header {
    border-bottom: 1px solid #D6D8DA;
}
/* 为班级添加课程，课程的弹窗添加线 */
.dialog_course .el-dialog__header {
    border-bottom: 1px solid #D6D8DA;
}
.dialog_class .el-dialog__headerbtn{left: 20px;}
/*选中后的inputbox变灰色*/ 
.alertcheckbox .el-checkbox__input.is-checked+.el-checkbox__label{
 color: #3B3E40 ;
    font-size: 17px;
    font-weight: bold;
    line-height: 23px;}
/*选中后的标签变灰色,变圆形*/
.alertcheckbox  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
background: #3B3E40 ;
border-color: #3B3E40;
border-radius: 14px;
}
/* detail页面中的列表vue有margin */
.detailstabs .el-tabs__header{margin:0;}
/* 鼠标移入有鼠标 */
.headerbtn{cursor: pointer;}

/* 添加学生的时候的表格的表头 */
 .tableroster th{font-size: 14px !important;
    line-height: 15px !important;
    text-transform: uppercase !important;
    color: #21242C !important;
    white-space: nowrap !important;
    cursor: pointer !important;
    padding: 3px !important;
    padding-right: 17px !important;
    margin-left: -3px !important;
    font-weight: bold !important;}

.el-dialog{min-width: 400px;}
/* 老师查看问答中，搜索按钮变蓝色 */
.btngroup .el-input-group__append{background-color: #3396FB;color: #FFFFFF;cursor: pointer;}
/* 创建补充资料时候的labelwidth */
.supplement .el-form-item__label{width:84px !important;line-height: 20px;text-align: left;}
.supplement .el-form-item__content{margin-left:100px !important;}
/* 搜索框没有聚焦，移入是手指状态 */
.headersearch  .el-input__inner {cursor: pointer !important}

.headersearch  .el-input__icon{cursor: pointer !important}

 /* 吧学生添加到班级中的表头隐藏 */
.delheader .el-table__header-wrapper{display: none;}
/* roster.vue 学生列表中的组  headervue*/
/* .dropdowbtngg>.el-dropdown-menu__item{padding:0 }  */

/* 个人信息中的性别选择宽度为100% */
.grsex .el-select{width:100%}
/* 身份证的方向左对齐 */
.idcard .el-form-item__content{text-align: left;}


/* 个人信息的手机的发送验证码颜色变蓝色 */
.photip .el-input-group__append{background: #409EFF;color:#fff;}


.feedb .el-textarea__inner{height: 200px;}
/* 反馈与联系的字体 */

.feebackform .el-form-item__label{font-weight: bold;}







</style>
