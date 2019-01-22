// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select,Row,Col,Option,Input,Breadcrumb,BreadcrumbItem,Card,Steps,Step,Rate,Tabs,TabPane,Pagination,Table,TableColumn,Dialog,Form,FormItem,Dropdown,DropdownMenu,DropdownItem } from 'element-ui';
import './mork/index'
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import store from './store/index'
import lazyLoad from "vue-lazyload"

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Select);
Vue.use(Row);
Vue.use(Input);
Vue.use(Col);
Vue.use(Option);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Card);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Rate);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use( Dropdown);
Vue.use( DropdownMenu);
Vue.use( DropdownItem);
// //懒加载
Vue.use(lazyLoad,{
  loading:require('../static/img/timg.jpg')
})
Vue.use(Vuex);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
