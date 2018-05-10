// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import reques from './utils/reques.js'

Vue.use(Vuex)

const store = new Vuex.Store({ 
  state: {
    // count: 0, // 
    // price:0, //  总价
    // shoplist:[  // 商品列表也 数组
    //   {num:2,cnt:'www',price:222,color:'红的',chi:'XL',check:false},
    //   {num:2,cnt:'www',price:222,color:'红的',chi:'XL',check:false},
    //   {num:2,cnt:'www',price:222,color:'红的',chi:'XL',check:false},
    //   {num:2,cnt:'www',price:222,color:'红的',chi:'XL',check:false}
    // ],
    // check:false,  // 购物车页面。 是否选中
    // userInfo:null,
    // num:8, //购物车总数量
    info:{
        // count: 0, // 
        // price:0, //  总价
        // shoplist:[],
        // check:false,  // 购物车页面。 是否选中
        // userInfo:null,
        // num:0, //购物车总数量
    }
  },
  mutations: {
    state:(state,data)=>{
        var num=0;

        if(data){
            state.info=data
           
        }else{
          state.info={
                        count: 0, // 
                        price:0, //  总价
                        shoplist:[],
                        check:false,  // 购物车页面。 是否选中
                        userInfo:null,
                        num:0, //购物车总数量
                      } 
        }

       
    },


    add:(state,data)=>{ //商品添加
      state.info.shoplist[data].numa++
      if (state.info.shoplist[data].check) {

      // state.info.price=state.info.shoplist[data].goods_discount_price+state.info.price
      state.info.price=Number(state.info.shoplist[data].goods_discount_price)+state.info.price
      // console.log(state.shoplist[data].price+state.price)
      }
      reques.setS('state', state.info)
    },
    jian:(state,data)=>{ //商品减
      state.info.shoplist[data].numa--
      if (state.info.shoplist[data].numa<1) {
        state.info.shoplist[data].numa=1

      }else{
         if (state.info.shoplist[data].check) {
        state.info.price=state.info.price- Number(state.info.shoplist[data].goods_discount_price);
      }
      }
      reques.setS('state', state.info)
      
    },
    change:(state,data)=>{   //选中商品时候 计算价格

      state.info.shoplist[data].check=!state.info.shoplist[data].check
      if (state.info.shoplist[data].check) {
        state.info.price+=state.info.shoplist[data].goods_discount_price*state.info.shoplist[data].numa
      }else{
         state.info.price-=state.info.shoplist[data].goods_discount_price*state.info.shoplist[data].numa
      }
       reques.setS('state', state.info)
    },
    check: (state)=> {
      state.info.check=!state.info.check
      state.info.price=0
       var leng=state.info.shoplist.length
      if (state.info.check) {
       for (var i = 0; i < leng; i++) {
         state.info.shoplist[i].check=true
         state.info.price+=state.info.shoplist[i].goods_discount_price*state.info.shoplist[i].numa
       }

      }else{
         for (var i = 0; i < leng; i++) {
         state.info.shoplist[i].check=false
         
       }
      }
      reques.setS('state', state.info)
    },
    increment: (state) => {

      const obj = state.info
      obj.count += 1;
      reques.setS('state', obj)
    },
    decrement: (state) => {
      const obj = state.info
      obj.count -= 1;
      reques.setS('state', obj)
    },
    car :( state,data)=>{   //购物车 添加
      let id=true;
      
     

      for(var k in state.info.shoplist){
        if(state.info.shoplist[k].goods_id==data.goods_id){
          id=false;
          
        }
      }
      if(id){
        
      console.log(state.info.shoplist)
      state.info.shoplist.push(data);
      state.info.num=state.info.shoplist.length
      reques.setS('state', state.info)
      wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000
        })
      }else{
        wx.showToast({
          title: '已添加',
          icon: 'none',
          duration: 2000
        })
      }
    
    },
    settlement(state){   // 设置购物车结算时候的数组。
      const paly=[]
      for( var k in state.info.shoplist){

        if(state.info.shoplist[k].check){
          paly.push(state.info.shoplist[k])
        }
      }
      if(paly.length>0){
         reques.setS('pay',paly);
          reques.nav('/pages/merchandise_buy_2/main',{type:0})
      }else{
        wx.showToast({
            title: '请选择要支付的商品',
            icon: 'none',
            duration: 2000
          })
      }

         reques.setS('pay',paly);
          reques.nav('/pages/merchandise_buy_2/main',{})
    
    }
  },

})

export default store
