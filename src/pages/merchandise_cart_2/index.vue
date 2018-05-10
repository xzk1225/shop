<template>
  <div>
    <div class="phone_box">
     <div class="phone_container" style="display: block;">

<div class="wbody z_all" id="z_all" style="background:#f2f2f2;">
    <div class="container">
          <div class="row">
           <!--  <div class="public-title-box w_style z_title" id="z_title">
               <img class="bg" src="">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/zjt.png"></a>
                <h4 class="tv_title" id="tv_title">购物车</h4>
            </div> -->
      
      
      <div class="w_style z_item_all">
        
         <card />

      </div>
            <div class="col-xs-12 bottom_box w_style z_bottom" id="z_bottom">
                <div class="sel_box">
                    <input type="checkbox" name="" @click='check' :checked="check" class="icon iv_select_all" id="iv_select_all">
                    <div class="tit tv_select_all" id="tv_select_all">全选</div>
                    
                </div>         
                <div class="cart_total">
                    <div class="tit tv_money_desc" id="tv_money_desc">总计：</div>
                    <div class="price tv_money" id="tv_money">￥{{price}}</div>
                </div>
                
                  <div @click='settlement' class="btn btn-block btn-default public-btn-blue tv_settlement" id="tv_settlement">
                  <img src="/static/images/merchandise_cart_2_bg_settlement.png">
                    <span>结算</span>
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
  </div>
</template>
<style scoped>
  .z_title{height: 0.9rem;background: #2f91e8;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}
  .tv_merchandise_detail{height: 0.8rem;display: flex;align-items: center;font-size: 0.24rem;padding-left: 0.3rem;}
  .bg_img img{width: 100%;}
  .row{background: #fff;}
  .z_bottom{height: 1.05rem;background: #f2f2f2;font-size: 0.24rem; position: fixed;bottom:0;width: 100%;display: flex;justify-content: space-between;}
  .sel_box{display: flex;align-items: center;}
  .iv_select_all{transform:scale(0.8,0.8);margin-left: 0.2rem;}
  .sel_box{width: 3rem;}
  .cart_total{display: flex;}
  .cart_total div{display: flex;align-items: center;}
  .tv_settlement{width: 1.925rem;display: flex;justify-content: center;align-items: center;position: relative;font-size: 0.3rem;height: 100%;}
  .tv_settlement span{position: relative;z-index: 2;color: #fff;}
  .tv_settlement img{width: 100%;height: 100%;position: absolute;z-index: 1}
</style>




<script>
import card from '@/components/card'
import store from '../../store.js'
export default {

  data () {
    return {
     zongjia:0
  }
  },

  components: {
 card
  },

  methods: {
    check(){
      store.commit('check')
    },
      settlement(){
    store.commit('settlement')
  } 
  },
computed: {
    price () {
      return store.state.info.price
    },
    check () {
      return store.state.info.check
    }
   
  },
  created () {
    // 调用应用实例的方法获取全局数据
  
}
}
</script>

