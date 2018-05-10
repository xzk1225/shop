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

                <h4 class="tv_title" id="tv_title">修改个性签名</h4>
                <span @click='submit' class="public-title-right tv_right" id="tv_right">确定</span>
                
            </div>
            <div class="top"></div>
            <div class="text_box">
              <textarea type="text" maxlength='30'  v-model='sign_desc'  placeholder="请输入个性签名" class="lecture_update_name_code w_style et_content" id="et_content"></textarea>
               
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
.top{margin-top: 0.9rem;}
.row{background: #fff;color: #555;font-size: 0.3rem;}
.z_title{height: 0.9rem;background: #fff;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.z_video{margin-top: 0.9rem;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
.tv_right{z-index: 2;margin-right: 0.1rem;}
.tv_title{position: relative;z-index: 2;width: 77%;display: flex;justify-content: center;align-items: center;font-size: 0.32rem;}
.et_content{display: flex; height: 100%;padding-left: 0.2rem;width: 100%;}
.text_box{height: 2.0rem;padding: 0.2rem;border:0.02rem solid #eee;display: flex;justify-content: center;}
</style>




<script>

  import reques from '../../utils/reques.js'
export default {

  data () {
    return {
      sign_desc:null
  }
  },

  components: {
  },

  methods: {
        submit(){
reques.getdata({data:'auth/updateUserInfo'},{app_id:reques.getS('app_id'),access_token:reques.getS('token'),sign_desc:this.sign_desc}).then(res=>{
  console.log(res.data)
  if(res.data.code==1000){
    reques.toast('修改成功')
    reques.nav('aaaa')
  }
})

  }
  },
    mounted(){
    this.sign_desc=this.$mp.query.sign_desc
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

