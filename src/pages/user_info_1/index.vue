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

                <h4 class="tv_title" id="tv_title">基本信息</h4>
            </div>
            <div class="bk_user_info_tou w_style z_avatar" id="z_avatar" @click='photo'>
                <span class="tv_avatar_desc" id="tv_avatar_desc">头&nbsp;像</span>
                <img class="iv_avatar" id="iv_avatar" v-if='info.avatar' :src='info.avatar'  >
                <img class="iv_avatar" id="iv_avatar" v-else src="/static/images/default_avatar.9.png" >

            </div>
            <div class="bk_user_info">
                <ul class="list-unstyled">
                  <!--   <li class="public-list-278 w_style z_school_num" id="z_school_num">
                        <span class="col-xs-4 text-left tv_school_num_desc" id="tv_school_num_desc">学&nbsp;号</span>
                        <span class="col-xs-8 text-right tv_school_num" id="tv_school_num">{{info.school_num}}</span>
                    </li> -->
                    <a :href="'../update_name_1/main?real_name='+info.real_name">
                      <li class="public-list-278 w_style z_name" id="z_name">
                        <span class="tv_name_desc" id="tv_name_desc">姓&nbsp;名</span>
                        <span class="tv_name" id="tv_name">{{info.real_name}}</span>
                      </li>
                    </a>
                     <a :href="'../update_nick_1/main?user_nick='+info.user_nick">
                      <li class="public-list-278 w_style z_nick" id="z_nick">
                          <span class="tv_nick_desc" id="tv_nick_desc">昵&nbsp;称</span>
                          <span class="tv_nick" id="tv_nick">{{info.user_nick}}</span>
                      </li>
                    </a>
                   <a :href="'../update_sex_1/main?sex='+info.sex">
                      <li class="public-list-278 w_style z_sex" id="z_sex">
                        <span class="tv_sex_desc" id="tv_sex_desc">性&nbsp;别</span>
                        <span class="tv_sex" id="tv_sex" v-if='info.sex==1'>女</span>
                        <span class="tv_sex" id="tv_sex" v-if='info.sex==0'>男</span>
                        <span class="tv_sex" id="tv_sex" v-if='info.sex==2'>保密</span>
                      </li>
                   </a>
                    <a :href="'../update_phone_1/main?telephone='+info.telephone">
                        <li class="public-list-278 w_style z_phone" id="z_phone">
                            <span class="tv_phone_desc" id="tv_phone_desc">手机号码</span>
                            <span class="tv_phone" id="tv_phone">{{info.telephone}}</span>
                        </li>
                    </a>
                    <li class="public-list-278 w_style z_address" id="z_address">
                        <span class="tv_address_desc" id="tv_address_desc">所在城市</span>
                        <span class="tv_address" id="tv_address">{{info.region }}</span>
                    </li>
                    <a :href="'../update_sign_1/main?sign_desc='+info.sign_desc">
                      <li class="public-list-278 w_style z_sign" id="z_sign" >
                          <span class="tv_sign_desc" id="tv_sign_desc">个性签名</span>
                          <span class="tv_sign" id="tv_sign">{{info.sign_desc}}</span>
                      </li>
                    </a>
                </ul>
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
  .row{background: #fff;color: #555;font-size: 0.3rem;}
  .z_title{height: 0.9rem;background: #fff;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;font-size: 0.32rem;}

  .z_avatar{margin-top: 0.9rem;border-top:0.2rem solid #eee;border-bottom:0.2rem solid #eee;height: 1.46rem;justify-content: space-between;align-items: center;display: flex;padding: 0 0.2rem;}
  .iv_avatar{width: 1rem;height: 1rem;}
  .public-list-278{height: 0.74rem;padding: 0 0.2rem;border-top: 0.02rem solid #eee;display: flex;align-items: center;justify-content: space-between;}
  .public-list-278:last-child{border-bottom: 0.02rem solid #eee;}
  .z_sign{height: auto;}
  .tv_sign_desc{height:0.74rem;display: flex;align-items: center; width: 1.3rem;}
</style>




<script>
import reques from '../../utils/reques.js'
export default {

  data () {
    return {
      tempFilePaths:'',
      info:{avatar:''}
  }
  },

  components: {
  },

  methods: {
  photo(){
    var that=this
    wx.chooseImage({
  count: 1, // 默认9
  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
  success: function (res) {
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    that.tempFilePaths = res.tempFilePaths
    // 头像需要在这里直接上传
   
    



    reques.imgdata( 'auth/updateUserInfo',res.tempFilePaths[0], {access_token:reques.getS('token'),app_id:reques.getS('app_id')},'avatar').then(res=>{
      console.log(res.data)
      if(res.data.code==1000){
        that.info.avatar=res.tempFilePaths[0];
      reques.toast('修改成功')
      }
    })
  }
})
  }
  },
  mounted(){
    let token=reques.getS('token'),app_id=reques.getS('app_id'),that=this;
    reques.getdata({data:'auth/userInfo'},{access_token:token,app_id:app_id}).then(res=>{
      that.info=res.data.result;
    })
  },
  onShow(){
 let token=reques.getS('token'),app_id=reques.getS('app_id'),that=this;
    reques.getdata({data:'auth/userInfo'},{access_token:token,app_id:app_id}).then(res=>{
      that.info=res.data.result;
    })
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

