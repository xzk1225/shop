<template>
  <div>
    <div class="phone_box">
     <div class="phone_container" style="display: block;">
<div class="wbody z_all" id="z_all" style="background:#f2f2f2;">
    <div class="container">
        <div class="row">
            <div class="public-title-box w_style z_title" id="z_title">
              <img class="bg" src="">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/zjt.png"></a>
                <div class="w_style z_search" id="z_search">
                  <img class="iv_search x_search" id="iv_search" src="/static/images/search.png"> 
                  <input type="text" class="iv_search x_input" name="" placeholder="输入搜索内容">
                </div>
            </div>
        <div class="list">
          <div class="x_item_all">
            <div class="w_style z_item_all" id="z_item_all">
              <img class="iv_item_img" id="iv_item_img" src="/static/images/mp.png">
              <div class="tv_item_name texte" id="tv_item_name">宽松长裤</div>
              <div class="tv_item_price texte" id="tv_item_price">￥0</div>
            </div>
          </div>
          <div class="x_item_all">
            <div class="w_style z_item_all" id="z_item_all">
              <img class="iv_item_img" id="iv_item_img" src="/static/images/mp.png">
              <div class="tv_item_name texte" id="tv_item_name">宽松长裤</div>
              <div class="tv_item_price texte" id="tv_item_price">￥0</div>
            </div>
          </div><div class="x_item_all">
            <div class="w_style z_item_all" id="z_item_all">
              <img class="iv_item_img" id="iv_item_img" src="/static/images/mp.png">
              <div class="tv_item_name texte" id="tv_item_name">宽松长裤</div>
              <div class="tv_item_price texte" id="tv_item_price">￥0</div>
            </div>
          </div><div class="x_item_all">
            <div class="w_style z_item_all" id="z_item_all">
              <img class="iv_item_img" id="iv_item_img" src="/static/images/mp.png">
              <div class="tv_item_name texte" id="tv_item_name">宽松长裤</div>
              <div class="tv_item_price texte" id="tv_item_price">￥0</div>
            </div>
          </div><div class="x_item_all">
            <div class="w_style z_item_all" id="z_item_all">
              <img class="iv_item_img" id="iv_item_img" src="/static/images/mp.png">
              <div class="tv_item_name texte" id="tv_item_name">宽松长裤</div>
              <div class="tv_item_price texte" id="tv_item_price">￥0</div>
            </div>
          </div><div class="x_item_all">
            <div class="w_style z_item_all" id="z_item_all">
              <img class="iv_item_img" id="iv_item_img" src="/static/images/mp.png">
              <div class="tv_item_name texte" id="tv_item_name">宽松长裤</div>
              <div class="tv_item_price texte" id="tv_item_price">￥0</div>
            </div>
          </div>
        </div>
      </div>
        </div>
    </div>
</div>
</div>
                                            </div>
  </div>
</template>
<style scoped>
.z_title{height: 0.9rem;background: #2f91e8;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.z_video{margin-top: 0.9rem;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;}
.tv_title{position: relative;z-index: 2;}
.z_search{width: 6.05rem;background: #fff;display: flex;align-items: center;position: relative;z-index: 2;margin-right: 0.44rem;}
.x_search{width: 0.3rem;height: 0.3rem;position: relative;margin-left: 0.2rem;}
.x_input{font-size: 0.3rem;margin-left: .1rem;}
.slide-image{width: 100%;}
.list-unstyled{display: flex;flex-wrap: wrap;}
.x_list{width: 25%;display: flex;justify-content: center;align-items: center;flex-direction: column;margin-top: 0.2rem;}
.iv_item_icon{width: 1.05rem;height:1.05rem; }
.content_list{margin-top: 0.2rem;}
.z_item_all_cate{display: flex;justify-content: center;flex-direction: column;align-content: center;}
.index_list{background: #fff;padding-bottom: 0.2rem;color: #555555;font-size:0.3rem;}
.tv_item_name{text-align: center;margin-top: 0.05rem;}
.content_list{background: #fff;}
.tag_name{display: flex;justify-content: center;font-size: 0.3rem;color: #1a9ce9;}
.list{display: flex;flex-wrap: wrap;margin-top:0.9rem;}

.x_item_all{width: 50%;display: flex;justify-content: center;align-items: center;flex-direction: column;margin-top: 0.2rem;}
.z_item_all{width: 3.3rem;display: flex;justify-content: center;align-items: center;flex-direction: column;border: 0.02rem solid #e0e0e0;}
.z_item_all img{width: 100%;}
.z_item_all .texte{display: flex;width: 100%;margin-left: 0.175rem;font-size: 0.3rem;color: #373737;}
.z_item_all .tv_item_price{color: #1a9ce9;}
</style>




<script>
// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.min.css';
// setTimeout(function () {
//       state.swiperObj =  new Swiper('#swiper', {
//         loop: true,
//         pagination: '.swiper-pagination',
//         autoplay: 2000,
//         paginationClickable: true
//       });
//     }, 100)
export default {

  data () {
    return {
        imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list:[
      {url:'/static/images/default_icon.png',text:'男装'},
      {url:'/static/images/default_icon.png',text:'女装'},
      {url:'/static/images/default_icon.png',text:'手机'},
      {url:'/static/images/default_icon.png',text:'数码'},
      {url:'/static/images/default_icon.png',text:'美妆'},
      {url:'/static/images/default_icon.png',text:'母婴'},
      {url:'/static/images/default_icon.png',text:'箱包'},
      {url:'/static/images/default_icon.png',text:'鞋'}


    ]
    }
  },

  components: {
 
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

