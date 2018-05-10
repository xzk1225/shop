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
                <h4 class="tv_title" id="tv_title">结算</h4>
            </div>
           <!--  <div class="public-title-box w_style z_title" id="z_title">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"></a>
                <h4 class="tv_title" id="tv_title">结算</h4>
            </div> -->
        <a href="../address_list_1/main">
      <div class="w_style z_addr" id="z_addr">
          <div>
          <div>
            <span class="tv_addr_name" id="tv_addr_name">{{address.accept_name}}</span>
            <span class="tv_addr_phone" id="tv_addr_phone">{{address.mobile}}</span>
            </div>
            <div class="tv_addr" id="tv_addr">{{address.all_address}} </div>
        </div>
        
        

        <img class="iv_addr_arrow" id="iv_addr_arrow" src="/static/images/icon-goto.png" />
      </div></a>
      
      <div class="content_list">
        <div class="w_style z_item_all" v-for='(info, key) in info'>
       
          <div  class="w_style z_item_all_goods" id="z_item_all_goods">
            <img class="iv_item_img center" :src="info.goods_img" />
            
            <div class="z_item_right">
              <div class="tit tv_item_name" id="tv_item_name">{{info.goods_name}}</div>
              <div class="attr tv_item_attribute" id="tv_item_attribute">
                <span v-for='item in info.spec_array'>{{item.name}}:<span>{{item.value}}</span></span>
                <!-- <span>尺码：</span><span>{{item.chi}}</span> -->
              </div>
              <div class="price">
                <div class="l tv_item_price" id="tv_item_price">
                  ￥{{info.goods_discount_price}}
                </div>
                <!-- <div class="right tv_item_num" id="tv_item_num">x1</div> -->
                <div class="tv_item_num" id="tv_item_num"><span>x{{info.numa}}</span></div>
              </div> 
            </div>
          </div>
        </div>
      </div>
      
        <!--     <div class="col-xs-12 bottom_box w_style z_bottom" id="z_bottom">
                <div class="total">
                    <div class="tit tv_money_desc" id="tv_money_desc">总计：</div>
                    <div class="price tv_money" id="tv_money">￥20,000.00</div>
                </div>
                <div class="btn btn-block btn-default public-btn-blue tv_settlement" id="tv_settlement">
                    付款
                </div>
            </div> -->
            <div class="col-xs-12 bottom_box w_style z_bottom" id="z_bottom">
                       
                <div class="cart_total">
                    <div class="tit tv_money_desc" id="tv_money_desc">总计：</div>
                    <div class="price tv_money" id="tv_money">￥{{price}}</div>
                </div>
                <div class="btn btn-block btn-default public-btn-blue tv_settlement" @click='pay' id="tv_settlement">
                  <img src="/static/images/merchandise_cart_2_bg_settlement.png">
                    <span>付款</span>
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
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}
  /*下方为开始主题部分*/
  .z_addr{margin-top: 0.9rem;padding: 0.2rem;font-size: 0.24rem;line-height: 1.5em;border-top: 0.16rem solid #f2f2f2;justify-content: space-between;display: flex;align-items: center;}
  .z_item_all_goods{padding: 0.2rem;border-top: 0.16rem solid #f2f2f2;display: flex;font-size: 0.24rem;color: #555555;}
  .row{background: #fff;}
  .center{height: 1.5rem;width: 1.5rem;}
  .iv_item_select{transform: scale(0.8,0.8)}
  .z_item_right{display: flex;flex-direction: column;color: #777777;margin-left: 0.2rem;line-height: 0.5rem;width: 4.55rem}
  .tv_item_price{color: #ff3c3f;}
  .price{display: flex;justify-content: space-between;}
  .num_box{border:0.02rem solid #eee;width: 2rem;justify-content: space-around;display: flex;}
  .num_box div{width: 30%;display: flex;justify-content: center;align-items: center;}
  /*.tv_item_num{border:0.02rem solid #eee; }*/
  /*.tv_item_num span{padding: 0.05rem 0.2rem; }*/
  .iv_addr_arrow{width: 0.4rem;height: 0.4rem;}
  .tv_money{color: #ff3c3f;}

  /*下方是 脚步的*/
  .z_bottom{height: 1.05rem;background: #f2f2f2;font-size: 0.24rem; position: fixed;bottom:0;width: 100%;display: flex;justify-content: space-between;}
  .sel_box{display: flex;align-items: center;}
  .iv_select_all{transform:scale(0.8,0.8);margin-left: 0.2rem;}
  .sel_box{width: 1.55rem;}
  .cart_total{display: flex;margin-left: 0.2rem;}
  .cart_total div{display: flex;align-items: center;}
  .tv_settlement{width: 1.925rem;display: flex;justify-content: center;align-items: center;position: relative;font-size: 0.3rem;}
  .tv_settlement span{position: relative;z-index: 2;color: #fff;}
  .tv_settlement img{width: 100%;height: 100%;position: absolute;z-index: 1}
  .tv_item_name{overflow: hidden;width: 100%;
            text-overflow: ellipsis;
           display: -webkit-box!important;
            -webkit-line-clamp: 2;
           -webkit-box-orient: vertical; }
</style>




<script>
import card from '@/components/card'
import store from '../../store.js'
import md5 from 'js-md5'
import reques from '../../utils/reques.js'
export default {

  data () {
    return {
    info:{},
    address:{},   //  地址信息。
    price:0
  }
  },

  components: {
 card
  },

  methods: {
    sign(data){
          data=data.sort(function(a,b){return a+"">b+"";});
          var str='';
          if(data){
            for (var k in data) {
              str += k + '=' + data[k] + '&'
            }
          }else{
            data={}
          }
          
          str +='key=0d4f8a7b9bf57d772905b1a88d822fd1';  
          data.sign=md5(str);
          
          return data
        },     
            

    check(){
      store.commit('check')
    },
    calculator(){
       this.price=0;
      for( var k in this.info){
                this.price+=this.info[k].numa*this.info[k].goods_discount_price
            }
            
    },
  
  pay(){
    let app_id=reques.getS('app_id'),token=reques.getS('token');
      console.log(this.$mp.query.type)
      let type=this.$mp.query.type   ;  // 支付的类型  0 为购物车进去，  1 为直接购买；
      if(type==1){    // 这是直接购买
            console.log(this.info)
      reques.getdata({data:'order/add'},
        {access_token:token,
          app_id:app_id,
          address_id:this.address.id,
          num:this.info[0].numa,
          product_id:this.info[0].product_id,
          goods_id:this.info[0].goods_id,
          shop_id:this.info[0].store_id}).then(res=>{

           let order_sn=  res.data.result.order_sn     // 订单号
            //  获取以后直接下单支付
              // reques.getdata({data:'order/pay'},{app_id:app_id,access_token:token,order_sn:order_sn,type:3})
            console.log(order_sn)
            var data={'timeStamp': new Date().getTime(),
                         'nonceStr': 'as2323assadsad56aassa',
                         'package': order_sn,
                         'signType': 'MD5',};
        wx.requestPayment({
                         'timeStamp': new Date().getTime(),
                         'nonceStr': 'as2323assadsad56aassa',
                         'package': order_sn,
                         'signType': 'MD5',
                         'paySign': that.sign(data),
                         'success':function(res){




                         },
                         'fail':function(res){
                         }
})         
      })

      }else{    // 这是从购物车购买 

        var str=[];
        for(var k in this.info){
          str.push({num:this.info[k].numa,
          product_id:this.info[k].product_id,
          goods_id:this.info[k].goods_id,
          shop_id:this.info[k].store_id})
        }

        console.log(str)
        
      reques.getdata({data:'order/add'},
        {access_token:token,
          app_id:app_id,
          address_id:this.address.id,
          cart:JSON.stringify(str)
        }).then(res=>{

           let order_sn=  res.data.result.order_sn     // 订单号
            //  获取以后直接下单支付
              // reques.getdata({data:'order/pay'},{app_id:app_id,access_token:token,order_sn:order_sn,type:3})
            console.log(order_sn)
            var data={'timeStamp': new Date().getTime(),
                         'nonceStr': 'as2323assadsad56aassa',
                         'package': order_sn,
                         'signType': 'MD5',};
                         
        wx.requestPayment({
                         'timeStamp': new Date().getTime(),
                         'nonceStr': 'as2323assadsad56aassa',
                         'package': order_sn,
                         'signType': 'MD5',
                         'paySign': that.sign(data),
                         'success':function(res){



                         },
                         'fail':function(res){
                         }
                        })         
      })
      }
  }
  },
  mounted(){
      let app_id=reques.getS('app_id'),that=this;
    
      this.info=reques.getS('pay');
        this.calculator();


      // 获取默认地址

      
      reques.getdata({url:'12312',data:'pvgo/address/detail'},{user_id:1157,app_id:1234})
      .then(res=>{
        that.address=res.data.data
      })

  },

  onShow(){

      reques.getdata({url:'12312',data:'pvgo/address/detail'},{user_id:1157,app_id:1234})
      .then(res=>{
        that.address=res.data.data
      })
  },
// computed: {

//     price () {
//       return store.state.price
//     },
//     shoplist(){
//       return store.state.shoplist
//     }
   
//   },
  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

