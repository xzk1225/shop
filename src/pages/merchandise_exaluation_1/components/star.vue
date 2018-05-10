<template>
  <div>
    <img v-for='item in num ' @click='star(1,index)' src="/static/images/icon_star_orange_down.png">
    <img v-for='item in (5 - num)' @click='star(2,index)' src="/static/images/icon_star_orange_up.png">
  </div>
</template>
<style scoped>
   img{width: 0.32rem;height: 0.32rem;margin-right: 0.09rem;}
</style>




<script>

export default {

   props: ['num'],
   methods:{
     star(type,index){
   

    
    if(type==1){
      this.point=index+1;
    }else{
      this.point=this.point+index+1;
    }
    
    // console.log(this.list)
   }
   }
}
</script>

