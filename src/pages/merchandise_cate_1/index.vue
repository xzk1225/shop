<template>
  <div>
    <div class="phone_box">
     <div class="phone_container" style="display: block;">
<div class="wbody z_all" id="z_all" style="background:#f2f2f2;">
    <div class="container">
        <div class="row">
<swiper class="bk_main_bg" :indicator-dots="indicatorDots"
  :autoplay="autoplay" :interval="interval" :duration="duration">
  <block :key='index' v-for="item in imgUrls">
    <swiper-item>
      <img :src="item" class="slide-image" />
    </swiper-item>
  </block>
</swiper>
      <div class="index_list">
        <div class="list-unstyled">
          <a :href="'../merchandise_list_2/main?cate_id='+item.cate_id" :key='index' v-for='item in list' class="x_list">
            <div  class="col-xs-3 text-center w_style z_item_all_cate" id="z_item_all_cate">
              <img class="iv_item_icon" id="iv_item_icon" src="/static/images/default_icon.png">
              <span class="tv_item_name" id="tv_item_name">{{item.cate_name}}</span>
            </div>
          </a>
        </div>
        </div>
      <!--  商品推荐遍历  start -->
      <div class="content_list">
        <div class="tag_name">
          <span class="tag_name">-----</span>
          <span class="tag_name w_style tv_quality" id="tv_quality">品质生活</span>
          <span class="tag_name">-----</span>
        </div>
        <div class="list"> 
          <a class="x_item_all" v-for='item in pz_list' :href="'/pages/merchandise_detail_2/main?goods_id='+item.goods_id" :key='index'>
            <div class="w_style z_item_all" id="z_item_all">
              <img class="iv_item_img" id="iv_item_img" :src="item.goods_img">
              <div class="tv_item_name texte" id="tv_item_name">{{item.goods_name}}</div>
              <div class="tv_item_price texte" id="tv_item_price">￥{{item.goods_price}}</div>
            </div>
          </a>
          
      <!--  商品推荐遍历  end -->
      <!--  商品推荐遍历  start -->
        </div>
      </div>

      <div class="content_list">
        <div class="tag_name">
          <span class="tag_name">-----</span>
          <span class="tag_name w_style tv_quality" id="tv_quality">热门商品</span>
          <span class="tag_name">-----</span>
        </div>
        <div class="list"> 
          <a class="x_item_all" v-for='item in rm_list' :href="'/pages/merchandise_detail_2/main?goods_id='+item.goods_id">
            <div class="w_style z_item_all" id="z_item_all">
              <img class="iv_item_img" id="iv_item_img" :src="item.goods_img">
              <div class="tv_item_name texte" id="tv_item_name">{{item.goods_name}}</div>
              <div class="tv_item_price texte" id="tv_item_price">￥{{item.goods_price}}</div>
            </div>
          </a>
          
      <!--  商品推荐遍历  end -->
       <!--  商品推荐遍历  start -->
        </div>
      </div>

      <div class="content_list">
        <div class="tag_name">
          <span class="tag_name">-----</span>
          <span class="tag_name w_style tv_quality" id="tv_quality">推荐商品</span>
          <span class="tag_name">-----</span>
        </div>
        <div class="list"> 
          <a class="x_item_all" v-for='item in tj_list' :href="'/pages/merchandise_detail_2/main?goods_id='+item.goods_id">
            <div class="w_style z_item_all" id="z_item_all">
              <img class="iv_item_img" id="iv_item_img" src="/static/images/mp.png">
              <div class="tv_item_name text" id="tv_item_name">宽松长裤</div>
              <div class="tv_item_price texte" id="tv_item_price">￥0</div>
            </div>
          </a>
          
      <!--  商品推荐遍历  end -->
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
  .tv_item_name{margin-top: 0.05rem;width: 100%;
   overflow: hidden;
            text-overflow: ellipsis;
           display: -webkit-box!important;
            -webkit-line-clamp: 2;
           -webkit-box-orient: vertical; }
  .content_list{background: #fff;}
  .tag_name{display: flex;justify-content: center;font-size: 0.3rem;color: #1a9ce9;}
  .list{display: flex;flex-wrap: wrap;}

  .x_item_all{width: 50%;display: flex;justify-content: center;align-items: center;flex-direction: column;margin-top: 0.2rem;}
  .z_item_all{width: 3.3rem;display: flex;justify-content: center;align-items: center;flex-direction: column;border: 0.02rem solid #e0e0e0;}
  .z_item_all img{width: 100%;}
  .z_item_all .texte{display: flex;width: 100%;margin-left: 0.175rem;font-size: 0.3rem;color: #373737;}
  .z_item_all .tv_item_price{color: #1a9ce9;}
</style>




<script>
import reques from '../../utils/reques.js'
import store from '../../store.js'
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
    ],
    pz_list:[],
    rm_list:[],
    tj_list:[]
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

      mounted(){
        let that=this;
        let app_id=reques.getS('app_id')
        // 获取商品的分类。
       reques.getdata({data:'shop/getShopCate'},{app_id:app_id}).then(res=>{
          
        console.log(res.data)
       // that.$set('list',res.data.result)
        that.list=res.data.result
      })


       // 获取商品的推荐列表

      reques.getdata({data:'shop/getCommendGoodList'},{app_id:app_id,type:1,p:1,num:4}).then(res=>{
          
        console.log(res.data)
       // that.$set('list',res.data.result)
        that.pz_list=res.data.result
      })

  

        // 热卖商品的推荐列表

      reques.getdata({data:'shop/getCommendGoodList'},{app_id:app_id,type:3,p:1,num:4}).then(res=>{
          
        console.log(res.data)
       // that.$set('list',res.data.result)
        that.rm_list=res.data.result
      })


        // 推荐商品的推荐列表

      reques.getdata({data:'shop/getCommendGoodList'},{app_id:app_id,type:4,p:1,num:4}).then(res=>{
          
        console.log(res.data)
       // that.$set('list',res.data.result)
        that.tj_list=res.data.result
      })

      // 获取购物车本地数据。

      var stat=reques.getS('state');// 获取字符串
      
      store.commit('state',stat)




    },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    console.log(this.$post)

  }
}
</script>

