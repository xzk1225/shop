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

                <h4 class="tv_title" id="tv_title">绑定银行卡</h4>
            </div>
            <div class="top"></div>
            <div class="pvgo_card_add_title">
                <p class="w_style tv_tip" id="tv_tip">请确保姓名、身份证、银行开户人为同一人</p>
            </div>
            <form @submit.prevent="submit">
            <div class="pvgo_card_add">
                <div class="public-list-100 w_style z_card_khr_name" id="z_card_khr_name">
                    <span class="left tv_card_khr_name" id="tv_card_khr_name">真实姓名</span>
                    <input class="right et_card_khr_name" id="et_card_khr_name" name="user_name" placeholder="请输入姓名" type="text">
                </div>
                <div class="public-list-100 w_style z_card_khr_num" id="z_card_khr_num">
                    <span class="left tv_card_khr_num" id="tv_card_khr_num">身份证号</span>
                    <input class="right et_card_khr_num" name="identity_card" placeholder="请填写正确的身份证号" id="et_card_khr_num" type="idcard">
                </div>
                <picker @change="change" :value="index" :range="list">
                  <div class="public-list-100 w_style z_card_name" id="z_card_name">
                      <span class="left tv_card_name_desc" id="tv_card_name_desc">开户银行</span>
                     
                      <span v-if='index'>{{list[index]}}</span>
                      <span v-else>请选择银行</span>
                  </div>
                </picker> 
                <div class="public-list-100 w_style z_card_num" id="z_card_num">
                    <span class="left tv_card_num" id="tv_card_num">银行卡号</span>
                    <input name="bank_num" class="right et_card_num" id="et_card_num" placeholder='请输入银行卡号' type="text">
                </div>
            </div>
            <div class="col-xs-12 adress_list_list_btn">
                <button type="submit" hover-class='none' class="btn btn-block btn-default public-btn-blue w_style tv_submit" formType="submit" id="tv_submit">绑定银行卡</button>
            </div>
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
  .top{height: 0.9rem;}
  .row{background: #fff;color: #555;font-size: 0.3rem;}
  .z_title{height: 0.9rem;background: #fff;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;font-size: 0.32rem;}
  .pvgo_card_add_title{display: flex;justify-content: center;font-size: 0.3rem;color: #828FC8;height: 0.84rem;align-items: center;}
  .z_avatar{margin-top: 0.9rem;border-top:0.2rem solid #eee;border-bottom:0.2rem solid #eee;height: 1.46rem;justify-content: space-between;align-items: center;display: flex;padding: 0 0.2rem;}
  .iv_avatar{width: 1rem;height: 1rem;}
  .public-list-100{height: 0.74rem;padding: 0 0.2rem;border-top: 0.02rem solid #eee;display: flex;align-items: center;justify-content: space-between;}
  .public-list-100:last-child{border-bottom: 0.02rem solid #eee;}
  .public-list-100 input{width: 4.0rem;text-align: right;}
  .adress_list_list_btn{position: fixed;bottom: 0;height: 0.7rem;width: 100%;color: #fff;background: red;justify-content: center;align-items: center;display: flex;}
  .adress_list_list_btn button{width: 100%;height: 100%;margin:0;padding: 0;font-size: 0.3rem;background:transparent;color: #fff; }
</style>




<script>

export default {

  data () {
    return {
      tempFilePaths:'',
      list:[],
      listarr:[],
      index:0,
      bank_id:null
  }
  },

  components: {
  },

  methods: {
    change(e){
      console.log(e)
      this.index=e.mp.detail.value;
      this.bank_id=this.listarr[e.mp.detail.value].id
      
    },
    submit(e){
      console.log(e)
      let that=this;
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  //身份证正则表达式
      e.mp.detail.value.identity_card
      if(reg.test(e.mp.detail.value.identity_card)){
        e.mp.detail.value.app_id=this.$getS('app_id')
        e.mp.detail.value.access_token=this.$getS('token')
        e.mp.detail.value.bank_id=this.bank_id

        this.$post({data:'withdraw/addBank'},e.mp.detail.value).then(res=>{
          if(res.data.code==1000){
            that.$toast('添加成功');
            that.$nav('ss')
          }
        })
      }else{
        this.$toast('请正确输入身份证信息','none')
      }

    }

  },
    mounted(){
      let that= this;
      this.$post({data:'withdraw/getBankList'},{app_id:this.$getS('app_id')}).then(res=>{
        that.listarr=res.data.result
        const arr=res.data.result,newarr=[];
        for(var k in arr){
          newarr.push(arr[k].name)
        }
        that.list=newarr
        console.log(res.data.result)
      })
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

