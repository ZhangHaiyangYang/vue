<template>
<div>
  <van-tabs v-model="active">
  <van-tab title="男装"></van-tab>
  <van-tab title="女装"></van-tab>
  <van-tab title="家电"></van-tab>
  <van-tab title="日用品"></van-tab>
</van-tabs>
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img  :src="image" />
  </van-swipe-item>
</van-swipe>
<van-card v-for="items in arr" @click="change(items._id)"  :key="items._id"
  :price="items.price"
  :desc="items.descriptions"  
  :title="items.name"
  :thumb="'http://api.cat-shop.penkuoer.com'+items.coverImg"

/>
<van-tabbar v-model="active" route=true>
  <van-tabbar-item icon="home-o" :to="{name:'index'}">首页</van-tabbar-item>
  <van-tabbar-item icon="comment" :to="{name:'xinxi'}">信息</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart" :to="{name:'cart'}">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o">个人中心</van-tabbar-item>
</van-tabbar>

</div>
</template>
<script>
import axios from "axios";
export default {
    data()
    {
        return{
           active: 0,
          arr:[] ,
          newarr:[],
            images: [
        'https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg',
        'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg',
      ],
        }

    },
    methods:{
     
          change(id)
          {
            var index=this.arr.findIndex(i=>i._id==id);
            this.$router.push({name:'xq',query:{ids:id}});
          }
    },
   created() {
    axios
      .get("http://api.cat-shop.penkuoer.com/api/v1/products", {
        params: {
          page: 2
        }
      })
      .then(datas => {
        this.arr = datas.data.products;
      });
  }
}
</script>

