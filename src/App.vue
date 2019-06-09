<template>
  <div id="app">
    <header>
    <van-nav-bar
      left-text="返回" 
      right-text="扫一扫"
      @click-left="onClickLeft"
    />
  </header>
<router-view></router-view>
 <template>
<van-tabbar  
    route=true
    v-model="active"
    v-show="isshow">
  <van-tabbar-item icon="home-o" :to="{name:'index'}">首页</van-tabbar-item>
  <van-tabbar-item icon="comment" :to="{name:'xinxi'}">信息</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart" :to="{name:'cart'}">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o" :to="{name:'geren'}">个人中心</van-tabbar-item>
</van-tabbar>
</template>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: "app",
  computed:{
    ...mapState(['isshow']),
  },
   data() {
    return {
      action:0,
      active:0
    }
  },
  methods: {
    onClickLeft() {
      window.history.go(-1); 
      }
    },
  
};

</script>
<style>
html ,body{
  height: 100%;
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column
}


.van-swipe img{
  width: 100%;
  height: 200px;
}

.van-tabbar--fixed
{
  box-sizing: border-box;
}
#app .van-submit-bar{
  bottom: 50px;
}
.van-nav-bar{
  background:orange;
  
}
 #app .van-card  img{
  width: 70px;
  height: 70px;
  border-radius: 50%
}
#user .van-icon{
  font-size: 50px
}



</style>
