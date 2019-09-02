<template>
  <!-- 反馈与联系 -->
  <div> 
    <h3>反馈与联系</h3>    
    <el-row>
      <el-col :span="12"><el-form ref="form" :model="form" label-width="80px" style="padding-top:30px;" class="feebackform">
  <el-form-item label="邮箱">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
   <el-form-item label="反馈" class="feedb">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit" size="small">提交</el-button>
    
  </el-form-item>
</el-form>
  
  
  
  </el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <table cellpadding="10" cellspacing="10" style="width:100%;">
			<tbody>
				<tr>
					<th>微信号：</th>
					<td style="padding:0"><img src="../../assets/qrcode.jpg" width="200" height="200"></td>
				</tr>
				<tr>
					<th>邮箱：</th>
					<td>contact@pptlook.com</td>
				</tr>
				<tr>
					<th>QQ：</th>
					<td>3386353812
						<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=3386353812&amp;site=qq&amp;menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:3386353812:51" alt="点击这里给我发消息" title="点击这里给我发消息"></a>
					</td>
				</tr>
				<tr>
					<th>官方QQ群：</th>
					<td>236870758
						<a target="_blank" href="https://jq.qq.com/?_wv=1027&amp;k=5r7swYo"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="点击这里加入群聊【阅课网技术服务群】" title="点击这里加入群聊【阅课网技术服务群】"></a>
					</td>
				</tr>
			</tbody>
		</table>
        
        
        </div></el-col>
      </el-row>
  </div>
</template>
<style scoped>
th{font-size: 14px;}

</style>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>