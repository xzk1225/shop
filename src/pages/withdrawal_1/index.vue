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
                    <h4 class="tv_title" id="tv_title">提现</h4>
            </div>
            <div class="top"></div>
            <form @submit.prevent="submit">
            <div class="pvgo_withdrawal">
              <picker @change="change" :value="index" :range="list">
                <div class="public-list-100 w_style z_card_name" id="z_card_name">
                    <span class="left tv_card_name" id="tv_card_name"><label v-if='index'>{{list[index]}}</label><label v-else>选择提现的银行卡</label></span>
                    <img src="/static/images/right.png" class="right iv_card_name_arrow" id="iv_card_name_arrow">
                </div>
              </picker> 
                <div class="public-list-100">
                    <input type="number" name="money" placeholder="请输入提现金额" class="w_style et_money" id="et_money">
                </div>

            </div>
            <button class="w_style tv_submit" id="tv_submit" formType="submit">
                确认提现
            </button>
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
.row{background: #fff;color: #555;font-size: 0.28rem;}
.z_title{height: 0.9rem;background: #fff;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.z_video{margin-top: 0.9rem;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
.tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;font-size: 0.32rem;}
.public-list-100{height: 0.8rem;display: flex;justify-content: space-between;align-items: center;padding: 0 0.2rem;border-top: 0.02rem solid #eee;}
.iv_card_name_arrow{width: 0.13rem;height: 0.23rem;}
.tv_submit{display: flex;margin: 0 0.2rem;background: #eee;height: 0.8rem;justify-content: center;align-items: center;color: #555;margin-top: 0.4rem;}
</style>




<script>

export default {

  data () {
    return {
       list:[],
      listarr:[],
      index:null,
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
        console.log(this.bank_id)
    },
    submit(e){

      e.mp.detail.value.app_id=   this.$getS('app_id');
      e.mp.detail.value.access_token=   this.$getS('token');
      e.mp.detail.value.card_id=   this.bank_id;
      e.mp.detail.value.type=   0;
     this.$post({data:'withdraw/apply'},e.mp.detail.value).then(res=>{
            console.log(res.data.result)
            that.listarr=res.data.result // 这了是设置全部的卡信息
            const arr=res.data.result,newarr=[];
            for(var k in arr){
              newarr.push(arr[k].bank.name)
            }
            that.list=newarr
            
          })

    }
  },
mounted(){
    let that= this;
      this.$post({data:'withdraw/getUserBankList'},{app_id:this.$getS('app_id'),access_token:this.$getS('token')}).then(res=>{
        console.log(res.data.result)
        that.listarr=res.data.result // 这了是设置全部的卡信息
        const arr=res.data.result,newarr=[];
        for(var k in arr){
          newarr.push(arr[k].bank.name)
        }
        that.list=newarr
        
      })
  },
  created () {
    // 调用应用实例的方法获取全局数据

   
}
}
</script>

