import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '修改姓名',
    backgroundColor: "#f2f2f2",
  }
}