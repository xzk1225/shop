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

                <h4 class="tv_title" id="tv_title">积分明细</h4>

            </div>
<div class="top"></div>
            <div class="w_style z_item_all" id="z_item_all" v-for='item in list'>
              <div>
                <div class="tv_item_cate" id="tv_item_cate">
                  <span v-if='item.cate==0'>奖励</span> 
                  <span v-if='item.cate==1'>自己消费</span>
                  <span v-if='item.cate==2'>2下级消费</span>
                  <span v-if='item.cate==3'>推荐会员</span>
                  <span v-if='item.cate==4'>下级充值</span></div>
                <div class="tv_item_time" id="tv_item_time">{{item.add_time }}</div>
              </div>
              <span class="right tv_item_money" id="tv_item_money"><label v-if='item.type==1'>-</label><label v-else>+</label>{{item.points }}</span>
            </div>
       <!--      <div class="w_style z_item_all" id="z_item_all">
              <div>
                <div class="tv_item_cate" id="tv_item_cate">自己消费</div>
                <div class="tv_item_time" id="tv_item_time">2016-10-08 12:20:58</div>
              </div>
              <span class="right tv_item_money" id="tv_item_money">+100</span>
            </div>
            <div class="w_style z_item_all" id="z_item_all">
              <div>
                <div class="tv_item_cate" id="tv_item_cate">自己消费</div>
                <div class="tv_item_time" id="tv_item_time">2016-10-08 12:20:58</div>
              </div>
              <span class="right tv_item_money" id="tv_item_money">+100</span>
            </div>
            <div class="w_style z_item_all" id="z_item_all">
              <div>
                <div class="tv_item_cate" id="tv_item_cate">自己消费</div>
                <div class="tv_item_time" id="tv_item_time">2016-10-08 12:20:58</div>
              </div>
              <span class="right tv_item_money" id="tv_item_money">+100</span>
            </div>
   -->
      
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
.row{background: #fff;}
.z_title{height: 0.9rem;background: #2f91e8;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
.tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}
/*下方为开始主题部分*/
.z_item_all{display: flex;height: 1.2rem;justify-content: space-between;align-items: center;padding: 0 0.2rem;font-size: 0.3rem;color: #373737;border-bottom: 0.02rem solid #eee;}
.tv_item_money{color: #1A9CE9;}
</style>




<script>
import card from '@/components/card'
import store from '../../store.js'
export default {

  data () {
    return {
    p:1,
    list:[]
  }
  },

  components: {
 card
  },

  methods: {
    check(){
      store.commit('check')
    }
  },
computed: {
    price () {
      return store.state.price
    },
    shoplist(){
      return store.state.shoplist
    },
    getdata(){
       let that=this;
    this.$post({data:'user/pointsLogs'},{app_id:this.$getS('app_id'),access_token:this.$getS('token'),p:this.p,num:10}).then(res=>{
        that.list=res.data.result;
        
    })
    that.p=that.p++
    }
   
  },

  mounted(){
   this.getdata()
  },
  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

