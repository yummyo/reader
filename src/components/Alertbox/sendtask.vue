<template>
<!-- 分配任务弹窗的内容，弹窗 -->
  <div class="sendtask">
    <div class="tasktit">
      <h1>分配 (3) 项</h1>
      <span>为所有选中的任务提供选项</span>
    </div>
    <hr>
    <div class="taskcont">
      
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><div class="">
          
          <label class="tag" for="">班级</label>
          <el-select v-model="value" placeholder="班级">
              <el-option>  一年级</el-option>
                <el-option>  二年级</el-option>
                  <el-option>  三年级</el-option>
            </el-select>         
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><div class="">
          <label class="tag" for="">学生</label>
          <el-select v-model="value" placeholder="学生">
              <el-option>  小白</el-option>
                <el-option>  小黄</el-option>
                  <el-option>  小明</el-option>
            </el-select></div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><div class="">
            <!-- <label for="">日期</label> -->
        <div class="block">
          <span class="demonstration tag">日期</span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"><div class="">
      <label class="tag" for="">时间</label>
        <el-time-select
      v-model="value1"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间">
    </el-time-select>
    </div>
    </el-col>
</el-row>
 
    </div>
  </div>
</template>
<script>
export default {   
     data() {
      return {
         labelPosition: 'top',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
      };
    }
  
  }
</script>
<style scoped>
.sendtask{}
.tasktit{}
.taskcont{}

.taskcont .el-col{margin-bottom: 10px;margin-top: 10px;}
.tag{    
    font-family: inherit !important;
    font-size: 17px !important;
    font-weight: bold !important;
    line-height: 23px !important;}

</style>
