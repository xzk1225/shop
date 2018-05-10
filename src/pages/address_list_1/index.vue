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
                <h4 class="tv_title" id="tv_title">收货地址</h4>
            </div>
                  

            <div class="pvgo_adress_list_list" v-for='item in list'>
                <div class="public-list-100 w_style z_item_all" id="z_item_all">
                    <div class="add_name">
                        <span class="left tv_item_name" id="tv_item_name">{{item.accept_name}}</span>
                        <span class="right tv_item_phone" id="tv_item_phone">{{item.mobile}}</span>
                    </div>
                    <div>
                        <span class="left tv_item_address" id="tv_item_address">{{item.all_address}}</span>
                    </div>
                </div>
                <div class="public-list-100 z_item_action" id="z_item_action">
                        <div class="x_left">
                            <img v-if='item.is_default' class="agree iv_item_address" id="iv_item_address" src="/static/images/address_add_1_icon_checkbox_down.png">
                            <span @click='set(item.id)' class="default_address tv_default_address" id="tv_default_address">默认地址</span>
                        </div>
                        <div class="x_right">
                          <a href="../address_add_1/main" @click='mod(index)'><img src="/static/images/address_tiezi.png" class="edit iv_item_edit" id="iv_item_edit"></a>
                            <div href="javascript:;" class="line"></div>
                            <img @click='del(item.id)' src="/static/images/address_del.png" class="del iv_item_del" id="iv_item_del">
                        </div>
                </div>
            
            </div>
           <a href="../address_add_1/main">
              <div class="col-xs-12 adress_list_list_btn">
              <img src="https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/3812b31bb051f8193e087138d6b44aed2e73e797.jpg">
                <div class="btn btn-block btn-default public-btn-blue w_style tv_address_add" id="tv_address_add">
                    添加新地址
                </div>
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
  .row{background: #fff;color: #555;font-size: 0.24rem;}
  .z_title{height: 0.9rem;background: #fff;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;font-size: 0.32rem;}
  .pvgo_adress_list_list{margin-top: 0.9rem;}
  .z_item_all{padding: 0.2rem;font-size: 0.24rem;display: flex;flex-direction: column;border-top: 0.02rem solid #E0E0E0;line-height: 1.5em;}
  .add_name{display: flex;justify-content: space-between;}
  .z_item_action{height: 0.8rem;padding: 0.12rem 0.24rem 0.14rem 0.24rem;border-top: 0.02rem solid #E0E0E0;display: flex;align-items: center;justify-content: space-between;}
  .iv_item_address{width: 0.35rem;height: 0.35rem;margin-right: 0.1rem;}
  .x_left{display: flex;}
  .x_right{display: flex;}
  .x_right img{width: 0.28rem;height: 0.28rem;}
  .line{height: 0.28rem;width: 0.04rem;background: #7f7f7f;margin: 0 0.24rem;}
  .adress_list_list_btn{height:0.7rem;position: fixed;bottom: 0;width: 100%;display: flex;justify-content: center;align-items: center;background: #029f98;color: #fff;}
  .adress_list_list_btn img{width: 100%;height: 100%;position: absolute;z-index: 1;}
  .tv_address_add{position: relative;z-index: 2;}
</style>




<script>
import reques from '../../utils/reques.js'
export default {

  data () {
    return {
      list:{}
  }
  },

  components: {
  },

  methods: {
    set(id){
       let user_id=reques.getS('user_id'),app_id=reques.getS('app_id'),that=this;
      reques.getdata({url:1,data:'pvgo/address/isdefault'},{user_id:user_id,app_id:app_id,address_id:id}).then(res=>{

        if(res.data.code==200){
            this.getdata()
            wx.showToast({
            title: '设置默认地址成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
    },
    del(id){
         let user_id=reques.getS('user_id'),app_id=reques.getS('app_id'),that=this;
      reques.getdata({url:1,data:'pvgo/address/delete'},{user_id:user_id,app_id:app_id,address_id:id}).then(res=>{
        if(res.data.code==200){
          this.getdata()
            wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
    },
    mod(id){

      reques.setS('mod',this.list[id])
    },
    getdata(){
      let user_id=reques.getS('user_id'),app_id=reques.getS('app_id'),that=this;
      reques.getdata({url:222,data:'pvgo/address/addresslist'},{user_id:user_id,app_id:app_id,size:10,page:1}).then(res=>{
        console.log(res.data)
        that.list=res.data.data
      })
    }
  },
  mounted(){
   
  },
  onShow(){
     
   this.getdata()
  },
  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

