<template>
  <div>
         <div class="cart_list" :key='index' v-for='(item, index) in shoplist'>
    <div class="info w_style z_item_all_goods" id="z_item_all_goods" >
            <input type="checkbox" @click='change(index)' :checked="item.check"  :v-model='item.check' class="left iv_item_select" id="iv_item_select" name="">
            <img class="center" src="/static/images/mp.png" />
            <div class="right">
              <div class="tit tv_item_name" id="tv_item_name">{{item.goods_name}}</div>
              <div class="attr tv_item_attribute" id="tv_item_attribute">
                <span v-for="(key,k) in item.spec_array" :key='key'>{{key.name}}：<span>{{key.value}}</span></span>
                <!-- <span>尺码：</span><span>{{item.chi}}</span> -->
              </div>
              <div class="price">
                <div class="l tv_item_price" id="tv_item_price">
                  ￥{{item.goods_discount_price}}
                </div>
                <div class="r w_style z_item_num" id="z_item_num">
                  
                  <div class="num_box">
                    <div @click='add(index)'>+</div>
                    <div class="tv_item_num" id="tv_item_num">{{item.numa}}</div>
                    <div @click='jian(index)'>-</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>
<style scoped>
.cart_list{padding: 0.2rem 0.2rem;border-bottom: 0.02rem solid #e0e0e0;background: #fff;font-size: 0.26rem;}
.z_item_all_goods{display: flex;align-items: center;}
.center{height: 1.5rem;width: 1.5rem;}
.iv_item_select{transform: scale(0.8,0.8)}
.right{display: flex;flex-direction: column;color: #777777;margin-left: 0.2rem;line-height: 0.5rem;width: 4.55rem}
.price{display: flex;justify-content: space-between;}
.num_box{border:0.02rem solid #eee;width: 2rem;justify-content: space-around;display: flex;}
.num_box div{width: 30%;display: flex;justify-content: center;align-items: center;}
.tv_item_num{border-left:0.02rem solid #eee;border-right:0.02rem solid #eee; }
.tv_item_price{color: #ff3c3f}
</style>




<script>
import store from '../store.js'
export default {

  data () {
    return {
     

  }
  },

 

  methods: {
    add(index){
      // console.log(index)
      store.commit('add',index)
    },
    jian(index){
      
    store.commit('jian',index)
     
    },
    change(index){
      store.commit('change',index)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
},
 computed: {
    shoplist () {
      // store.state.info.shoplist
      // for(var k in store.state.info.shoplist){
      //   store.state.info.shoplist[k].spec_array=JSON.parse(store.state.info.shoplist[k].spec_array)
      //   // console.log(JSON.parse(store.state.info.shoplist[k].spec_array))
      // }
      
      return store.state.info.shoplist
    },
    // tociplist (){
    //   return store.state.info.tociplist
    // },
    price(){
      return store.state.info.price
    }
  }
}
</script>

