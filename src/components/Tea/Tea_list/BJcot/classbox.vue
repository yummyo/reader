<template>
<!-- 创建班级，弹窗 -->
  <div class="createboxclass">
    <h3 class="alerttit">给您的课堂命名</h3>
     <!-- 第一组 -->
     <div class="alertgroup">
      <el-checkbox   class="alertcheckbox">输入您的班级名称</el-checkbox >
      <div class="alertcot">
        <div class="alertbjde"><span>班级名称</span><span class="">0 / 50</span></div>
        <form action="">
            <input placeholder="示例, 九年(7)班" class="inputBase"  value="">
        </form>
        <span>此班级名称是您的学生将会看到的.</span>
      </div>
    </div>   

   

  </div>
</template>
<script>
export default {
}

</script>
<style scoped>

.createboxclass{
  width:100%;height: 400px;
  text-align: left;
}
/* .alertgroup{} */
.alerttit{    font-size: 22px !important;
    line-height: 26px !important;
        -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    display: block !important;
    font-family: Lato, sans-serif !important;
    font-weight: 700 !important;
    padding-bottom: 20px !important;
    }
/* .alertcheckbox{} */
.alertcot{    padding-top: 4px !important;
    padding-bottom: 24px !important;
    width: 333px !important;
    padding-left:25px;}
.alertbjde{   
   display: -moz-box !important;
    display: -ms-flexbox !important;
    display: -webkit-box !important;
    display: -webkit-flex !important;
    display: flex !important;
    justify-content: space-between !important;
    font-family: inherit !important;
    font-size: 17px !important;
    font-weight: normal !important;
    line-height: 23px !important;
    -webkit-justify-content: space-between !important;
    -ms-flex-pack: justify !important;
    -webkit-box-pack: justify !important}

.alertcot form{    width: 100%;
    border: 1px solid rgb(214, 216, 218);
        height: 40px !important;
    border-radius: 4px !important;
    box-sizing: border-box !important;
    padding: 8px 10px !important;
    display: -moz-box !important;
    display: -ms-inline-flexbox !important;
    display: -webkit-box !important;
    display: -webkit-inline-flex !important;
    display: inline-flex !important;
    align-items: center !important;
    background-color: #FFFFFF !important;
    -moz-box-sizing: border-box !important;
    -webkit-align-items: center !important;
    -ms-flex-align: center !important;
    -webkit-box-align: center !important;
}

input{background: inherit !important;
    border: none !important;
    font-family: inherit !important;
    font-size: 15px !important;
    line-height: 22px !important;
    outline: none !important;
    width: 100% !important;}

</style>
