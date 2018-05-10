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
                <h4 class="tv_title" id="tv_title">添加收货地址</h4>
            </div>
            <div class="pvgo_address_edit_list">
                <div class="public-list-100 w_style z_name" id="z_name" style="box-shadow: none;">
                        <span class="left tv_name" id="tv_name">
                            收货人
                        </span>
                            <input type="text" name='accept_name' placeholder="请输入收件人姓名" v-model='mod.accept_name' class="et_name" id="et_name">
                </div>
                <div class="public-list-100 w_style z_phone" id="z_phone" style="box-shadow: none;">
                    <span class="left tv_phone" id="tv_phone">手机号码</span>
                            <input type="number" name='mobile' v-model='mod.mobile' placeholder="请输入手机号" class="et_phone" id="et_phone">
                </div>
                <div class="public-list-100 position">
                    <div class="left w_style tv_address" id="tv_address" style="box-shadow: none;">所在地区</div>
                        <div class="right">
                           <picker @change="bindPickerChange"  :range="array" data-type='1'>
                            <div class="dropdown" >
                                <div class="btn btn-default w_style z_address_province" type="button" id="z_address_province" style="box-shadow: none;">
                                    <span  class="choice-name tv_address_province" id="tv_address_province">{{province}}</span>
                                    <!-- <span class="iv_address_province" id="iv_address_province"></span> -->
                                    <img src="/static/images/carset.png" class="iv_address_province" id="iv_address_province" />

                                </div>
                            </div>
                          </picker>
                            <picker @change="bindPickerChange"  :range="chengshi" data-type='2'>
                                <div class="dropdown" >
                                    <div class="btn btn-default w_style z_address_city" type="button" id="z_address_city" style="box-shadow: none;">
                                        <span class="choice-name tv_address_city" id="tv_address_city">{{city}}</span>
                                         <img src="/static/images/carset.png" class="iv_address_city" id="iv_address_city" />
                                    </div>
                                </div>
                            </picker>
                           <picker @change="bindPickerChange"  :range="xian" data-type='3'>
                              <div class="dropdown">
                                  <div class="btn btn-default w_style z_address_area" type="button" id="z_address_area" style="box-shadow: none;">
                                      <span class="choice-name tv_address_area" id="tv_address_area">{{area}}</span>
                                      <img src="/static/images/carset.png" class="iv_address_area" id="iv_address_area" />
                                  </div>
                              </div>
                            </picker>
                             <picker @change="bindPickerChange"  :range="jie" data-type='4'>
                                <div class="dropdown">
                                    <div class="btn btn-default w_style z_address_street" type="button" >
                                        <span class="choice-name tv_address_street" id="tv_address_street">{{street}}</span>
                                        <img src="/static/images/carset.png" class="iv_address_street" id="iv_address_street" />
                                    </div>
                                </div>
                             </picker>
                        </div>
                </div>
                <div class="public-list-100 w_style z_detail_address" id="z_detail_address" style="box-shadow: none;">
                    <span class="left tv_detail_address" id="tv_detail_address">详细地址</span>
                            <input type="text" placeholder="请输入详细地址" name='address' v-model='mod.address' class="et_detail_address" id="et_detail_address">
                </div>
                <div class="public-list-100 w_style z_default_address" id="z_default_address" style="box-shadow: none;" @click='xuan'>
                    <span class="left tv_default_address" id="tv_default_address">默认地址</span>
                    <img src="/static/images/address_add_1_icon_checkbox_down.png" v-if='checke' class=" agree iv_default_address" id="iv_default_address">
                    <input type="checkbox" name="" v-model='checke'  style="display:none;">
                    
                </div>
            </div>
 
            <div class="col-xs-12 adress_list_list_btn" @click='submit'>
              <img src="https://gss0.bdstatic.com/70cFfyinKgQIm2_p8IuM_a/daf/pic/item/3812b31bb051f8193e087138d6b44aed2e73e797.jpg">
                <div class="btn btn-block btn-default w_style tv_submit tv_address_add"  id="tv_submit" style="box-shadow: none;">确定</div>
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
  .row{background: #fff;color: #555;font-size: 0.24rem;}
  .z_title{height: 0.9rem;background: #fff;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;font-size: 0.32rem;}

  /*开始*/
  .pvgo_address_edit_list{margin-top: 0.9rem;}
  .public-list-100{display: flex;padding: 0 0.22rem;justify-content: space-between;height: 0.8rem;align-items: center;border-top: solid 0.02rem #E0E0E0;}
  .public-list-100:last-child{border-bottom: solid 0.02rem #E0E0E0;}
  .public-list-100 input{text-align: right;}
  .position{height: auto;justify-content: flex-start;align-items: flex-start;}
  .dropdown{width: 4.8rem;height: 0.6rem;display: flex;align-items: center;border: #E0E0E0 solid 0.02rem;margin-bottom:0.24rem;background: #f2f2f2; }
  .right{margin-top: 0.8rem; }
  .tv_address{height: 0.8rem;align-items: center;display: flex;}
  .iv_address_province,.iv_address_city,.iv_address_area,.iv_address_street{width: 0.3rem;height: 0.24rem;}
  .btn{display: flex;justify-content: space-between;padding: 0 0.2rem;align-items: center;width: 100%;}
  .et_detail_address{width: 5.2rem;}
  .iv_default_address{width: 0.35rem;height: 0.35rem}
  .adress_list_list_btn{height:0.7rem;position: fixed;bottom: 0;width: 100%;display: flex;justify-content: center;align-items: center;background: #029f98;color: #fff;}
  .adress_list_list_btn img{width: 100%;height: 100%;position: absolute;z-index: 1;}
  .tv_address_add{position: relative;z-index: 2;justify-content: center;}
</style>




<script>
import reques from '../../utils/reques.js'
export default {

  data () {
    return {
      checke:true,
      region:['广东省', '广州市', '海珠区'],
      customItem: '全部',
      province:'--省份--',
      city:'--城市--',
      area:'--县/区--',
       street :'--街道--',
      shengfen:[],
      chengshi:[],
      xian:[],
      jie:[],
      mod:{
        is_default :1,
        province:1,
        city:'',
        area:'',
        street :''
      },
      array:[],
      arrac:[],
      arraa:[],
      arras:[],
      index:1
  }
  },

  components: {
  },

  methods: {
    submit(){
      // this.mod.user_id=reques.getS('user_id');
      this.mod.access_token=reques.getS('token');
      reques.getdata({url:121,data:'pvgo/address/add'},this.mod).then(res=>{
        console.log(res.data)
        if(res.data.code==200){
          wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 2000
        })
          reques.nav('dddd')
        }
      })
      
    },
    xuan(){
      this.checke=!this.checke
      if(this.checke){
        this.mod.is_default=1
      }else{
         this.mod.is_default=0
      }
    },
    region(){
      console.log(1);

    },
     bindPickerChange (e) {
       let app_id=reques.getS('app_id'),that=this;
    console.log('picker发送选择改变，携带值为', e.mp.currentTarget.dataset.type)
    // this.mod.province=this.province[e.mp.detail.value].id;
    // this.province=this.array[e.mp.detail.value];
    // this.mod.province=this.shengfen[e.mp.detail.value].id;

    if(e.mp.currentTarget.dataset.type==1){
      
      this.city='--城市--',
      this.area='--县/区--',
      this.street ='--街道--',
      this.province=this.array[e.mp.detail.value];
            this.mod.province=this.shengfen[e.mp.detail.value].id;
            reques.getdata({data:'public/areas'},{app_id:app_id,parent_id:that.mod.province})
            .then(res=>{
              that.arrac=res.data.result;
              console.log(1)
               const arr=[];
                for(var k in res.data.result){
                  arr.push(res.data.result[k].name)
                }
                that.chengshi=arr;
            })
          } else if(e.mp.currentTarget.dataset.type==2){
            this.area='--县/区--',
            this.street ='--街道--',
            console.log(this.chengshi)
              this.city=this.chengshi[e.mp.detail.value];
            this.mod.city=this.arrac[e.mp.detail.value].id;
            reques.getdata({data:'public/areas'},{app_id:app_id,parent_id:that.mod.city})
            .then(res=>{
               that.arraa=res.data.result;
               const arr=[];
                for(var k in res.data.result){
                  arr.push(res.data.result[k].name)
                }
                that.xian=arr;
            })
          }else if(e.mp.currentTarget.dataset.type==3){
            this.street ='--街道--',
          this.area=this.xian[e.mp.detail.value];
          this.mod.area=this.arraa[e.mp.detail.value].id;
          reques.getdata({data:'public/areas'},{app_id:app_id,parent_id:that.mod.xian})
          .then(res=>{
               that.arras=res.data.result;
             const arr=[];
              for(var k in res.data.result){
                arr.push(res.data.result[k].name)
              }
              that.jie=arr;
          })
          }else{
            this.street=this.jie[e.mp.detail.value];
          this.mod.street=this.arras[e.mp.detail.value].id;
          }
    }

  },
  mounted(){
    if(reques.getS('mod')){
      this.mod=reques.getS('mod')
    }
    
    let app_id=reques.getS('app_id'),user_id=reques.getS('user_id'),that=this;
    reques.getdata({data:'public/areas'},{app_id:app_id,parent_id:0}).then(res=>{
      this.shengfen=res.data.result;
      const arr=[];
      for(var k in res.data.result){
        arr.push(res.data.result[k].name)
      }



      that.array=arr;
      console.log(that.array)
    })
    
  },

  onUnload: function () {
        wx.clearStorageSync('mod')
  },


  created (e) {
    // 调用应用实例的方法获取全局数据
    console.log(this)
}

   

}
</script>

