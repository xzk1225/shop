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
                <div class="public-list-100 w_style z_item_all" id="z_item_all" v-for='(item ,key) in list'>
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
                </div>


            <!--    <div class="public-list-100 w_style z_item_all" id="z_item_all">
                    <div class="col-xs-12">
                        <div class="left">
                            <span class="tv_item_name_desc" id="tv_item_name_desc">用户：</span>
                            <span class="tv_item_name" id="tv_item_name">张三</span>
                        </div>
                        <div class="right">
                            <a href="javascript:;" class="iv_item_star" id="iv_item_star"></a>
                            <a href="javascript:;" class="iv_item_star" id="iv_item_star"></a>
                            <a href="javascript:;" class="iv_item_star" id="iv_item_star"></a>
                            <a href="javascript:;" class="iv_item_star" id="iv_item_star"></a>
                            <a href="javascript:;" class="iv_item_star" id="iv_item_star"></a>
                        </div>
                    </div>
                    <div class="col-xs-12">
                        <div class="left tv_item_content" id="tv_item_content">好阿斯顿撒多撒大所所所所所所所所所所所所所所所所所所所所所所所好阿斯顿撒多撒大所所所所所所所所所所所所所所所所所所所所所所所好阿斯顿撒多撒大所所所所所所所所所所所所所所所所所所所所所所所好阿斯顿撒多撒大所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所</div>
                    </div>
                    <div class="col-xs-12">
                        <div class="left time tv_item_time" id="tv_item_time">2016-06-02</div>
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
.z_title{height: 0.9rem;background: #fff;display: flex;}
.z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #fff; align-items: center;top: 0;z-index: 222;width: 100%;}
.x_title{padding: 0 0.2rem;display: flex;}
.z_video{margin-top: 0.9rem;}
.iv_back img{width: 0.44rem;height:  0.44rem;}
.bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
.iv_back{position: relative;z-index: 2;margin-left: 0.2rem;}
.tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #84CCC9;}
.pvgo_merchandise_comment_list{margin-top:0.9rem;}
.z_item_all{display: flex;padding: 0.2rem;flex-direction: column;font-size: 0.24rem;color: #555;background: #fff;border-top:  0.02rem solid #E0E0E0;}
.col-xs-12{margin: 0.05rem 0 0.03rem 0;}
.tv_item_time{color: #777;}
.z_item_all:last-child{border-bottom:0.02rem solid #E0E0E0 ;}
.start img{width: 0.32rem;height: 0.32rem;}
.start{display: flex;justify-content: space-between;}

</style>




<script>
import reques from '../../utils/reques.js'
export default {

  data () {
    return {
    num:5,
    p:1,
    goods_id:'',
    list:[]
  }
  },

  components: {
 
  },

  methods: {
   getdata(){
    let app_id=reques.getS('app_id'),that=this;
    reques.getdata({data:'shop/getGoodComments'},{app_id:app_id,goods_id:this.goods_id,p:this.p++,num:this.num}).then(res=>{
      that.list=res.data.result;
    })
   
   }
  },
  mounted(){
    this.goods_id=this.$mp.query.goods_id
    
    this.getdata()
  },

  created () {
    // 调用应用实例的方法获取全局数据
   
}
}
</script>

