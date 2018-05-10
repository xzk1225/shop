<template>
  <div >
    <div class="phone_box "  >
     <div class="phone_container" style="display: block;">

<div class="wbody z_all" id="z_all" style="background:#f2f2f2;">
    <div class="container">
       <div class="row" >
              <div class="public-title-box w_style z_title" id="z_title">
               <img class="bg" src="">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/zjt.png"></a>
                <h4 class="tv_title" id="tv_title">商品详情</h4>
            </div>
            <div class="pvgo_merchandise_detail x_pvgo_merchandise_detail">
                
                <swiper :indicator-dots="indicatorDots" class='x_swiper'
                :autoplay="autoplay" :interval="interval" :duration="duration">
                
                  <swiper-item>
                    <img :src="item" class="slide-image" :key='key' v-for='item in info.images'/>
                  </swiper-item>
               
              </swiper>
                    <div class="mask w_style z_sales" id="z_sales">
                        <span class="tv_sales_desc" id="tv_sales_desc">销量:</span>
                        <span class="tv_sales" id="tv_sales">{{info.goods_sales}}</span>
                    </div>
                
            </div> 
            <div class="pvgo_merchandise_detail_list">
                <div class="public-list-100">
                    <span class="left w_style tv_name" id="tv_name">{{info.goods_name}}</span>
                </div>
                <div class="public-list-100">
                    <span class="left w_style tv_discount_price_desc" id="tv_discount_price_desc">售价：</span>
                    <span class="left w_style tv_discount_price" id="tv_discount_price">￥{{info.goods_price }}</span>
                    <span class="left w_style tv_commission" id="tv_commission" v-if='info.goods_discount'>￥ {{info.goods_discount}} </span>
                </div>
            </div>
                 <a :href="'../merchandise_comment_1/main?goods_id='+goods_id">

                  <div class="w_style z_comment" id="z_comment">
                      <div >
                          <img src="/static/images/merchandise_detail_2_icon_comment.png" class="iv_comment" id="iv_comment">
                        <!-- <span class="iv_comment" id="iv_comment"></span> -->
                        <span class="tv_comment" id="tv_comment" >商品评价</span>
                      </div>
                   
                    <div>
                      <img src="/static/images/right.png" class="iv_comment_arrow" id="iv_comment_arrow">
                    </div>
                  </div>
                </a>
                      <div class="w_style tv_merchandise_detail" id="tv_merchandise_detail">商品详情</div>
      
            <div class="pvgo_merchandise_detail ">
                <div class="bg_img" >
                  <wxparse :content="info.goods_details" >
                </wxparse>
                  </div>
            </div>
            <div class="col-xs-12 bottom_box w_style z_bottom" id="z_bottom">
                <div class="icon-cart iv_cart" id="iv_cart">
                    <a href="../merchandise_cart_2/main">
                      <div class="x_cart">
                      <img src="/static/images/icon_cart.png">
                      <div class="cart_num tv_cart_num" id="tv_cart_num">{{num}}</div>
                    </div>
                    </a>
                    
                </div>
                <div class="btn btn-default btn-addcart tv_cart" id="tv_cart" @click='car'>
                    加入购物车
                </div>
                <!-- <a href="../merchandise_buy_2/main"  -->
                <div class="btn btn-default btn-buy tv_buy" id="tv_buy" @click='payle'>
                   
                    立即购买
                </div>
                
            </div>

  <!-- 购物车弹窗 -->
    <div class="car" v-if='modle'>
        <div class="photo">
          <img :src="info.goods_img">
          <div class="info">
            <div class="price" v-if='val'>{{val.goods_discount_price}}</div>
            <div class="price" v-else>{{info.goods_discount_price}}</div>
            <div class="style">
              {{typ}}
            </div>
          </div>
        </div>

     <div class="x_top">
        <div v-for='(item,key) in spec_array' :key='index' class="group">
        
      <div class="xz_title">{{item.name}}:</div>
      <radio-group class="item_box" >
        
      <label class="xz_item" @click='change(k,key)' :key='key'  v-for="k in item.value" >{{k}}<radio :value="k"/></label>
      </radio-group>
      </div>
       <div class="num xz_title">数量 <div class="operation"><span @click="add">+</span><span>{{numa}}</span><span @click="reduce">-</span></div></div>
     </div>
     <div class="gb" @click='gb'>X</div>

  <div class="x_but" @click='falsecar'>确定</div>
