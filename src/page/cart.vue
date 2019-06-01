<template>
<div id="box">
<h1><span>我的购物车</span><span>管理</span></h1>
<div id="cont">
<van-card v-for ="i in 15 " :key="i"

/>
</div>
<van-submit-bar
  :price="3050"
  button-text="提交订单"
 
>
  <van-checkbox v-model="checked">全选</van-checkbox>
</van-submit-bar>

</div>
</template>
<script>

  import  axios from 'axios';
export default {
    data()
    {
        return{
          checked:false
        
        }
    },
}
</script>
<style scoped>
img{
    width: 50px;
    height: 50px;
}
h1{
  height: 50px;
  background:pink;
  display: flex;
  justify-content:space-between;
  line-height: 50px;
 
}
#box{
  overflow: auto;
  background: pink
}
#cont .van-card{
 border: 1px solid orange;
   border-radius: 20px;
   height: 150px;
}
</style>

