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
              <h4 class="tv_title" id="tv_title">提现记录</h4>
          </div>
          <div class="top"></div>
            <div class="yk_withdrawal_list w_style z_item_all" id="z_item_all"  v-for='item in list'>
                <div class="public-list-100">
                    <span class="left tv_item_money_desc float_l" id="tv_item_money_desc">提现金额</span>
                    <span class="right tv_item_money float_r" id="tv_item_money">{{item.amount}}元</span>
                </div>
                <div class="public-list-100">
                    <span class="left tv_item_time float_l" id="tv_item_time">{{item.time}}</span>
                    <span class="right tv_item_state float_r" id="tv_item_state">
                      <label v-if='item.status==1'>失败</label>
                      <label v-else-if='0'>未处理</label>
                      <label v-else-if='1'>处理中</label>
                      <label v-else>成功</label>
                    </span>
                </div>
            </div>
          <!--   <div class="yk_withdrawal_list w_style z_item_all" id="z_item_all" style="box-shadow: none;">
                <div class="public-list-100">
                    <span class="left tv_item_money_desc float_l" id="tv_item_money_desc">提现金额</span>
                    <span class="right tv_item_money float_r" id="tv_item_money">500.00元</span>
                </div>
                <div class="public-list-100">
                    <span class="left tv_item_time float_l" id="tv_item_time">2016-10-01 13:14:58</span>
                    <span class="right tv_item_state float_r" id="tv_item_state">处理中</span>
                </div>
            </div>
            <div class="yk_withdrawal_list w_style z_item_all" id="z_item_all" style="box-shadow: none;">
                <div class="public-list-100">
                    <span class="left tv_item_money_desc float_l" id="tv_item_money_desc">提现金额</span>
                    <span class="right tv_item_money float_r" id="tv_item_money">500.00元</span>
                </div>
                <div class="public-list-100">
                    <span class="left tv_item_time float_l" id="tv_item_time">2016-09-11 09:10:01</span>
                    <span class="right tv_item_state float_r" id="tv_item_state">处理中</span>
                </div>
            </div> -->
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
.row{background: #fff;color: #555555;}
.z_title{height: 0.9rem;background: #2f91e8;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.z_video{margin-top: 0.9rem;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;}
.tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}


.z_item_all{border-top: 0.02rem solid #e0e0e0;padding:  0 0.24rem;height: 1.2rem;line-height: 0.6rem;font-size: 0.3rem;}
.z_item_all div{height: 0.6rem;}
.float_l{float: left;}
.float_r{float:right;}
.tv_item_money{color: #828FC8;}
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
    this.$post({data:'withdraw/list'},{app_id:this.$getS('app_id'),access_token:this.$getS('token'),p:this.p,num:10}).then(res=>{
      let arr=that.list;
       let len = res.data.result.length
      for(var i=0;i<len;i++){
       let commonTime = null
        let timestamp = new Date((res.data.result[i].time)*1000);//直接用 new Date(时间戳) 格式转化获得当前时间
        commonTime = timestamp.toLocaleString();
        res.data.result[i].time = commonTime
      }
        that.list=arr.concat(res.data.result)
       
        that.p=that.p++
    })
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