</div>
        </div>
         
        </div>
       
        
      </div>
      
        </div>
    </div>


</div>


                       





</template>
<style scoped>
  page{padding-bottom: 0.52rem;}
  .z_title{height: 0.9rem;background: #2f91e8;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}
  .x_pvgo_merchandise_detail{margin-top:0.9rem;height: 4.05rem;position: relative;}
  .z_sales{position: absolute;bottom: 0;height: 0.55rem;font-size: 0.26rem;color: #fff;background: rgba(0,0,0,.6);display: flex;align-items: center;padding-left: 0.2rem;width: 100%;}
  .slide-image{width: 100%;height: 100%;}
  .x_swiper{height: 100%;width: 100%;}
  .pvgo_merchandise_detail_list{height: 1.25rem;;border-bottom: 0.02rem solid #E0E0E0;font-size: 0.24rem;color: #555;}
  .public-list-100{padding-left: 0.30rem;height: 0.627rem;align-items: center;display: flex;}
  .tv_discount_price{color: #FF9001;}
  .tv_commission{text-decoration:line-through;margin-left: 0.1rem; }
  .z_comment{height: 0.925rem;align-items: center;display: flex;font-size: 0.24rem;padding:0 0.30rem;border-bottom: 0.02rem solid #E0E0E0;justify-content: space-between;}
  .iv_comment{width: 0.32rem;height: 0.32rem;}
  .tv_comment{margin-left: 0.08rem;}
  .iv_comment_arrow{width: 0.32rem;height: 0.32rem; }
  .z_comment div{display: flex;align-items: center;}
  .tv_merchandise_detail{height: 0.8rem;display: flex;align-items: center;font-size: 0.24rem;padding-left: 0.3rem;}
  .bg_img img{width: 100%;}
  .z_bottom{position: fixed;bottom: 0;height: 1.05rem;width: 100%;background: #fff;display: flex;color: #fff;}
  .iv_cart{flex:2;}
  .tv_cart{flex: 4;background: #FF9001;}
  .tv_buy{flex:4;background: #FF5400}
  .z_bottom>div{display: flex;justify-content: center;align-items: center;font-size: 0.3rem;}
  .z_bottom>a{display: flex;justify-content: center;align-items: center;font-size: 0.3rem;}
  .x_cart{width: 0.44rem;height: 0.44rem;position: relative;}
  .x_cart img{width: 100%;height: 100%;}
  .tv_cart_num{position: absolute;width: 0.32rem;height: 0.32rem;background: red;top: -0.16rem;right: -0.16rem;border-radius: 50%;display: flex;justify-content: center;align-items: center;font-size: 0.18rem;}
  /*购物车弹框*/
  .car{width: 100%;position: fixed;bottom: 0rem;height:5.5rem;background: #fff;padding-bottom: 0.6rem;display: flex;flex-direction: column;justify-content: center;align-items: center;}
  .x_but{height: 0.6rem;background: red;color: #fff;width: 100%;position: absolute;bottom: 0;font-size: 0.3rem;display: flex;justify-content: center;align-items: center;}
  .xz_title{font-size: 0.3rem;color: #333;width: 7.0rem;margin-left: 0.2rem;margin-top: 0.2rem;}
  .xz_item{font-size: 0.24rem;color: #333;margin-left: 0.2rem;margin-top: 0.1rem;display: flex;padding: 0.1rem 0.15rem;background: #eee;align-items: center;}
  .item_box{display: flex;flex-wrap: wrap;}
  .photo{display: flex;width: 75%;background: #fff;position: relative;}
  .photo img{width: 2rem;height: 2rem;position: absolute;bottom: 0rem;}
  .photo .info{margin-left: 2.2rem;height: 1.2rem;}
  .x_top{height: 3.5rem;overflow-y: scroll;display: flex;justify-content: center;flex-direction: column;border-top: 0.02rem solid #eee;padding-top: 0.5rem;}
  .group{width: 7.0rem;}

  radio{transform: rotate(0.6,0.6);margin-left: 0.1rem;}
  .gb{position: absolute;right: 0.3rem;top: 0.1rem;}
  .num{display: flex;margin-top: 0.5rem;align-items: center;margin-bottom: 0.3rem;}
  .operation{display: flex;margin-left: 0.2rem;}
  .num span{ padding: 0.1rem 0.3rem;border: 0.01rem solid #eee;}
  .wxParse{overflow:hidden;}
</style>




<script>
import store from '../../store.js'
 import reques from '../../utils/reques.js'
import wxparse from 'mpvue-wxparse'
export default {

  data () {
    return {

     imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    info:{},
    spec_array:[],   // 这个是购物车 类型 的分类
    attributeArr:[],  // 这个是所有的类型
    str:[],    // 这个是选中的 类型
    val:null,  //最后显示的类型
    typ:'',
    modle:false,
    goods_id:null,   //商品的id
    pay:false,
    numa:1
  }
  },

  components: {
  
    wxparse

  },

  methods: {
  change(index,k){
    let that=this;
      this.str[k]=index;
      
      var arr=this.attributeArr,strarr=that.str;
      if(this.str.length==this.spec_array.length){
        console.log('开始')
         for(var k in arr){
          for(var key in strarr){
                  if(JSON.stringify(arr[k]).search(strarr[key])>0){
                      if(JSON.stringify(arr[k]).search(strarr[key-1])>0){

                           that.val=that.attributeArr[k]   
                           that.typ=that.str.join() 
                                            
                 }
                    
                      
                  }
              }
          }
      }
     
   
  },
  car(){  //  添加购物车
   this.modle=!this.modle;
   this.pay=true;
  },
  gb(){  //  关闭购物车的选择框
     this.modle=!this.modle;
     this.pay=false
  },
  falsecar(){
    if (this.val) {
      if(typeof this.val.spec_array=='string'){
        this.val.spec_array=JSON.parse(this.val.spec_array)
      }
            if(this.pay){   // 添加购物车。
              // this.val.spec_array=JSON.parse(this.val.spec_array);
                console.log(typeof this.val.spec_array)

              this.modle=!this.modle;
              this.val.goods_id=this.$mp.query.goods_id;
              this.val.store_id=this.info.store_id;
              this.val.goods_name=this.info.goods_name;
              this.val.goods_img=this.info.goods_img;
              this.val.numa=this.numa;
                this.pay=false,
            store.commit('car',this.val)

            }else{
                // 跳转支付
                // this.val.spec_array=JSON.parse(this.val.spec_array);
              this.modle=!this.modle;
              this.val.goods_id=this.$mp.query.goods_id;
              this.val.goods_name=this.info.goods_name;
              this.val.store_id=this.info.store_id;
              
              this.val.numa=this.numa;
              this.val.goods_img=this.info.goods_img;
              const paly=[];
              paly.push(this.val)
            reques.setS('pay',paly)
            reques.nav('../merchandise_buy_2/main',{goods_id:this.$mp.query.goods_id,type:1})  //  type=1 表示是直接进来结算的。
            }
    }
  },  

  payle(){
    this.modle=!this.modle;
   
  },
  reduce(){ // 数量添加
    this.numa--
    this.numa==0? this.numa=1 :this.numa=this.numa
  },
  add(){  // 数量减减
    this.numa++
  },


 
  },
  mounted(){
    let app_id=reques.getS('app_id'),that=this;
    this.goods_id=this.$mp.query.goods_id
     reques.getdata({data:'shop/getGoodInfo'},{app_id:app_id,goods_id:this.$mp.query.goods_id}).then(res=>{
          that.info=res.data.result;
          let arr=res.data.result.spec_array,newarr=[];
          for(var i in arr){
            newarr.push({name:arr[i].name,value:arr[i].value.split(',')})
            }
         that.attributeArr=res.data.result.attribute;
          that.spec_array=newarr;
        });

  },
 


computed: {
    num () {
      return store.state.info.num
    }
   
  },
  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

