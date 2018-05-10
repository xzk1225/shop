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
                <h4 class="tv_title" id="tv_title">订单管理</h4>
            </div>
            <div class="top"></div>
      
      <div class="z_tab content">
        <ul class="list-unstyled ">
          <li class="public-list-278">
            <span :key='index' @click='click(index)' v-for='(item, index) in listarr' :class="{active:index==activer}"  class="col-md-5ths tv_tab_1" id="tv_tab_1"  >
              {{item}}
            </span>
           
          </li>
        </ul>
      </div>
      
      <div class="z_item_all" v-for='item in list'>
        <div class="line"></div>
       
        <div class="w_style z_item_all_goods" id="z_item_all_goods" v-for='(k ,key) in item.goods'>
          <img :src="k.goods_img" class="iv_item_img" id="iv_item_img">
          <div class="z_item_right">
            <div class="tv_item_name" id="tv_item_name">{{k.goods_name}}</div>
            <div class="tv_item_attribute" id="tv_item_attribute">
              <span v-for='(key,indexx) in k.goods_attribute '>颜色：</span><span>蓝色</span>
              <span>尺码：</span><span>XL</span>
            </div>
            <div class="price">
              <span class="left tv_item_price" id="tv_item_price">￥{{k.goods_price}}</span>
              <span class="right tv_item_num" id="tv_item_num">x{{k.goods_nums}}</span>
            </div> 
          </div>
        </div>
       
        <div class="w_style z_item_num_price" id="z_item_num_price">
          <span class="tv_item_goods_num" id="tv_item_goods_num">共{{item.x_num}}件商品</span>
          <span class="tv_item_order_money_desc" id="tv_item_order_money_desc">合计：</span>
          <span class="tv_item_order_money" id="tv_item_order_money">￥{{item.x_price}}</span>
        </div>
         <div class="line"></div>
        <div class="but" v-if='activer==0 ||activer==3||activer==2'>
          <div v-if='activer==0'>
            <span class="btn qx" @click='cancel(index)'>取消订单</span>
            <span class="btn zf" @click='pay(index)'>去支付</span>
          </div>
          <div v-else-if='activer==3'>
            <a :href="'../merchandise_exaluation_1/main?order_id='+item.id"><span class="btn pj">去评价</span></a>
          </div>
           <div v-else-if='activer==2'>
            <span class="btn pj " @click='receipt(item.id)'>确认收货</span>
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
  .row{font-size: 0.3rem;}
  .top{height: 0.9rem;}
  .z_title{height: 0.9rem;background: #2f91e8;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}

  .line{height: 0.2rem; background:#eee;}
  .public-list-278{display: flex;}
  .tv_tab_1{width: 20%;display: flex;justify-content: center;align-items: center;height: 0.8rem;font-size: 0.28rem;}
  .active{color: #FF7101;border-bottom: 0.04rem solid #FF7101;}
  .z_item_all_goods{padding: 0.2rem;display: flex;color: #555;border-bottom: 0.02rem solid #eee;}
  .iv_item_img{width: 1.4rem;height: 1.4rem;}
  .z_item_right{display: flex;flex-direction: column;font-size: 0.28rem;margin-left: 0.2rem;}
  .price{margin-top: 0.2rem;width: 4.2rem;display: flex;justify-content: space-between;}
  .tv_item_price{color: #FF6800;}
  .z_item_num_price{padding: 0 0.2rem;display: flex;justify-content: flex-end;height: 0.6rem;font-size: 0.3rem;align-items: center;}
  .tv_item_order_money_desc{margin-left: 0.2rem;}
  .but{display: flex;justify-content: flex-end;border-top: 0.02rem solid #eee;height: 0.8rem;align-items: center;font-size: 0.28rem;}
  .btn{font-size: 0.3rem;padding: 0.05rem 0.08rem;color: #fff;margin-right: 0.1rem;height: 0.4rem;border: 0.02rem solid #eee;}
  .qx{background: #eee;color: #555;}
  .zf{background: red;}
  .pj{color: #555;border:0.02rem solid black;}
</style>




<script>

export default {

  data () {
    return {
      activer:0, 
      p:1,
      listarr:['待付款','待发货','已发货','待评价','已完成'],
      list:[]
        }

  },

  components: {
 
  },

  methods: {
  getdata(){
  let that=this;
  this.p=1;
    this.$post({data:'order/list'},{app_id:this.$getS('app_id'),access_token:this.$getS('token'),num:6,p:this.p,state:this.activer==4 ? 5 : this.activer}).then(res=>{
        that.list=res.data.result;
        var arr=that.list;

        for(var k in arr){
            var x_price=0,x_num=0;
            for(var x in arr[k].goods){
              x_price+=arr[k].goods[x].goods_price*arr[k].goods[x].goods_nums;
              x_num+=arr[k].goods[x].goods_nums
            }
            arr[k].x_price=x_price;
            arr[k].x_num=x_num;

        }
    })
    this.p=this.p++
  },
    
    click(index){
      this.activer=index
      
      this.getdata()
    },
    cancel(index){
      let that=this;
      this.$post({data:'order/cancel'},{app_id:this.$getS('app_id'),access_token:this.$getS('token'),order_sn:this.list[index].order_sn}).then(res=>{
        if(res.data.result==1000){
          that.$toast('取消成功');
          that.getdata()
        }
      })
    },
    // 支付
    pay(index){


    },
    // 确认收货
    receipt(id){
        let that=this;
      this.$post({data:'order/accept'},{app_id:this.$getS('app_id'),access_token:this.$getS('token'),order_id:id}).then(res=>{
        if(res.data.result==1000){
          that.$toast('确认成功');
          that.getdata()
        }
      })
    }
  },
  mounted(){
    this.$mp.query.num==5?this.activer=4 :this.activer=this.$mp.query.num;
    
      if(this.$mp.query.num==5){}
    this.getdata()
  
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
}}
</script>

