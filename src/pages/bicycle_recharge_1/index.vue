<template>
  <div>
    <div class="phone_box">
     <div class="phone_container" style="display: block;">

<div class="wbody z_all" id="z_all" style="background:#f2f2f2;">
    <div class="container">
        <div class="row">
                <div class="public-title-box w_style z_title" id="z_title">
                   <img class="bg" src="">
                    <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/icon_back_pale_green.png"></a>
                    <h4 class="tv_title" id="tv_title">余额充值</h4>
                </div>
      <div class="top"></div>
      <div class="content_list">
      
        <div class="w_style z_money" id="z_money">
          <span class="tv_money_desc" id="tv_money_desc" >充值金额</span>
          <!-- <span >请输入充值金额</span> -->
          <input type="number" name=""class="et_money" id="et_money" placeholder="请输入充值金额">
        </div>

        <radio-group class="radio-group" >
       <!--    <label class="radio" >
            <div class="w_style z_wxpay" id="z_wxpay">
              <div class="x_box">
                <img class="iv_wxpay" id="iv_wxpay" src="/static/images/bicycle_recharge_1_icon_wechat.png">
                <span class="tv_wxpay" id="tv_wxpay">微信</span>
              </div>
              <radio class="iv_wxpay_select x_radio" id="iv_wxpay_select" />
            </div>
          </label> 
          <label>
              <div class="w_style z_alipay" id="z_alipay">
                <span class="iv_alipay" id="iv_alipay"></span>
                <span class="tv_alipay" id="tv_alipay">支付宝</span>
                <radio class="iv_alipay_select x_radio" id="iv_alipay_select" />
              </div>
          </label> -->
        </radio-group>
          
      
            </div>
      
      <div class="btn w_style tv_recharge" id="tv_recharge" @click='play'>
        充值
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
.top{height: 0.9rem;}
.row{background: #fff;color: #555;font-size: 0.28rem;}
.z_title{height: 0.9rem;background: #fff;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.z_video{margin-top: 0.9rem;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
.tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;font-size: 0.32rem;}
.x_box{display: flex;align-items: center;}
.z_wxpay{display: flex;justify-content: space-between;align-items: center;padding: 0 0.2rem;}
.radio img{width: 0.41rem;height: 0.41rem;margin-right: 0.2rem;}
.x_radio{transform: rotate(0.8,0.8);}
.z_money{padding: 0.2rem;display: flex;flex-direction: column;}
.et_money{height: 0.8rem;background: #f3f3f3;color: #999;text-align: center;margin-top: 0.1rem;}
.tv_recharge{display: flex;margin: 0.6rem 0.2rem;background: red;height: 0.8rem;justify-content: center;align-items: center;color: #fff;} 

</style>




<script>

export default {

  data () {
    return {
  }
  },

  components: {
  },

  methods: {
  play(){

    wx.requestPayment({
   'timeStamp': '',
   'nonceStr': '',
   'package': '',
   'signType': 'MD5',
   'paySign': '',
   'success':function(res){
      console.log(1)
   },
   'fail':function(res){
    console.log(res)
   }
})
  }
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

