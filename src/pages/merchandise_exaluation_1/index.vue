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
                <h4 class="tv_title" id="tv_title">商品评价</h4>
            </div>
            <div class="pvgo_merchandise_comment_list">
             <!--    <div class="public-list-100 w_style z_item_all" id="z_item_all" v-for='(item ,key) in list'>
                    <div class="col-xs-12 start">
                        <div class="left">
                            <span class="tv_item_name_desc" id="tv_item_name_desc">用户：</span>
                            <span class="tv_item_name" id="tv_item_name">{{item.user_nick }}</span>
                        </div> 
                        <div class="right">

                          <img v-for='item in item.point ' src="/static/images/icon_star_orange_down.png">
                          <img v-for='item in (5-item.point)' src="/static/images/icon_star_orange_up.png">
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="left tv_item_content" id="tv_item_content">{{item.contents}}</div>
                    </div>
                    <div class="col-xs-12">
                        <div class="left time tv_item_time" id="tv_item_time">{{item.comment_time }}</div>
                    </div>
                </div> -->
                <form @submit.prevent="submit" report-submit='true'>
                <div class="box" :key='key' v-for='(item , ind) in list'>
                  <div class="input">
                    <img :src="item.goods_img">
                    <textarea placeholder="请说说对商品的评价吧！" v-model="item.contents"></textarea>
                  </div>
                  <div class="star">
                    <span>评星</span>
                    <div >
                      <img v-for='item in item.point ' @click='star(1,index,ind)' src="/static/images/icon_star_orange_down.png">
                      <img v-for='item in (5 - item.point)' @click='star(2,index,ind)' src="/static/images/icon_star_orange_up.png">
                    </div>
                  </div>
                  
                </div>

                  <button formType="submit">评价</button>
                </form>
                <!-- <div class="star" v-for='(item,ind) in arr'>
                    <span>评星</span>
                    <div >
                      <img v-for='item in item.point ' @click='star(1,index,ind)' src="/static/images/icon_star_orange_down.png" />
                      <img v-for='item in (5 - item.point)' @click='star(2,index,ind)' src="/static/images/icon_star_orange_up.png" />
                    </div>
                  </div> -->
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
  page{padding-bottom: 0.95rem;}
  .z_title{height: 0.9rem;background: #fff;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #84CCC9;}
  .pvgo_merchandise_comment_list{margin-top:0.9rem;}

  .box{background: #fff;border-top: 0.01rem solid #eee;}
  .input{padding: 0 0.25rem;height: 1.9rem;display: flex;align-items: center;border-bottom: 0.01rem solid #eee;}
  .input img{width: 1.3rem;height: 1.3rem;}
  textarea{height: 1.3rem;margin-left: 0.15rem;font-size: 0.3rem;}
  button{position: fixed;bottom: 0;height: 0.95rem;background: #59d178;color: #fff;width: 100%;border-radius: inherit;}
  .star{height: 0.93rem;border-bottom: 0.01rem solid #eee;display: flex;justify-content: space-between;align-items: center;padding: 0 0.25rem;font-size: 0.3rem;}
  .star img{width: 0.32rem;height: 0.32rem;margin-right: 0.09rem;}
</style>




<script>
export default {

  data () {
    return {
    num:5,
    p:1,
    goods_id:'',
    list:[],
  
  
  }
  },

  components: {
 
  },

  methods: {
   getdata(){
    let app_id=this.$getS('app_id'),that=this;
      this.$post({data:'order/info'},{app_id:app_id,access_token:this.$getS('token'),order_id:this.order_id}).then(res=>{
      that.list=res.data.result.goods;
      for(var k in that.list){
        that.list[k].point=0,
        that.list[k].contents='';
      }
    })
   },
   // 提交评价
   submit(e){
    let that=this,val=0;

    for(var k in this.list){
      console.log(this['contents'+k])
      this.$post({data:'pvgo/goods/commentsadd'},{user_id:this.$getS('user_id'),order_id:this.order_id,goods_id:this.list[k].goods_id,point:this.list[k].point,contents:this.list[k].contents}).then(res=>{
        if(res.data.code==1000){
          val=1000
        }
      })

    }
    if(val==1000){
      this.$toast('评价成功');
      setTimeout(()=>{
        that.$nav('sss')
      },200)
    }
   



   },
   star(type,index,ind){
   let that=this;
    if(type==1){
      // that.list[ind].point=index+1;
      this.$set(this.list[ind], 'point', index+1)
    }else{
      // that.list[ind].point=that.list[ind].point+index+1;
       this.$set(this.list[ind], 'point', that.list[ind].point+index+1)
    }
    this.list.splice()
   }
  },
  mounted(){
    this.order_id=this.$mp.query.order_id
    this.getdata()
  },
  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

