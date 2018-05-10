<template>
  <div>
    <div class="phone_box">
     <div class="phone_container" style="display: block;">

<div class="wbody z_all" id="z_all" >
    <div class="container">
        <div class="row">
            <div class="public-title-box w_style z_title" id="z_title">
               <img class="bg" src="">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/zjt.png"></a>
                <h4 class="tv_title" id="tv_title">关于我们</h4>
            </div>
            <div class="top"></div>
            <div class="yd_about_logo">
                <div class="w_style tv_tip" id="tv_tip">
                    我公司新上线用来开发原生互联网App源码商店可动态选购来自不同App中的功能界面组装生成自己的App，带对应的服务端后台。App是原生语言的，高效能、友好易用、可复制到其它项目中使用。面对特殊性需求可解决80%以上套路性功能，仅需开发20%自定义功能需求，节省80%的费用成本和开发周期。此款产品特点为可按照界面功能进行重组生成新应用。用户不需要购买多款就可以将多款应用功能自定义组合在一起，比如可将：映客直播＋美团＋跑腿代办＋社交（微信、圈子类别）＋LBS（地图位置服务）＋圈钱商城（一元夺宝微商类）进行组合，并可生成配套的后台（支持高并发分布式部署、redis、mongoDB等），并提供5天的服务器可供测试使用。提供全部包括服务端源代码，全部为手写原生代码（效能佳不卡顿、后续二次开发人人看的懂，绝不使用H5套壳）。可自用、可做代理。
                </div>
<div class="line"></div>
               
                <div class="w_style z_phone" id="z_phone">
                    <span class="tv_phone_desc" id="tv_phone_desc">客服热线：</span>
                    <span class="tv_phone" id="tv_phone">010-85790523</span>
                </div>
                
<div class="line"></div>
                <div class="w_style z_email" id="z_email">
                    <span class="tv_email_desc" id="tv_email_desc">客服邮箱：</span>
                    <span class="tv_email" id="tv_email">Service@shorigo.com</span>
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
.row{color: #555555;font-size: 0.3rem;}
.top{height: 0.9rem;}
.z_title{height: 0.9rem;background: #2f91e8;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.z_video{margin-top: 0.9rem;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;}
.tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}
.tv_tip{padding: 0.2rem;font-size: 0.3rem;}
.z_phone{padding: 0 0.26rem;height: 0.8rem;display: flex;align-items: center;border-top: 0.02rem solid #eee;border-bottom: 0.02rem solid #eee;margin-top: 0.2rem;}
.z_email{padding: 0 0.26rem;height: 0.8rem;display: flex;align-items: center;border-top: 0.02rem solid #eee;border-bottom: 0.02rem solid #eee;}

</style>




<script>

export default {

  data () {
    return {
      activer:0, 
      
       
       listarr:['待付款','待发货','已发货','待评价','已完成']

        }
  },

  components: {
 
  },

  methods: {
  
    
    click(index){
      this.activer=index
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
}}
</script>

