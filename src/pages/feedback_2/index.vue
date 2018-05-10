<template>
  <div>
    <div class="phone_box">
     <div class="phone_container" style="display: block;">

<div class="wbody z_all" id="z_all" >
    <div class="container">
        <form @submit.prevent="submit" @reset='reset'>
          <div class="row">
           <div class="public-title-box w_style z_title" id="z_title">
               <img class="bg" src="">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/zjt.png"></a>
                <h4 class="tv_title" id="tv_title">意见反馈</h4>
            </div>
            <div class="top"></div>
            <div class="yd_feedback">
                <textarea class="w_style et_content" name="content" id="et_content" placeholder="请发表你的意见"></textarea>
                <div class="feedback_btn">
                   
                    <button type="submit" form-type='submit' class="w_style tv_submit" id="tv_submit">提交</button>
                    <button type="reset" form-type='reset'   class="w_style tv_rest" id="tv_rest">重置</button>

                </div>
            </div>
          </div>
        </form>
      </div>
    </div>
</div>
</div>
                                            </div>
  </div>
</template>
<style scoped>
.top{height: 0.9rem;}
.z_title{height: 0.9rem;background: #2f91e8;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.z_video{margin-top: 0.9rem;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;}
.tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}

.line{height: 0.2rem; background:#eee;}
.yd_feedback{display: flex;flex-direction: column;}
.et_content{padding: 0.2rem;width: auto;color: #7f7f7f;font-size: 0.3rem;border: 0.02rem solid #eee;}
.feedback_btn{display: flex;justify-content: space-around;}
.feedback_btn button{width: 2.0rem;height:0.8rem;display: flex;justify-content: center;align-items: center;margin-top: 0.3rem; background:#1a94e9;color: #fff; }
</style>




<script>

export default {

  data () {
    return {
        }
  },

  components: {
 
  },

  methods: {
  submit(e){
    console.log(e.mp.detail.value)
    let that=this;
    e.mp.detail.value.app_id=this.$getS('app_id');
    e.mp.detail.value.access_token=this.$getS('token');
    this.$post({data:'public/submitFeedBack'},e.mp.detail.value).then(res=>{
      if(res.data.code==1000){
        that.$toast('提交成功')
        setTimeout(()=>{that.$nav('asd')},200)
      }
    })
  }
    
    
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
}}
</script>

