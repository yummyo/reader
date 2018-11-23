import Mock from 'mockjs' //引入mockjs，npm已安装
import { Random } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
	timeout:1000  //设置请求延时时间
})
let msgBody = {
	'code' : '1',
	'data':[],
	"msg":"success"
}
// 分类列表
Mock.mock('/apis/getCategoryList', /post|get/i,function(option){
	let data = [
		{
			"num":"2018052417334655340",
			"title":"恒星、 黑洞和星系",
			"img":"https://cdn.kastatic.org/genfiles/topic-icons/icons/universe_scale.png-9fa814-416.png",
			"tid":1,
			"content":"",
			"comment":2,
			"praise":100,
			"aid":1,
			"gade":1,
			"author":null,
			"hp_num":3,
			"sort":1528473600,
			"created_at":null
		},
		{
			"num":"2018052417334655340",
			"title":"恒星、 黑洞和星系",
			"img":"https://cdn.kastatic.org/genfiles/topic-icons/icons/universe_scale.png-9fa814-416.png",
			"tid":1,
			"content":"",
			"comment":2,
			"praise":100,
			"aid":1,
			"gade":1,
			"author":null,
			"hp_num":3,
			"sort":1528473600,
			"created_at":null
		},
		{
			"num":"2018052417334655340",
			"title":"恒星、 黑洞和星系",
			"img":"https://cdn.kastatic.org/genfiles/topic-icons/icons/universe_scale.png-9fa814-416.png",
			"tid":1,
			"content":"",
			"comment":2,
			"praise":100,
			"aid":1,
			"gade":1,
			"author":null,
			"hp_num":3,
			"sort":1528473600,
			"created_at":null
		},
		{
			"num":"2018052417334655340",
			"title":"恒星、 黑洞和星系",
			"img":"https://cdn.kastatic.org/genfiles/topic-icons/icons/universe_scale.png-9fa814-416.png",
			"tid":1,
			"content":"",
			"comment":2,
			"praise":100,
			"aid":1,
			"gade":1,
			"author":null,
			"hp_num":3,
			"sort":1528473600,
			"created_at":null
		},
	];
	msgBody.data = data
	return msgBody;
})
// 课程列表
Mock.mock('/apis/getCourseList', /post|get/i,function(option){
	let data = [
		{
			"num":"2018052417334655340",
			"title":"Web前端开发之JavaScript精英课堂",
			"img":"https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-416.png",
			"tid":1,
			"content":"",
			"comment":2,
			"praise":100,
			"aid":1,
			"gade":1,
			"author":null,
			"hp_num":3,
			"sort":1528473600,
			"created_at":null
		},
		{
			"num":"2018052417334655340",
			"title":"Web前端开发之JavaScript精英课堂",
			"img":"https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-416.png",
			"tid":1,
			"content":"",
			"comment":2,
			"praise":100,
			"aid":1,
			"gade":1,
			"author":null,
			"hp_num":3,
			"sort":1528473600,
			"created_at":null
		},
		{
			"num":"2018052417334655340",
			"title":"Web前端开发之JavaScript精英课堂",
			"img":"https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-416.png",
			"tid":1,
			"content":"",
			"comment":2,
			"praise":100,
			"aid":1,
			"gade":1,
			"author":null,
			"hp_num":3,
			"sort":1528473600,
			"created_at":null
		},
		{
			"num":"2018052417334655340",
			"title":"Web前端开发之JavaScript精英课堂",
			"img":"https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-416.png",
			"tid":1,
			"content":"",
			"comment":2,
			"praise":100,
			"aid":1,
			"gade":1,
			"author":null,
			"hp_num":3,
			"sort":1528473600,
			"created_at":null
		},
		{
			"num":"2018052417334655340",
			"title":"Web前端开发之JavaScript精英课堂",
			"img":"https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-416.png",
			"tid":1,
			"content":"",
			"comment":2,
			"praise":100,
			"aid":1,
			"gade":1,
			"author":null,
			"hp_num":3,
			"sort":1528473600,
			"created_at":null
		},
	];
	msgBody.data = data
	return msgBody;
})


