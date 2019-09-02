<template>
  <div class="footer">
    <el-row>
      <el-col :span="24">
        <div class="grid-content ">
          <el-row>
            <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
              <div class="grid-content ">
                <el-row>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="grid-content ">tit1</div></el-col>
                  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <div class="grid-content ">tit2</div></el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
              <div class="grid-content -light">
                <el-row :gutter="10">
                  <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
                    <div class="grid-content ">about1</div></el-col>
                  <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
                    <div class="grid-content ">about2</div></el-col>
                  <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="8">
                    <div class="grid-content ">about3</div></el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="grid-content bottomBlock">
          <el-row>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <div class="">
                <el-row>
                  <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                    <div class="grid-content ">zou1</div>
                  </el-col>
                  <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                    <div class="grid-content -light">zou2</div>
                  </el-col>
                  <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                    <div class="grid-content ">zou3</div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <div class="">you</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
  
</template>
<script>
export default {
  
}
</script>
<style scoped>
.footer {
background: #0a2a66;
clear: both !important;
color: #fff !important;
}
.el-col {
border-radius: 4px;
}

.grid-content {
min-height: 36px;
}
.bottomBlock{
font-family: inherit !important;
  font-size: 12px !important;
  line-height: 14px !important;
  align-items: center !important;
  border-top: 1px solid #DDDDDD !important;
  padding: 8px 0 !important;

}
</style>


