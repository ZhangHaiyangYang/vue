<template>
  <div id="app">
    <header>
    <van-nav-bar
      
      left-text="返回" 
      right-text="扫一扫"
       border=true

      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <form action="/">
       <van-search
    placeholder="请输入搜索关键词"
  />
</form>
  </header>
<div class="list">
  <transition :name="transitionName">
<router-view></router-view>
  </transition>
</div>

  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
   data() {
    return {
     

    }
  },
  
  methods: {
    onClickLeft() {
      window.history.go(-1); 
     
    },
  
    onClickRight() {}
  }
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
.list{
  overflow: auto
}

</style>
