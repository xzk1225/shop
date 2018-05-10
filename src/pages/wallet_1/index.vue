<template>
  <div>
    <div class="phone_box">
     <div class="phone_container" style="display: block;">

<div class="wbody z_all" id="z_all" style="background:#f2f2f2;">
    <div class="container">
        <div class="row">
              <div class="row">
            <div class="black_box w_style z_head" id="z_head">
                <div class="public-title-box w_style z_title" id="z_title">
                   <img class="bg" src="">
                    <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/icon_back_pale_green.png"></a>
                    <h4 class="tv_title" id="tv_title">钱包管理</h4>
                </div>
                <div class="top"></div>
                <div class="yk_me">
                    <img class="iv_avatar" id="iv_avatar" src="/static/images/default_avatar.9.png" />
                    <div class="tv_money_desc" id="tv_money_desc">我的余额</div>
                    <div class="tv_money" id="tv_money">￥{{balance.money}}</div>
                </div>
            </div>
      
      <div class="w_style tab_middle" id="tab_middle">
        <a href="../bicycle_recharge_1/main" class="col-xs-6 w_style z_recharge" id="z_recharge">
              <img src="/static/images/wallet_1_icon_recharge.png" class="iv_recharge" id="iv_recharge"/>
              <span class="tv_recharge" id="tv_recharge">充值</span>
        </a>
        <!-- <div class="vertical_line" id="vertical_line"></div> -->
        <a href="../withdrawal_1/main" class="col-xs-6 w_style z_withdrawal" id="z_withdrawal">
            <img class="iv_withdrawal" id="iv_withdrawal" src="/static/images/wallet_1_icon_withdrawal.png">
            <span class="tv_withdrawal" id="tv_withdrawal">提现</span>
        </a>
      </div>
      <div class="line"></div>
      <div class="content_list">
        <a href="../card_list_1/main">
          <div class="public-list-100 w_style z_card" id="z_card">
          <div class="list_left">
            <img src="/static/images/wallet_1_icon_card.png"class="iv_card_icon" id="iv_card_icon">
            <span class="tv_card_desc" id="tv_card_desc">我的银行卡</span>
          </div>
          <div class="list_right">
            <!-- <span class="iv_card_arrow" id="iv_card_arrow"></span> -->
          <span class="tv_card" id="tv_card">{{list.length}}</span>
          <img src="/static/images/right.png" class="iv_card_arrow iv_withdrawal_list_arrow" id="iv_card_arrow">

          </div>
          </div>
        </a>
        <a href="../withdrawal_list_2/main">
          <div class="public-list-100 w_style z_withdrawal_list" id="z_withdrawal_list">
            <div class="list_left">
              <img src="/static/images/wallet_1_icon_withdrawal_list.png" class="iv_withdrawal_list_icon" id="iv_withdrawal_list_icon">
            <span class="tv_withdrawal_list_desc" id="tv_withdrawal_list_desc">提现记录</span>
            </div>
            <img src="/static/images/right.png" class="iv_withdrawal_list_arrow" id="iv_withdrawal_list_arrow">
          </div>
        </a>
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
.top{height: 0.9rem;}
.row{background: #fff;color: #555555;}
.z_title{height: 0.9rem;background: #2f91e8;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.z_video{margin-top: 0.9rem;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;}
.tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}

.yk_me{background: #1A9CE9;color: #fff;font-size: 0.3rem;}
.yk_me{height: 3.24rem;display: flex;justify-content: center;flex-direction: column;align-items: center;}
.yk_me .iv_avatar{width: 1.36rem;height: 1.36rem}
.tv_money_desc{margin-top: 0.3rem;}
.tv_money{margin-top: 0.3rem;}
.tab_middle{display: flex;}
.tab_middle .col-xs-6{width: 50%;height: 0.8rem;display: flex;justify-content: center;align-items: center;}
.tab_middle img{width: 0.4rem;height: 0.4rem;margin-right: 0.2rem;}
.line{height: 0.2rem; background:#eee;}
.public-list-100{height: 0.8rem;font-size: 0.3rem;display: flex;justify-content: space-between;padding:0 0.2rem;border-bottom: 0.02rem solid #eee;align-items: center;}
.list_left {display: flex;align-items: center;}
.list_left img{width: 0.4rem;height: 0.4rem;margin-right: 0.16rem;}
.iv_withdrawal_list_arrow{width: 0.26rem;height: 0.46rem;}
.list_right{display: flex;align-items: center;}
</style>




<script>

export default {

  data () {
    return {
      balance:{},
      list:[]
  }
  },

  components: {
  },

  methods: {
  // 余额的方法
  getdata(){
    this.$post({data:'pay/account'},{app_id:this.$getS('app_id'),access_token:this.$getS('token')}).then(res=>{
      that.balance=res.data.result
    })
    // 获取银行卡的个数。
      this.$post({data:'withdraw/getUserBankList'},{app_id:this.$getS('app_id'),access_token:this.$getS('token')}).then(res=>{
      that.list=res.data.result
    })

  }
  },
  mounted(){
     this.getdata()
  },
  created () {
    // 调用应用实例的方法获取全局数据
   
},
onShow(){

  this.getdata()

}
}
</script>

