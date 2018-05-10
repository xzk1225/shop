import Vue from 'vue'
import App from './index'
// import VueScroller from 'vue-scroller'
// Vue.use(VueScroller);

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '查看启动日志'
  }
}
