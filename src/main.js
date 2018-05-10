import Vue from 'vue'
import App from './App'
import reques from './utils/reques.js'
Vue.prototype.$post = reques.getdata
Vue.prototype.$setS = reques.setS
Vue.prototype.$getS = reques.getS
Vue.prototype.$nav = reques.nav
Vue.prototype.$toast = reques.toast
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main',
     '^pages/merchandise_cate_1/main',
     'pages/merchandise_search/main',
     'pages/merchandise_exaluation_1/main',
     'pages/merchandise_list_2/main',
     'pages/merchandise_detail_2/main',
      'pages/merchandise_comment_1/main',
      'pages/merchandise_cart_2/main',
      'pages/merchandise_buy_2/main',
      'pages/address_list_1/main',
      'pages/address_add_1/main',
      'pages/merchandise_me_1/main',
      'pages/user_info_1/main',
      'pages/update_sex_1/main',
      'pages/update_nick_1/main',
       'pages/update_phone_1/main',
      'pages/update_name_1/main',
      'pages/update_address_1/main',
      'pages/update_sign_1/main',
      'pages/integral_detail_1/main',
      'pages/wallet_1/main',
      'pages/bicycle_recharge_1/main',
      'pages/withdrawal_1/main',
      'pages/card_list_1/main',
      'pages/card_list_del_1/main',
      'pages/card_add_1/main',
      'pages/withdrawal_list_2/main',
      'pages/merchandise_order_manage_1/main',
      'pages/feedback_2/main',
      'pages/about_2/main',
     ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      backgroundColor: "#eeeeee",
    },
      "tabBar": {
    "color": "#6e6d6b",
    "selectedColor": "#3397FD",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/merchandise_cate_1/main",
        "iconPath":'/static/images/sy.png',
        "text": "首页"
      },
     
      {
        "pagePath": "pages/merchandise_cart_2/main",
        "iconPath":'/static/images/my.png',
        "text": "购物车"
      },
       {
        "pagePath": "pages/merchandise_me_1/main",
        "iconPath":'',
        "text": "我的"
      }
    ]
  }
  }
}
