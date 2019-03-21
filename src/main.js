// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入第三方模块vue，相当于<script type="text/javascript" src="./vue.js"></script>
import Vue from 'vue'
// 引入一个App的组件
import App from './app/App'
// 引入一个router
import router from './router'

// 提示信息
Vue.config.productionTip = false

/* eslint-disable no-new */
// 创建vue实例
new Vue({
  // 挂载到app这个div上
  el: '#app',
  // 使用路由
  router,
  // 注册组件，es6的写法
  components: { App },
  template: '<App/>'
})
