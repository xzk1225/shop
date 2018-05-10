<template>
  <div>
    <div class="phone_box">
     <div class="phone_container" style="display: block;">

<div class="wbody z_all" id="z_all" style="background:#f2f2f2;">
    <div class="container">
        <div class="row">
   <!--    <div class="public-title-box w_style z_title" id="z_title">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"></a>
                <h4 class="tv_title" id="tv_title">我的</h4>
            </div> -->
              <div class="public-title-box w_style z_title" id="z_title">
               <img class="bg" src="">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/icon_back_pale_green.png"></a>

                <h4 class="tv_title" id="tv_title">我的</h4>
            </div>
                  
      <a href="../user_info_1/main">
        <div class="w_style z_user_info" id="z_user_info">
        <img class="bg" src="/static/images/merchandise_cart_2_bg_settlement (1).png">
        <img :src="info.avatar" class="iv_avatar" id="iv_avatar">
        <div class="tv_nick" id="tv_nick">{{info.user_nick }}</div>
      </div>
      </a>
      
      <div class="jf">
                <a href="../integral_detail_1/main" class="col-xs-6 z_wealth_money w_style z_points" id="z_points">
                    <div class="tv_points_desc" id="tv_points_desc">积分</div>
                    <div class="tv_points" id="tv_points">{{balance.points}}</div>
                </a>
                <a href="../wallet_1/main" class="col-xs-6 z_wealth_money w_style z_money" id="z_money">
                    <div class="tv_money_desc" id="tv_money_desc">钱包</div>
                    <div class="tv_money" id="tv_money">{{balance.money}}</div>
                </a>
            </div>
      
      <div class="w_style z_order" id="z_order">
        <span class="tv_order" id="tv_order">我的订单</span>
        <span class="iv_order_arrow" id="iv_order_arrow"></span>
        <!-- <span class="tv_order_more" id="tv_order_more">查看更多订单</span> -->
        <a href="../merchandise_order_manage_1/main?num=0">
          <div class="tv_order_more" id="tv_order_more">查看更多订单 <img src="/static/images/right.png"></div>
        </a>
      </div>
      <div class="w_style z_type_state">
                <a href="../merchandise_order_manage_1/main?num=0">
                  <div class="w_style z_type_state_1" id="z_type_state_1">
                    <img class="icon_state_1 iv_type_state_1" id="iv_type_state_1" src="/static/images/merchandise_me_1_icon_state_1.png" />
                    <p class="tv_type_state_1_desc" id="tv_type_state_1_desc">待付款</p>
                  </div>
                </a>
                <a href="../merchandise_order_manage_1/main?num=1">
                  <div class="w_style z_type_state_2" id="z_type_state_2">
                    <!-- <p class="icon_state_2 iv_type_state_2" id="iv_type_state_2"></p> -->
                    <!-- <img class="icon_state_2 iv_type_state_2" id="iv_type_state_2" src="" /> -->
                    <img class="icon_state_2 iv_type_state_2" id="iv_type_state_2" src="/static/images/merchandise_me_1_icon_state_1.png" />

                    <p class="tv_type_state_2_desc" id="tv_type_state_2_desc">待发货</p>
                  </div>
                </a>
                <a href="../merchandise_order_manage_1/main?num=2">
                  <div class="w_style z_type_state_3" id="z_type_state_3">
                    <img src="/static/images/merchandise_me_1_icon_state_3.png" class="icon_state_3 iv_type_state_3" id="iv_type_state_3">
                    <p class="tv_type_state_3_desc" id="tv_type_state_3_desc">已发货</p>
                  </div>
                </a>
                <a href="../merchandise_order_manage_1/main?num=3">
                  <div class="w_style z_type_state_4" id="z_type_state_4">
                    <img class="icon_state_4 iv_type_state_4" id="iv_type_state_4" src='/static/images/merchandise_me_1_icon_state_4.png'>
                    <p class="tv_type_state_4_desc" id="tv_type_state_4_desc">待评价</p>
                  </div>
                </a>
                <a href="../merchandise_order_manage_1/main?num=5">
                  <div class="w_style z_type_state_5" id="z_type_state_5">
                    <img src="/static/images/merchandise_me_1_icon_state_5.png" class="icon_state_5 iv_type_state_5" id="iv_type_state_5">
                    <p class="tv_type_state_5_desc" id="tv_type_state_5_desc">已完成</p>
                  </div>
                </a>
                
            </div>
      <div class="line"></div>
      <div class="content_list">
        <a href="../address_list_1/main">
          <div class="w_style z_address list" id="z_address">
            <div>
              <img class="iv_address" id="iv_address" src="/static/images/merchandise_me_1_icon_address.png">
              <span class="tv_address" id="tv_address">地址管理</span>
            </div>
            <img src="/static/images/right.png" class="iv_address_arrow right_jt" id="iv_address_arrow">
          </div>
        </a>
       <a href="../feedback_2/main">
          <div class="w_style z_feekback list" id="z_feekback">
            <div>
              <img src="/static/images/merchandise_me_1_icon_feedback.png" class="iv_feekback" id="iv_feekback">
              <span class="tv_feekback" id="tv_feekback">意见反馈</span>
            </div>
            <img src="/static/images/right.png" class="iv_feekback_arrow right_jt" id="iv_feekback_arrow">
          </div>
       </a>
        <a href="../about_2/main">
          <div class="w_style z_about list" id="z_about">
            <div>
              <img src="/static/images/merchandise_me_1_icon_about.png" class="iv_about" id="iv_about">
              <span class="tv_about" id="tv_about">关于我们</span>
            </div>
            <img src="/static/images/right.png" class="iv_about_arrow right_jt" id="iv_about_arrow" />
          </div>
        </a>
     <!--    <div class="w_style z_logout list" id="z_logout">
          <div>
            <img src="/static/images/merchandise_me_1_icon_logout.png" class="iv_logout" id="iv_logout">
            <span class="tv_logout" id="tv_logout">退出登录</span>
          </div>
            <img src="/static/images/right.png" class="iv_logout_arrow right_jt" id="iv_logout_arrow">

        </div> -->
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
  .row{background: #fff;color: #555555;}
  .z_title{height: 0.9rem;background: #2f91e8;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}



  .z_user_info{margin-top: 0.9rem;position: relative;height: 2.0rem;padding: 0 0.2rem;display: flex;align-items: center;}
  .z_user_info .bg{position: absolute;height: 100%;width: 100%;z-index: 1;}
  .iv_avatar{width: 1.2rem;height: 1.2rem;z-index: 2;}
  .tv_nick{z-index: 2;margin-left: 0.2rem;font-size: 0.26rem;color: #fff;}
  .jf{display: flex;}
  .tv_order_more{display: flex;align-items: center;}
  .tv_order_more img{width: 0.13rem;height: 0.23rem;margin-left: 0.16rem;}
  .z_wealth_money{width: 49%;display: flex;justify-content: center;align-items: center;flex-direction: column;height: 0.9rem;font-size: 0.26rem;color: #555;}
  .z_wealth_money:last-child{border-left: solid #eee 0.02rem;}
  .z_order{display: flex;padding: 0 0.2rem;justify-content: space-between;font-size: 0.26rem;height: 0.8rem;align-items: center;border-top: solid #eee 0.02rem;}
  .z_type_state{ display: flex;border-top: 0.02rem solid #eee; }
  .z_type_state p{margin-top: 0.14rem;}
  .z_type_state a{width: 20%;}
  .z_type_state div{width: 100%;display: flex;font-size: 0.26rem;height: 1.32rem;justify-content: center;align-items: center;flex-direction: column;}
  .z_type_state img{width: 0.5rem;height: 0.5rem;}
  .line{height: 0.2rem;background: #eee;}
  .list{font-size: 0.26rem;padding: 0 0.2rem;height: 0.8rem;display: flex;align-items: center;border-bottom: 0.02rem solid #eee;justify-content: space-between;}
  .list img{width: 0.28rem;height: 0.28rem;margin-right: 0.16rem;}
  .list .right_jt{width: 0.13rem;height: 0.23rem;margin-left: 0.16rem;}
  .z_about{border-bottom: 0.2rem solid #eee;}
</style>




<script>
import reques from '../../utils/reques.js'
export default {

  data () {
    return {
      info:null,
      balance:{}
  }
  },

  components: {
  },

  methods: {
  
  },
  mounted(){
    // 
   // let token=reques.getS('token'),app_id=reques.getS('app_id'),that=this;
   //  this.$post({data:'auth/userInfo'},{access_token:token,app_id:app_id}).then(res=>{
   //    that.info=res.data.result;
   //  })
   //  console.log()
  },

  created () {
    // 调用应用实例的方法获取全局数据
    let token=reques.getS('token'),app_id=reques.getS('app_id'),that=this;
    this.$post({data:'auth/userInfo'},{access_token:token,app_id:app_id}).then(res=>{
      that.info=res.data.result;
    });

    // 积分余额 和钱包余额
    this.$post({data:'pay/account'},{app_id:this.$getS('app_id'),access_token:this.$getS('token')}).then(res=>{
      that.balance=res.data.result
    })
},
onShow(){   //  生命周期 每次返回页面时候需要实时更新。
  this.$post({data:'pay/account'},{app_id:this.$getS('app_id'),access_token:this.$getS('token')}).then(res=>{
      that.balance=res.data.result
    })
}
}
</script>

