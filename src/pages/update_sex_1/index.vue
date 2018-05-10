<template>
  <div>
    <div class="phone_box">
     <div class="phone_container" style="display: block;">

<div class="wbody z_all" id="z_all" style="background:#f2f2f2;">
    <div class="container">
      <div class="row">
              
           
            
        </div>
         <div class="row">
            <div class="public-title-box w_style z_title" id="z_title">
               <img class="bg" src="">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/icon_back_pale_green.png"></a>

                <h4 class="tv_title" id="tv_title">修改性别</h4>
                <span @click='submit' class="public-title-right tv_right" id="tv_right">确定</span>
            </div>
            <div class="top"></div>
            <div class="lecture_update_sex_info">

              
                <div class="public-list-278 child-add-form">

                  <radio-group class="radio-group" name='sex' @change='chang'>
                <label class="radio" >
                  <p class="col-xs-12 w_style z_man" id="z_man" style="box-shadow: none;">
                        <span class="tv_man" id="tv_man">男</span>
                        <span class="iv_man_state" id="iv_man_state"></span>
                       
                    </p>
                  <radio value="0" :checked="sex==0"/>
                </label>
                <label class="radio">
                   <p class="col-xs-12 w_style z_woman" id="z_woman" >
                        <span class="tv_woman" id="tv_woman">女</span>
                        <span class="iv_woman_state" id="iv_woman_state"></span>
                    </p>
                     <radio value="1" :checked="sex==1"/>
                </label>
              </radio-group>


                   

                   
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
  </div>
</template>
<style scoped>
  .tv_right{z-index: 2;margin-right: 0.1rem;}

  .top{margin-top: 0.9rem;}
  .row{background: #fff;color: #555;font-size: 0.3rem;}
  .z_title{height: 0.9rem;background: #fff;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: red; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
  .tv_title{position: relative;z-index: 2;width: 77%;display: flex;justify-content: center;align-items: center;font-size: 0.32rem;}
  .et_content{display: flex; height: 0.8rem;border:0.02rem solid #eee;padding-left: 0.2rem;}
  .radio{display: flex;justify-content: space-between;padding: 0 0.2rem;border-top: #eee solid 0.02rem;height: 0.8rem;align-items: center;}
  .radio:last-child{border-bottom: #eee solid 0.02rem;}
</style>




<script>
import reques from '../../utils/reques.js'
export default {

  data () {
    return {
      sex:0
  }
  },

  components: {
  },

  methods: {
        submit(){
reques.getdata({data:'auth/updateUserInfo'},{app_id:reques.getS('app_id'),access_token:reques.getS('token'),sex:this.sex}).then(res=>{
  console.log(res.data)
  if(res.data.code==1000){
    reques.toast('修改成功')
    reques.nav('aaaa')
  }
})

  },
  chang(e){
 
    this.sex=e.mp.detail.value
  }

  },
  mounted(){
   
    this.sex=this.$mp.query.sex
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
}



}
</script>

