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

                <h4 class="tv_title" id="tv_title">我的银行卡</h4>
            </div>
            <div class="top"></div>
            <form  @submit.prevent="submit">
              
            <checkbox-group name='id_array'>
              
            <div class="pvgo_card_list w_style z_item_all" id="z_item_all" v-for='item in list'>
               <label class="checkbox" >
                 <checkbox :value="item.id" />
                <div class="list_card">
                  <div class="public-list-100">
                    <span class="card tv_item_card_name" id="tv_item_card_name">{{item.user_name }}</span>
                  </div>
                  <div class="public-list-100">
                      <span class="card_name tv_item_card_khr_name" id="tv_item_card_khr_name">{{item.bank.name}}</span>
                  </div>
                  <div class="public-list-100 card_list">
                      <span class="card_num tv_item_card_num" id="tv_item_card_num">{{item.card_code }}</span>
                  </div>
                </div>
               </label>
            </div>
      
            <div class="pvgo_card_list w_style z_item_all" id="z_item_all">
              <input type="checkbox" name="" value="1">
                <div class="list_card">
                  <div class="public-list-100">
                    <span class="card tv_item_card_name" id="tv_item_card_name">张三</span>
                </div>
                <div class="public-list-100">
                    <span class="card_name tv_item_card_khr_name" id="tv_item_card_khr_name">中国建设银行</span>
                </div>
                <div class="public-list-100 card_list">
                    <span class="card_num tv_item_card_num" id="tv_item_card_num">**** **** **** **1234</span>
                </div>
                </div>
            </div>
       
            <div class="col-xs-12 adress_list_list_btn">
                <button formType="submit" class="btn btn-block btn-default public-btn-blue w_style tv_bing" id="tv_bing">确定解绑</button>
            </div>
            </checkbox-group>
           </form>
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
  .top{margin-top: 0.9rem;}
  .row{color: #555;font-size: 0.3rem;}
  .z_title{height: 0.9rem;background: #fff;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
  .tv_title{position: absolute;z-index: 1;width: 100%;display: flex;justify-content: center;align-items: center;font-size: 0.32rem;height: 100%;}
  .card_list{display: flex;justify-content: flex-end;}
  .z_item_all{padding: 0.22rem 0.24rem;border-top: 0.02rem solid #eee;border-bottom: 0.02rem solid #eee;margin-top: 0.2rem;background: #fff;display: flex;align-items: center;}
  .adress_list_list_btn{position: fixed;bottom: 0;height: 0.7rem;width: 100%;color: #fff;background: red;justify-content: center;align-items: center;display: flex;}
  .list_card{width: 80%;}
  .checkbox{display: flex;width: 100%;}
  .adress_list_list_btn button{width: 100%;height: 100%;background: transparent;color: #fff;margin:0;padding:0;display: flex;align-items: center;justify-content: center;}
</style>




<script>

export default {

  data () {
    return {
      list:[]
  }
  },

  components: {
  },

  methods: {
    submit(e){
      let that=this;
      e.mp.detail.value.app_id=this.$getS('app_id');
      e.mp.detail.value.access_token=this.$getS('token');
      this.$post({data:'withdraw/delBank'},e.mp.detail.value).then(res=>{
        if(res.data.code==1000){
          that.$nav('aa')
        }
      })
    }
  },
  mounted(){
    let that=this;
    this.$post({data:'withdraw/getUserBankList'},{app_id:this.$getS('app_id'),access_token:this.$getS('token')}).then(res=>{
      that.list=res.data.result
    })
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

