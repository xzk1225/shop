<template>
  <div>
    <div class="phone_box">
     <div class="phone_container" style="display: block;">

<div class="wbody z_all" id="z_all" style="background:#f2f2f2;">
    <div class="container">
        <div class="row">
        <!--     <div class="public-title-box w_style z_title" id="z_title">
              <img class="bg" src="">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/zjt.png"></a>
                            
                 <div class="w_style z_search" id="z_search">
                  <img class="iv_search x_search" id="iv_search" src="/static/images/search.png"> 
                  <input type="text" class="iv_search x_input" name="" placeholder="输入搜索内容">
                </div> 

            </div> -->
            <div class="public-title-box w_style z_title" id="z_title">
               <img class="bg" src="">
                <a href="javascript:;" class="public-title-left iv_back" id="iv_back"><img src="/static/images/zjt.png"></a>
                <h4 class="tv_title" id="tv_title">商品列表</h4>
            </div>



       
      <div class="z_tab content" >
        <ul class="list-unstyled ">
          <li class="public-list-278 list_box" v-bind:style="{ left: leftX + 'px' }"  @touchstart ='start($event)' @touchmove='move($event)' @touchend='end($event)'>
            <span :key='index' @click='click(index)' v-for='(item, index) in listarr' :class="{active:index==activer}"  class="col-xs-3 tv_tab_1" id="tv_tab_1"  >
              {{item.cate_name}}
            </span>
           <!--  <span class="col-xs-3 tv_tab_2" id="tv_tab_2">
              女装
            </span>
            <span class="col-xs-3 tv_tab_3" id="tv_tab_3">
              手机
            </span>
            <span class="col-xs-3 tv_tab_4" id="tv_tab_4">
              数码
            </span> -->
          </li>
        </ul>
      </div>
     
      
        
        <div class="list">
          <div class="x_item_all">
            <a class="w_style z_item_all" id="z_item_all" :href="'/pages/merchandise_detail_2/main?goods_id='+item.goods_id"  :key='index' v-for="item in list">
              <img class="iv_item_img" id="iv_item_img" :src="item.goods_img">
              <div class="tv_item_name texte" id="tv_item_name">{{item.goods_name}}}</div>
              <div class="tv_item_price texte" id="tv_item_price">￥{{item.goods_price}}</div>
            </a>
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
  .z_title{height: 0.9rem;background: #2f91e8;display: flex;}
  .z_title{height: 0.9rem;display: flex;justify-content: space-between;position: fixed;background: #1a94e9; align-items: center;top: 0;z-index: 222;width: 100%;}
  .x_title{padding: 0 0.2rem;display: flex;}
  .z_video{margin-top: 0.9rem;}
  .iv_back img{width: 0.44rem;height:  0.44rem;}
  .bg{width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: 1;}
  .iv_back{position: relative;z-index: 2;}
  .tv_title{position: relative;z-index: 2;width: 100%;display: flex;justify-content: center;align-items: center;color: #fff;}
  .content_list{margin-top: 0.2rem;}
  .z_item_all_cate{display: flex;justify-content: center;flex-direction: column;align-content: center;}
  .index_list{background: #fff;padding-bottom: 0.2rem;color: #555555;font-size:0.3rem;}
  .tv_item_name{text-align: center;margin-top: 0.05rem;}
  .content_list{background: #fff;}
  .tag_name{display: flex;justify-content: center;font-size: 0.3rem;color: #1a9ce9;}
  .list{display: flex;flex-wrap: wrap;}

  .x_item_all{width: 50%;display: flex;justify-content: center;align-items: center;flex-direction: column;margin-top: 0.2rem;}
  .z_item_all{width: 3.3rem;display: flex;justify-content: center;align-items: center;flex-direction: column;border: 0.02rem solid #e0e0e0;}
  .z_item_all img{width: 100%;}
  .z_item_all .texte{display: flex;width: 100%;margin-left: 0.175rem;font-size: 0.3rem;color: #373737;}
  .z_item_all .tv_item_price{color: #1a9ce9;}
  .content{margin-top:0.9rem;}
  .list-unstyled{height: 0.8rem;display: flex;width: 100%;overflow: hidden;position: relative;}
  .list_box{display: flex;transition: all 0.1s;font-size: 0.3rem;position: absolute;height: 0.7rem;}
  .list_box span{width: 1.8rem;display: flex;justify-content: center;align-items: center;height: 100%;}
  .active{color: #FF7101;border-bottom: 0.04rem solid #FF7101;}
</style>




<script>
import reques from '../../utils/reques.js'
export default {

  data () {
    return {
      activer:0, 
      width:null,
       left:null,
       leftX:null,
       x:null,
       listarr:['请问1','试试2','请问3','试试4','请问5','试试6','请问7','试试8','请问9','试试10'],
        list:[],
        data:null,
        p:1

        }
     
  },

  components: {
 
  },

  methods: {
    start(e){
       var that=this
     this.x=this.leftX
      this.left=e.clientX
      var query = wx.createSelectorQuery();
      query.select('.tv_tab_1').boundingClientRect()
      query.exec(function (res) {
      //res就是 该元素的信息 数组
      // console.log(res[0].width);
      //取高度
      that.width=res[0].width
      
    })
    },
    move(e){
     
     this.leftX=this.x+(e.clientX-this.left)
 

    },
    end(e){
        this.time()
      
    },
    time(){
       var that=this;
      var right=-(that.listarr.length-4)*that.width
      var a= setInterval(function(){
        if (that.leftX>3) {
                     that.leftX=that.leftX/3
                  }else if(that.leftX<right){
                    that.leftX=right

       
                  } else{
                    clearInterval(a)
                    return false
                    }
             
            
            },2)
    },
    click(index){
 let app_id=reques.getS('app_id')
      this.activer=index;
      this.p=1;
      this.data={app_id:app_id,cate_id:this.listarr[index].cate_id,p:this.p++,num:6}
     
     this.getdata(this.data)
    },
    getdata(data){

        reques.getdata({data:'shop/getGoodList'},data).then(res=>{
        
          that.list=res.data.result
      })
    }
  },
  mounted(){
    let that=this;
    let app_id=reques.getS('app_id')
     console.log(this.$mp.query.cate_id)
     // 获取商品的 列表
     this.data={app_id:app_id,cate_id:this.$mp.query.cate_id,p:this.p++,num:6}
      reques.getdata({data:'shop/getGoodList'},this.data).then(res=>{
        console.log(res.data)
          that.list=res.data.result
      })

          // 获取商品的分类。
       reques.getdata({data:'shop/getShopCate'},{app_id:4}).then(res=>{
          
        console.log(res.data)
       // that.$set('list',res.data.result)
        that.listarr=res.data.result
      })
  },
    onReachBottom: function () {
    this.getdata(this.data)
  },
  created () {
    // 调用应用实例的方法获取全局数据
  
}
}
</script>

