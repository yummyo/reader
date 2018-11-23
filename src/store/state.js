
const state={
  showText:"state测试文本",
  // 课程列表测试数据
  courseData : [
    {
      'label':"数学",
      'src':"https://cdn.kastatic.org/genfiles/topic-icons/icons/arithmetic.png-af7472-128c.png",
      'child':[
        {'name':"一年级"},
        {'name':"二年级"},
        {'name':"三年级"},
        {'name':"四年级"},
        {'name':"五年级"}
      ]
    },
    {
      'label':"科学",
      'src':"https://cdn.kastatic.org/genfiles/topic-icons/icons/science.png-3b6492-128c.png",
      'child':[
        {'name':"宇宙学和天文学"},
        {'name':"卫生与医学"}
      ]
    },
    {
      'label':"艺术与人文",
      'src':"https://cdn.kastatic.org/genfiles/topic-icons/icons/humanities.jpg-9fb720-128c.jpeg",
      'child':[
        {'name':"语法"}
      ]
    },
    {
      'label':"大学、职业和更多",
      'src':"https://cdn.kastatic.org/genfiles/topic-icons/icons/college_careers_more.png-147262-128c.png",
      'child':[
        {'name':"大学申请"}
      ]
    }
  ],
  // 面包屑当行模拟的数据
  navList : [
    {'name':"首页",'link':'/index'},
    {'name':"数学",'link':'/index'},
    {'name':"一年级"},
  ]
}
export default state
