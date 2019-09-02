<template>
  <!-- 添加班级学生，学生可以删除，每添加一个学生加入班级后，学生列表也会有增加 -->
  <div class="student">
    <el-row>
    <el-col :span="24"><div class="rostertit">
      
      <span class="headerText spana">您的学生 (0)</span>

      <span class="spanb">
        <!-- <button @click="addstudent = true"><span>从班级内添加学生</span></button> -->
        <div class="spanbdiv"style="font-size:14px;">从班级内添加学生</div>
        <div class="spanbdiv">
          <el-dropdown>
            <span class="el-dropdown-link">
              操作<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item> <button @click="addtoclass = true">添加到班级</button></el-dropdown-item>
              <!-- <el-dropdown-item>从班级中删除</el-dropdown-item> -->
              <el-dropdown-item><button @click="stopcourse = true">停止辅导工作</button></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </span>

       <el-dialog :visible.sync="addstudent" title="添加学生" class="dialog_course">
        邮件添加，二维码分享
          <div slot="footer" class="dialog-footer">       
          <el-button type="primary" @click="dialogFormVisible = false">确定添加</el-button>
          </div>
      </el-dialog>
      <el-dialog :visible.sync="addtoclass" title="添加班级" class="dialog_course">
          <ul>
            <li><a href="">xxx年级 <div><input type="checkbox"></div></a></li>
          </ul>
          <div slot="footer" class="dialog-footer">       
          <el-button type="primary" @click="dialogFormVisible = false">添加</el-button>
          </div>
      </el-dialog>
       <el-dialog :visible.sync="stopcourse" title="停止辅导工作" class="dialog_course">
        这些学生将从这个班级中被删除,你将看不到他们的进度.
        <div slot="footer" class="dialog-footer">       
         <el-button @click="dialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="dialogVisible = false">停止辅导工作分配</el-button>
            </div>
      </el-dialog>


 
      </div></el-col>
  </el-row>

  <el-row>


         <el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    style="width: 100%"
   class="tableroster">
    <el-table-column
      prop="name"
      label="学生姓名"
      width="120">
    </el-table-column>
     
    <el-table-column
      prop="address"
      label="	用户名 / 电子邮件地址"
       width="220"     >
    </el-table-column>
    <el-table-column
      prop="grap"
      label="班级"
       show-overflow-tooltip     >
    </el-table-column>
   
     <el-table-column
      type="selection"
      width="55">
    </el-table-column>
  </el-table>
  </el-row>

  </div>
</template>
<script>
export default {
 

data() {
      return {
        addstudent:false,
    addtoclass:false,
    stopcourse:false,
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          grap:'四年级'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
           grap:'五年级'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

  
}
</script>
<style scoped>
.student{padding:10px;}
.rostertit{ display: flex;
  flex-flow:  row nowrap;
  justify-content: space-between;
  /* padding: 20rpx 20rpx; */
    border-bottom: 1px solid #D6D8DA;
   
 }

  /* .rostertit span{ 
    width:200rpx;
   height:200rpx; 
    /* background: blue;
    }  */

  .spanbdiv{display: inline-block;}
.spana{    font-family: inherit !important;
    font-size: 17px !important;
    font-weight: bold !important;
    line-height: 23px !important;}

  
</style>
