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
                <a href="../card_list_del_1/main" class="public-title-right tv_right" id="tv_right">解绑</a>

            </div>
            <div class="top"></div>
            <div class="pvgo_card_list w_style z_item_all" id="z_item_all" v-for='item in list'>
                <div class="public-list-100">
                    <span class="card tv_item_card_name" id="tv_item_card_name">{{item.user_name}}</span>
                </div>
                <div class="public-list-100">
                    <span class="card_name tv_item_card_khr_name" id="tv_item_card_khr_name" >{{item.bank.name }}</span>
                </div>
                <div class="public-list-100 card_list">
                    <span class="card_num tv_item_card_num" id="tv_item_card_num">{{item.card_code }}</span>
                </div>
            </div>
            <div class="pvgo_card_list w_style z_item_all" id="z_item_all">
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
            <a href="../card_add_1/main">
              <div class="col-xs-12 adress_list_list_btn">
                <div class="btn btn-block btn-default public-btn-blue w_style tv_bing" id="tv_bing">添加新的银行卡</div>
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
.top{margin-top: 0.9rem;}
.row{color: #555;font-size: 0.3rem;}
.z_title{height: 0.9rem;background: #fff;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.z_video{margin-top: 0.9rem;}
.tv_right{margin-right: 0.1rem;z-index: 2;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
.tv_title{position: relative;z-index: 2;width: 77%;display: flex;justify-content: center;align-items: center;font-size: 0.32rem;}
.z_item_all{padding: 0.22rem 0.24rem;border-top: 0.02rem solid #eee;border-bottom: 0.02rem solid #eee;margin-top: 0.2rem;background: #fff}
.adress_list_list_btn{position: fixed;bottom: 0;height: 0.7rem;width: 100%;color: #fff;background: red;justify-content: center;align-items: center;display: flex;}
.card_list{display: flex;justify-content: flex-end;}
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
    getdata(){
        let that=this;
    // 获取所有的银行。
   
       that.$post({data:'withdraw/getUserBankList'},{app_id:that.$getS('app_id'),access_token:that.$getS('token')}).then(res=>{

        that.list=res.data.result
    })
    }
  },
  mounted(){
   this.getdata()
  },
  onShow(){
this.getdata()
  },
  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

